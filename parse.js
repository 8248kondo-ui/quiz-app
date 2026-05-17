const fs = require('fs');
const text = fs.readFileSync('Oracle確認試験まとめ.txt', 'utf-8');
const blocks = text.split(/ステップ\d+：/);
const questions = [];
const dailySetsMap = new Map();
let currentGroupDate = '4/15'; // default
let idCounter = 1;

// We will load custom explanations if available
let customExplanations = {};
try {
    customExplanations = JSON.parse(fs.readFileSync('explanations.json', 'utf-8'));
} catch (e) {
    console.log('No explanations.json found, will use default.');
}

// The first block might contain the first date before "ステップ1："
const firstBlock = blocks[0];
const dateMatch1 = firstBlock.match(/(\d+\/\d+)/);
if (dateMatch1) {
    currentGroupDate = dateMatch1[1];
}

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;
    
    // Parse title
    const titleMatch = block.match(/【(.*?)】/);
    const title = titleMatch ? titleMatch[1] : '';
    
    const lines = block.split(/\r?\n/).map(l => l.trim()).filter(l => l);
    
    const qStartIndex = lines.findIndex(l => l.startsWith('問1.'));
    if (qStartIndex === -1) {
        continue;
    }
    
    const ansIndex = lines.findIndex(l => l.startsWith('正解：'));
    if (ansIndex === -1) continue;
    
    const ansLine = lines[ansIndex];
    let ansMatch = ansLine.match(/正解：(\d+)番/);
    if (!ansMatch) continue;
    const answerIdx = parseInt(ansMatch[1], 10) - 1;
    
    const options = lines.slice(ansIndex - 4, ansIndex);
    
    let qLines = lines.slice(qStartIndex, ansIndex - 4);
    qLines[0] = qLines[0].replace(/^問1\.\s*/, '');
    let questionText = qLines.join('\n');
    if (title) {
        questionText = '【' + title + '】\n' + questionText;
    }
    
    if (options.length < 2) continue;
    
    const explanationText = customExplanations[idCounter] || `正解は${answerIdx + 1}番です。`;

    questions.push({
        id: idCounter,
        question: questionText,
        options: options,
        answer: answerIdx,
        explanation: explanationText,
        category: 'Oracle'
    });

    if (!dailySetsMap.has(currentGroupDate)) {
        dailySetsMap.set(currentGroupDate, []);
    }
    dailySetsMap.get(currentGroupDate).push(idCounter);
    
    idCounter++;

    // Check if there's a new date after this block's answer
    // Look in the remaining lines of the block for something like "4/16"
    const afterAnsLines = lines.slice(ansIndex + 1);
    for (const l of afterAnsLines) {
        const dateMatch = l.match(/^(\d+\/\d+)$/);
        if (dateMatch) {
            currentGroupDate = dateMatch[1];
        }
    }
}

// Format dailySets
// Also need to preserve existing dailySets for Java? The user said "問題を一回消してください" earlier, so we only have Oracle sets right now.
// If the user wants to add Java back later, they can. For now, we will output only the Oracle ones as requested.
const newDailySets = [];
for (const [date, qIds] of dailySetsMap.entries()) {
    newDailySets.push({
        date: date,
        title: `Oracle確認試験 (${date})`,
        questions: qIds
    });
}

const jsContent = `/**
 * 問題データベース
 */
const questionDatabase = ${JSON.stringify(questions, null, 4)};

/**
 * 日ごとのクイズセット
 */
const dailySets = ${JSON.stringify(newDailySets, null, 4)};

// 他のファイルから参照できるようにエクスポート
window.questionDatabase = questionDatabase;
window.dailySets = dailySets;
`;

fs.writeFileSync('questions.js', jsContent, 'utf-8');
console.log('Successfully updated questions.js with ' + questions.length + ' questions.');
