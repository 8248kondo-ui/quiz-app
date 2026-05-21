document.addEventListener('DOMContentLoaded', () => {
    // データ
    const database = window.questionDatabase;
    const dailySets = window.dailySets;

    // 状態
    let currentSet = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let currentDate = new Date(2026, 4, 1); // 2026年5月をデフォルトとする
    let wrongQuestions = []; // 間違えた問題番号の記録

    // DOM要素
    const homeView = document.getElementById('home-view');
    const quizView = document.getElementById('quiz-view');
    const archiveView = document.getElementById('archive-view');
    const completeView = document.getElementById('complete-view');
    
    const completeIcon = document.getElementById('complete-icon');
    const completeTitle = document.getElementById('complete-title');
    const completeDesc = document.getElementById('complete-desc');
    
    const landingView = document.getElementById('landing-view');
    const learnView = document.getElementById('learn-view');
    
    const navHome = document.getElementById('nav-home');
    const navQuiz = document.getElementById('nav-quiz');
    const navLearn = document.getElementById('nav-learn');
    const logoBtn = document.getElementById('logo-btn');
    
    const landingBtnQuiz = document.getElementById('landing-btn-quiz');
    const landingBtnLearn = document.getElementById('landing-btn-learn');

    const dailyList = document.getElementById('daily-list');
    
    const calendarMonthTitle = document.getElementById('calendar-month-title');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    const tabBtnCalendar = document.getElementById('tab-btn-calendar');
    const tabBtnCategory = document.getElementById('tab-btn-category');
    const tabContentCalendar = document.getElementById('tab-content-calendar');
    const tabContentCategory = document.getElementById('tab-content-category');
    const categoryTabs = document.querySelectorAll('.cat-tab');
    const categoryList = document.getElementById('category-list');
    
    const currentQuizDate = document.getElementById('current-quiz-date');
    const archiveDateTitle = document.getElementById('archive-date-title');
    
    const questionNumber = document.getElementById('question-number');
    const progressBar = document.getElementById('progress-bar');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    const feedbackOverlay = document.getElementById('feedback-overlay');
    const feedbackTitle = document.getElementById('feedback-title');
    const correctAnswerText = document.getElementById('correct-answer-text');
    const explanationText = document.getElementById('explanation-text');
    const nextBtn = document.getElementById('next-btn');
    
    const archiveList = document.getElementById('archive-list');
    const restartBtn = document.getElementById('restart-btn');
    const reviewWrongBtn = document.getElementById('review-wrong-btn');
    
    const learnSubjects = document.querySelectorAll('.subject-tab');
    const learnChaptersList = document.getElementById('learn-chapters-list');
    const learnChapterTitle = document.getElementById('learn-chapter-title');
    const learnChapterBody = document.getElementById('learn-chapter-body');
    
    const learnProgressText = document.getElementById('learn-progress-text');
    const learnProgressFill = document.getElementById('learn-progress-fill');
    const learnChapterActions = document.getElementById('learn-chapter-actions');
    const markReadBtn = document.getElementById('mark-read-btn');
    const learnNavigation = document.getElementById('learn-navigation');
    const prevChapterBtn = document.getElementById('prev-chapter-btn');
    const nextChapterBtn = document.getElementById('next-chapter-btn');
    const learnQuizActionContainer = document.getElementById('learn-quiz-action-container');
    const jumpToQuizBtn = document.getElementById('jump-to-quiz-btn');
    
    const backToHomeBtns = document.querySelectorAll('.back-to-home-btn');

    // 初期化
    renderHome();
    switchView('landing');

    // イベントリスナー
    navHome.addEventListener('click', () => switchView('landing'));
    logoBtn.addEventListener('click', () => switchView('landing'));
    navQuiz.addEventListener('click', () => switchView('home'));
    navLearn.addEventListener('click', () => switchView('learn'));
    
    landingBtnQuiz.addEventListener('click', () => switchView('home'));
    landingBtnLearn.addEventListener('click', () => switchView('learn'));
    
    backToHomeBtns.forEach(btn => btn.addEventListener('click', () => switchView('home')));
    
    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
    }
    
    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }
    
    // タブ切り替えのイベントリスナー
    tabBtnCalendar.addEventListener('click', () => {
        tabBtnCalendar.classList.add('active');
        tabBtnCategory.classList.remove('active');
        tabContentCalendar.classList.remove('hidden');
        tabContentCategory.classList.add('hidden');
    });

    tabBtnCategory.addEventListener('click', () => {
        tabBtnCategory.classList.add('active');
        tabBtnCalendar.classList.remove('active');
        tabContentCategory.classList.remove('hidden');
        tabContentCalendar.classList.add('hidden');
        
        // 最初のカテゴリを自動選択
        if (!document.querySelector('.cat-tab.active')) {
            if (categoryTabs.length > 0) categoryTabs[0].click();
        }
    });

    // カテゴリ選択のイベントリスナー
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.getAttribute('data-cat');
            renderCategory(cat);
        });
    });
    
    restartBtn.addEventListener('click', () => {
        startQuiz(currentSet);
    });

    if (reviewWrongBtn) {
        reviewWrongBtn.addEventListener('click', () => {
            showArchive(currentSet, true);
        });
    }

    // 学習画面（Learn View）のロジック
    let currentLearnSubject = 'Spring';
    let currentChapterIndex = 0;
    let readChapters = JSON.parse(localStorage.getItem('quizMasterReadChapters') || '{}');
    
    // Jump to quiz button logic
    if (jumpToQuizBtn) {
        jumpToQuizBtn.addEventListener('click', () => {
            switchView('home');
            // Select the tab corresponding to the subject if it exists
            const catTab = Array.from(document.querySelectorAll('.cat-tab')).find(tab => tab.getAttribute('data-cat') === currentLearnSubject);
            if (catTab) {
                tabBtnCategory.click();
                catTab.click();
            }
        });
    }

    learnSubjects.forEach(tab => {
        tab.addEventListener('click', () => {
            learnSubjects.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLearnSubject = tab.getAttribute('data-subject');
            currentChapterIndex = 0;
            renderLearnChapters();
        });
    });

    function renderLearnChapters() {
        if (!window.learnDatabase) return;
        
        const chapters = window.learnDatabase[currentLearnSubject] || [];
        learnChaptersList.innerHTML = '';
        
        if (chapters.length === 0) {
            learnChaptersList.innerHTML = '<p class="tab-description">準備中...</p>';
            learnChapterTitle.textContent = `${currentLearnSubject} の解説`;
            learnChapterBody.innerHTML = '<p class="placeholder-text">この単元の解説は現在準備中です。</p>';
            if(learnChapterActions) learnChapterActions.classList.add('hidden');
            if(learnNavigation) learnNavigation.classList.add('hidden');
            if(learnQuizActionContainer) learnQuizActionContainer.classList.add('hidden');
            if(learnProgressText) learnProgressText.textContent = '0%';
            if(learnProgressFill) learnProgressFill.style.width = '0%';
            return;
        }

        let readCount = 0;
        chapters.forEach(c => {
            if (readChapters[`${currentLearnSubject}_${c.id}`]) readCount++;
        });
        const progress = Math.round((readCount / chapters.length) * 100);
        if(learnProgressText) learnProgressText.textContent = `${progress}%`;
        if(learnProgressFill) learnProgressFill.style.width = `${progress}%`;

        chapters.forEach((chapter, index) => {
            const btn = document.createElement('button');
            btn.className = 'chapter-btn';
            
            const isRead = readChapters[`${currentLearnSubject}_${chapter.id}`];
            if (isRead) btn.classList.add('read');
            
            btn.innerHTML = `<span>${chapter.title}</span><span class="check-icon">✅</span>`;
            
            if (index === currentChapterIndex) {
                btn.classList.add('active');
                renderLearnContent(chapter, index, chapters.length);
            }
            
            btn.addEventListener('click', () => {
                document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentChapterIndex = index;
                renderLearnContent(chapter, index, chapters.length);
            });
            
            learnChaptersList.appendChild(btn);
        });
    }

    function renderLearnContent(chapter, index, totalLength) {
        learnChapterTitle.textContent = chapter.title;
        
        let htmlContent = chapter.content
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            // コードブロック
            .replace(/```[a-z]*\r?\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            // インラインコード
            .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
            // 見出し
            .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
            .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
            // リスト
            .replace(/^・(.*)$/gm, '<ul><li>$1</li></ul>')
            .replace(/<\/ul>\r?\n<ul>/g, '\n') // 隣接するリストを結合
            // 古いアスキーアート表対応
            .replace(/(┌[\s\S]*?└[─]*┘)/g, '<pre>$1</pre>')
            // 改行
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>');
            
        learnChapterBody.innerHTML = `<p>${htmlContent}</p>`;
        
        if(learnChapterActions) learnChapterActions.classList.remove('hidden');
        if(learnNavigation) learnNavigation.classList.remove('hidden');
        
        const chapterKey = `${currentLearnSubject}_${chapter.id}`;
        if (readChapters[chapterKey]) {
            markReadBtn.textContent = '✅ 読了済み';
            markReadBtn.classList.add('completed');
            markReadBtn.onclick = null;
        } else {
            markReadBtn.textContent = '✅ この章を読み終えた';
            markReadBtn.classList.remove('completed');
            markReadBtn.onclick = () => {
                readChapters[chapterKey] = true;
                localStorage.setItem('quizMasterReadChapters', JSON.stringify(readChapters));
                renderLearnChapters();
            };
        }
        
        if (index === 0) {
            prevChapterBtn.disabled = true;
            prevChapterBtn.onclick = null;
        } else {
            prevChapterBtn.disabled = false;
            prevChapterBtn.onclick = () => {
                currentChapterIndex = index - 1;
                renderLearnChapters();
            };
        }
        
        if (index === totalLength - 1) {
            nextChapterBtn.disabled = true;
            nextChapterBtn.onclick = null;
            if(learnQuizActionContainer) learnQuizActionContainer.classList.remove('hidden');
        } else {
            nextChapterBtn.disabled = false;
            if(learnQuizActionContainer) learnQuizActionContainer.classList.add('hidden');
            nextChapterBtn.onclick = () => {
                currentChapterIndex = index + 1;
                renderLearnChapters();
            };
        }
    }

    function switchView(viewName) {
        [landingView, homeView, quizView, archiveView, completeView, learnView].forEach(view => {
            if(view) view.classList.add('hidden');
        });
        [navHome, navQuiz, navLearn].forEach(btn => {
            if(btn) btn.classList.remove('active');
        });

        if (viewName === 'landing') {
            if(landingView) landingView.classList.remove('hidden');
            if(navHome) navHome.classList.add('active');
        } else if (viewName === 'home') {
            if(homeView) homeView.classList.remove('hidden');
            if(navQuiz) navQuiz.classList.add('active');
        } else if (viewName === 'learn') {
            if(learnView) learnView.classList.remove('hidden');
            if(navLearn) navLearn.classList.add('active');
            // 学習画面を開いた時に目次を描画
            renderLearnChapters();
        } else if (viewName === 'quiz') {
            if(quizView) quizView.classList.remove('hidden');
            if(navQuiz) navQuiz.classList.add('active');
        } else if (viewName === 'archive') {
            if(archiveView) archiveView.classList.remove('hidden');
            if(navQuiz) navQuiz.classList.add('active');
        } else if (viewName === 'complete') {
            if(completeView) completeView.classList.remove('hidden');
            if(navQuiz) navQuiz.classList.add('active');
        }
    }

    // ホーム画面の描画
    function renderHome() {
        dailyList.innerHTML = '';
        renderCalendar();
        
        // 初期表示として最新のコースカードを表示しておく
        if (dailySets.length > 0) {
            const latestSet = dailySets[dailySets.length - 1];
            showDailyCard(latestSet);
            
            // カレンダー描画直後なので少し遅らせて選択状態にする
            setTimeout(() => {
                const cells = document.querySelectorAll('.calendar-cell');
                const latestDateStr = latestSet.date;
                cells.forEach(cell => {
                    const [m, d] = latestDateStr.split('/');
                    // 月が一致しているか確認 (currentDateの月と一致する場合のみ選択)
                    if (currentDate.getMonth() + 1 === parseInt(m) && cell.textContent === d) {
                        cell.classList.add('selected');
                    }
                });
            }, 50);
        }
    }

    function renderCalendar() {
        if (!calendarGrid) return;
        
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        calendarMonthTitle.textContent = `${year}年 ${month + 1}月`;
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const headers = `
            <div class="calendar-day-header">日</div>
            <div class="calendar-day-header">月</div>
            <div class="calendar-day-header">火</div>
            <div class="calendar-day-header">水</div>
            <div class="calendar-day-header">木</div>
            <div class="calendar-day-header">金</div>
            <div class="calendar-day-header">土</div>
        `;
        calendarGrid.innerHTML = headers;
        
        for (let i = 0; i < firstDay; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell empty';
            calendarGrid.appendChild(cell);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            cell.textContent = day;
            
            const dateStr = `${month + 1}/${day}`;
            const set = dailySets.find(s => s.date === dateStr);
            
            if (set) {
                cell.classList.add('has-quiz');
                cell.addEventListener('click', () => {
                    document.querySelectorAll('.calendar-cell').forEach(c => c.classList.remove('selected'));
                    cell.classList.add('selected');
                    showDailyCard(set);
                });
            } else {
                cell.classList.add('disabled');
            }
            
            calendarGrid.appendChild(cell);
        }
    }

    function showDailyCard(set) {
        dailyList.innerHTML = '';
        createCardDOM(set, dailyList);
    }

    // カテゴリごとの問題を生成
    function renderCategory(category) {
        categoryList.innerHTML = '';
        
        if (category === 'ランダム問題') {
            const shuffledDB = [...database].sort(() => Math.random() - 0.5);
            const random10 = shuffledDB.slice(0, 10).map(q => q.id);
            const set = {
                date: 'ランダム問題',
                title: '全範囲からランダム10問',
                questions: random10,
                isRandom: true
            };
            createCardDOM(set, categoryList);
            return;
        }

        // 総合問題も他のカテゴリと同様にdailySetsから取得するようにします。

        // dailySets の中から、このカテゴリに属するセットを探す
        const categorySets = dailySets.filter(set => {
            if (!set.questions || set.questions.length === 0) return false;
            const firstQuestion = getQuestionById(set.questions[0]);
            return firstQuestion && firstQuestion.category === category;
        });

        if (categorySets.length > 0) {
            // カテゴリ専用のセット（日付ごとなど）がある場合は、複数カードを並べる
            categorySets.forEach(set => {
                createCardDOM(set, categoryList);
            });
        } else {
            // 専用のセットがない場合は、全問題を1つのカードにまとめる
            const questionsForCat = database.filter(q => q.category === category).map(q => q.id);
            if (questionsForCat.length === 0) {
                categoryList.innerHTML = '<p class="tab-description" style="margin-top: 40px;">この単元の問題はまだ準備中です。</p>';
                return;
            }
            const set = {
                date: category,
                title: `${category} の問題`,
                questions: questionsForCat
            };
            createCardDOM(set, categoryList);
        }
    }

    // カードを生成してコンテナに追加するヘルパー関数
    function createCardDOM(set, container) {
        const card = document.createElement('div');
        card.className = 'daily-card';
        
        card.innerHTML = `
            <div class="daily-date">${set.date}</div>
            <div class="daily-title">${set.title}</div>
            <div class="daily-info">全 ${set.questions.length} 問</div>
            <div class="daily-actions">
                <button class="daily-btn btn-play">クイズ開始</button>
                <button class="daily-btn btn-review">解説を見る</button>
            </div>
        `;
        
        const playBtn = card.querySelector('.btn-play');
        const reviewBtn = card.querySelector('.btn-review');
        
        playBtn.addEventListener('click', () => startQuiz(set));
        reviewBtn.addEventListener('click', () => showArchive(set));
        
        container.appendChild(card);
    }

    // IDから問題オブジェクトを取得するヘルパー関数
    function getQuestionById(id) {
        return database.find(q => q.id === id);
    }

    // クイズの開始
    function startQuiz(set) {
        currentSet = set;

        if (set.isRandom) {
            const shuffledDB = [...database].sort(() => Math.random() - 0.5);
            set.questions = shuffledDB.slice(0, 10).map(q => q.id);
        }

        // idから問題のデータを取り出す
        currentQuestions = set.questions.map(id => getQuestionById(id)).filter(q => q != null);
        
        // ランダムシャッフル（総合問題など、特定の条件でシャッフルしたい場合）
        if (set.date === '総合問題') {
            currentQuestions = currentQuestions.sort(() => Math.random() - 0.5);
        }

        currentQuestionIndex = 0;
        wrongQuestions = []; // 不正解リストをリセット
        
        if (/^\d+\/\d+$/.test(set.date)) {
            currentQuizDate.textContent = `${set.date}確認問題`;
        } else {
            currentQuizDate.textContent = set.date;
        }
        switchView('quiz');
        initQuiz();
    }

    function initQuiz() {
        if (currentQuestions.length === 0) return;
        const q = currentQuestions[currentQuestionIndex];
        
        questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        questionText.textContent = q.question;
        optionsContainer.innerHTML = '';
        
        // Create an array of options with their original indices and shuffle them
        let optionsWithOriginalIndices = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        optionsWithOriginalIndices.sort(() => Math.random() - 0.5);
        
        // Save to a module-scoped variable for checkAnswer to use
        window.currentShuffledOptions = optionsWithOriginalIndices;
        
        optionsWithOriginalIndices.forEach((optObj, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = optObj.text;
            button.addEventListener('click', () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const q = currentQuestions[currentQuestionIndex];
        const selectedOriginalIndex = window.currentShuffledOptions[selectedIndex].originalIndex;
        const isCorrect = selectedOriginalIndex === q.answer;
        
        if (!isCorrect && !wrongQuestions.includes(currentQuestionIndex + 1)) {
            wrongQuestions.push(currentQuestionIndex + 1);
        }
        
        const newCorrectIndex = window.currentShuffledOptions.findIndex(opt => opt.originalIndex === q.answer);
        
        feedbackOverlay.className = 'overlay ' + (isCorrect ? 'correct' : 'incorrect');
        feedbackTitle.textContent = isCorrect ? '正解！' : '残念、不正解です...';
        correctAnswerText.textContent = q.options[q.answer];
        explanationText.textContent = `正解は${newCorrectIndex + 1}番です。\n\n${q.explanation}`;
        
        if (isCorrect) {
            nextBtn.textContent = (currentQuestionIndex === currentQuestions.length - 1) ? '結果を見る' : '次へ進む';
            nextBtn.onclick = () => {
                feedbackOverlay.classList.add('hidden');
                goToNext();
            };
        } else {
            // 現在のセットの問題カテゴリが'総合問題'かどうかの判定に加えて、ランダム問題かどうかも判定
            const isSogoMon = currentQuestions.length > 0 && currentQuestions[0].category === '総合問題';
            const isRandom = currentSet.isRandom;
            if (isSogoMon || isRandom) {
                // 総合問題やランダム問題の場合は間違えても次に進む
                nextBtn.textContent = (currentQuestionIndex === currentQuestions.length - 1) ? '結果を見る' : '次へ進む';
                nextBtn.onclick = () => {
                    feedbackOverlay.classList.add('hidden');
                    goToNext();
                };
            } else {
                // 通常は間違えると最初からやり直し
                nextBtn.textContent = '最初からやり直す';
                nextBtn.onclick = () => {
                    feedbackOverlay.classList.add('hidden');
                    currentQuestionIndex = 0;
                    initQuiz();
                };
            }
        }
        
        feedbackOverlay.classList.remove('hidden');
    }

    function goToNext() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            initQuiz();
        } else {
            progressBar.style.width = '100%';
            renderCompleteView();
            switchView('complete');
        }
    }

    function renderCompleteView() {
        const total = currentQuestions.length;
        const wrongs = wrongQuestions.length;
        const corrects = total - wrongs;
        
        if (wrongs === 0) {
            completeIcon.textContent = '🏆';
            completeTitle.textContent = '全問正解！おめでとうございます！';
            completeDesc.textContent = 'この日の課題をクリアしました。明日も頑張りましょう！';
            if (reviewWrongBtn) reviewWrongBtn.classList.add('hidden');
        } else {
            completeIcon.textContent = '📝';
            completeTitle.textContent = `${total}問中 ${corrects}問 正解でした！`;
            completeDesc.innerHTML = `間違えた問題: <br> <strong>${wrongQuestions.join(', ')} 番</strong><br><br>解説を見て復習してみましょう！`;
            if (reviewWrongBtn) reviewWrongBtn.classList.remove('hidden');
        }
    }

    // アーカイブの表示
    function showArchive(set, onlyWrong = false) {
        archiveDateTitle.textContent = `${set.date} の解説`;
        
        // set.questionsがない場合は早期リターン
        if (!set.questions) return;
        
        const questionsForSet = set.questions.map(id => getQuestionById(id)).filter(q => q != null);
        
        archiveList.innerHTML = '';
        questionsForSet.forEach((q, index) => {
            if (onlyWrong && !wrongQuestions.includes(index + 1)) {
                return;
            }
            
            const item = document.createElement('div');
            item.className = 'archive-item';
            // .replace(/\n/g, '<br>') を使って改行コードをHTMLの改行に変換
            const optionsHtml = q.options.map((opt, i) => {
                const isCorrect = i === q.answer;
                return `<li class="${isCorrect ? 'correct-option' : ''}">${opt}</li>`;
            }).join('');

            item.innerHTML = `
                <span class="q-num">Question ${index + 1}</span>
                <h3>${q.question.replace(/\n/g, '<br>')}</h3>
                <div class="archive-details">
                    <div class="options-list-container">
                        <p class="label">選択肢:</p>
                        <ul class="archive-options">
                            ${optionsHtml}
                        </ul>
                    </div>
                    <div class="answer-reveal">
                        <p class="label">正解:</p>
                        <p class="value">${q.options[q.answer]}</p>
                    </div>
                    <div class="explanation-box">
                        <h3>解説</h3>
                        <p>正解は${q.answer + 1}番です。\n\n${q.explanation}</p>
                    </div>
                </div>
            `;
            
            item.addEventListener('click', () => {
                item.classList.toggle('open');
            });
            
            archiveList.appendChild(item);
        });
        
        switchView('archive');
    }
});
