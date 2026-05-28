const fs = require('fs');

const text = fs.readFileSync('資料/JavaSpring確認試験まとめ.txt', 'utf-8');
const explanations = JSON.parse(fs.readFileSync('explanations_javaspring.json', 'utf-8'));

let qJsContent = fs.readFileSync('questions.js', 'utf-8');
qJsContent = qJsContent.replace(/window\.questionDatabase\s*=\s*questionDatabase;/, '')
                       .replace(/window\.dailySets\s*=\s*dailySets;/, '')
                       .replace(/const questionDatabase\s*=/, 'var questionDatabase =')
                       .replace(/const dailySets\s*=/, 'var dailySets =');

eval(qJsContent); 

let maxId = questionDatabase.reduce((max, q) => Math.max(max, q.id), 0);
let currentId = maxId + 1;

let currentGroupDate = '5/13';
let currentTitle = '';

const chunks = text.split(/問\d+\.\s+/);

const chunk0 = chunks[0];
let dateMatch = chunk0.match(/(\d+\/\d+)/);
if (dateMatch) currentGroupDate = dateMatch[1];
let titleMatch = chunk0.match(/【(.*?)】/);
if (titleMatch) currentTitle = titleMatch[1];

let springQuestions = [];
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
    
    const lines = currentQPart.split(/\r?\n/).map(l => l.trim()).filter(l => l);
    if (lines.length < 5) {
        console.log("Not enough lines in chunk " + i);
        continue;
    }
    
    const options = lines.slice(lines.length - 4);
    const qTextLines = lines.slice(0, lines.length - 4);
    let questionText = qTextLines.join('\n');
    
    if (currentTitle) {
        questionText = '【' + currentTitle + '】\n' + questionText;
    }
    
    const cleanOptions = options.map(opt => opt.replace(/^\d+\.\s*/, ''));
    
    springQuestions.push({
        id: currentId,
        question: questionText,
        options: cleanOptions,
        answer: answerIdx,
        explanation: explanations[i] || `正解は${answerIdx + 1}番です。`,
        category: 'JavaSpring'
    });
    
    if (!springDailySetsMap.has(currentGroupDate)) {
        springDailySetsMap.set(currentGroupDate, []);
    }
    springDailySetsMap.get(currentGroupDate).push(currentId);
    
    currentId++;
    
    if (nextSetupPart) {
        let nDateMatch = nextSetupPart.match(/(?:\n|^)-*\s*[a-zA-Z]*\s*(\d+\/\d+)\s*(?:\n|$)/);
        if (nDateMatch) {
            currentGroupDate = nDateMatch[1];
        }
        
        let nTitleMatch = nextSetupPart.match(/【(.*?)】/);
        if (nTitleMatch) {
            currentTitle = nTitleMatch[1];
        } else {
            currentTitle = '';
        }
    }
}

questionDatabase.push(...springQuestions);

for (const [date, qIds] of springDailySetsMap.entries()) {
    dailySets.push({
        date: date,
        title: `JavaSpring確認試験 (${date})`,
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
console.log('Successfully added ' + springQuestions.length + ' JavaSpring questions.');
