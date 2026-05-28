const fs = require('fs');

const text = fs.readFileSync('資料/SpringFramework確認試験_Practice06to11.txt', 'utf-8');
const explanations = JSON.parse(fs.readFileSync('explanations_spring_p06to11.json', 'utf-8'));

let qJsContent = fs.readFileSync('questions.js', 'utf-8');
qJsContent = qJsContent.replace(/window\.questionDatabase\s*=\s*questionDatabase;/, '')
                       .replace(/window\.dailySets\s*=\s*dailySets;/, '')
                       .replace(/const questionDatabase\s*=/, 'var questionDatabase =')
                       .replace(/const dailySets\s*=/, 'var dailySets =');

eval(qJsContent);

let maxId = questionDatabase.reduce((max, q) => Math.max(max, q.id), 0);
let currentId = maxId + 1;

// ステップ見出しごとにグループ化するための変数
let currentGroupDate = 'P06-11';
let currentTitle = '';

// 問X. の形式でsplit
const chunks = text.split(/問\d+\.\s+/);

// 最初のchunk（ヘッダー部分）からグループ情報を取得
const chunk0 = chunks[0];

// ステップ番号と見出しを取得する関数
function extractStepTitle(str) {
    const stepMatch = str.match(/ステップ\d+：【(.*?)】/);
    if (stepMatch) return stepMatch[1];
    const titleMatch = str.match(/【(.*?)】/);
    if (titleMatch) return titleMatch[1];
    return '';
}

currentTitle = extractStepTitle(chunk0);

let springP06Questions = [];
let springDailySetsMap = new Map();

for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i].trim();

    const ansMatch = chunk.match(/正解：(\d+)番/);
    if (!ansMatch) {
        console.log("No answer found for chunk " + i);
        continue;
    }
    const answerIdx = parseInt(ansMatch[1], 10) - 1;

    const ansIndexPos = ansMatch.index;
    const ansLength = ansMatch[0].length;

    const currentQPart = chunk.substring(0, ansIndexPos).trim();
    const nextSetupPart = chunk.substring(ansIndexPos + ansLength).trim();

    // コードブロックを含む行も含めて分割
    const lines = currentQPart.split(/\r?\n/).map(l => l.trim()).filter(l => l);

    if (lines.length < 5) {
        console.log("Not enough lines in chunk " + i + " (lines=" + lines.length + ")");
        continue;
    }

    // 末尾4行が選択肢（1. 〜 4.）
    const options = lines.slice(lines.length - 4);
    const qTextLines = lines.slice(0, lines.length - 4);
    let questionText = qTextLines.join('\n');

    if (currentTitle) {
        questionText = '【' + currentTitle + '】\n' + questionText;
    }

    const cleanOptions = options.map(opt => opt.replace(/^\d+\.\s*/, ''));

    // 解説を取得（explanationsのキーは1始まりの文字列）
    const explanation = explanations[String(i)] || `正解は${answerIdx + 1}番です。`;

    springP06Questions.push({
        id: currentId,
        question: questionText,
        options: cleanOptions,
        answer: answerIdx,
        explanation: explanation,
        category: 'JavaSpring'
    });

    if (!springDailySetsMap.has(currentGroupDate)) {
        springDailySetsMap.set(currentGroupDate, []);
    }
    springDailySetsMap.get(currentGroupDate).push(currentId);

    currentId++;

    // 次のチャンクのステップ見出しを取得
    if (nextSetupPart) {
        const nextTitle = extractStepTitle(nextSetupPart);
        if (nextTitle) {
            currentTitle = nextTitle;
        }
    }
}

questionDatabase.push(...springP06Questions);

for (const [date, qIds] of springDailySetsMap.entries()) {
    dailySets.push({
        date: date,
        title: `Spring Practice06〜11 確認試験`,
        questions: qIds
    });
}

const finalJsContent = `/**
 * 問題データベース
 */
const questionDatabase = ${JSON.stringify(questionDatabase, null, 4)};

/**
 * 日ごとのクイズセット
 */
const dailySets = ${JSON.stringify(dailySets, null, 4)};

// 他のファイルから参照できるようにエクスポート
window.questionDatabase = questionDatabase;
window.dailySets = dailySets;
`;

fs.writeFileSync('questions.js', finalJsContent, 'utf-8');
console.log('✅ Successfully added ' + springP06Questions.length + ' Spring Practice06-11 questions.');
console.log('   IDs: ' + (maxId + 1) + ' 〜 ' + (currentId - 1));
