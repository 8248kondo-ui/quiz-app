const fs = require('fs');

const fileName = process.argv[2];
const setTitle = process.argv[3];

const text = fs.readFileSync(fileName, 'utf-8');

let qJsContent = fs.readFileSync('questions.js', 'utf-8');
qJsContent = qJsContent.replace(/window\.questionDatabase\s*=\s*questionDatabase;/, '')
                       .replace(/window\.dailySets\s*=\s*dailySets;/, '')
                       .replace(/const questionDatabase\s*=/, 'var questionDatabase =')
                       .replace(/const dailySets\s*=/, 'var dailySets =');

eval(qJsContent); 

let maxId = questionDatabase.reduce((max, q) => Math.max(max, q.id), 0);
let currentId = maxId + 1;

// The separator is "---"
const blocks = text.split(/^---$/m);
let parsedQuestions = [];

for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block || !block.includes('解答：')) continue;
    
    // Find title "問題X：TITLE"
    const titleMatch = block.match(/問題\d+：(.*)/);
    let title = titleMatch ? titleMatch[1].trim() : '';
    
    // Find answer "解答：X"
    const ansMatch = block.match(/解答：([A-D])/);
    if (!ansMatch) continue;
    
    const ansLetter = ansMatch[1];
    let answerIdx = 0;
    if (ansLetter === 'A') answerIdx = 0;
    if (ansLetter === 'B') answerIdx = 1;
    if (ansLetter === 'C') answerIdx = 2;
    if (ansLetter === 'D') answerIdx = 3;
    
    // Find explanation "解説："
    const expMatch = block.match(/解説：([\s\S]*)/);
    const explanation = expMatch ? expMatch[1].trim() : `正解は ${ansLetter} です。`;
    
    // Everything between title and 解答： is question + options
    // Find where the options start: lines starting with "- A.", "- B." etc.
    const qAndOptText = block.substring(0, ansMatch.index).trim();
    
    const lines = qAndOptText.split(/\r?\n/).map(l => l.trim()).filter(l => l);
    
    let options = [];
    let questionLines = [];
    
    for (let line of lines) {
        if (line.match(/^- [A-D]\.\s/)) {
            options.push(line.replace(/^- [A-D]\.\s/, ''));
        } else {
            // Ignore the title line
            if (line.startsWith('問題')) continue;
            questionLines.push(line);
        }
    }
    
    if (options.length < 2) continue;
    
    let questionText = questionLines.join('\n');
    if (title) {
        questionText = '【' + title + '】\n' + questionText;
    }
    
    parsedQuestions.push({
        id: currentId,
        question: questionText,
        options: options,
        answer: answerIdx,
        explanation: explanation,
        category: '総合問題'
    });
    
    currentId++;
}

questionDatabase.push(...parsedQuestions);

dailySets.push({
    date: setTitle,
    title: setTitle,
    questions: parsedQuestions.map(q => q.id)
});

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
console.log(`Successfully added ${parsedQuestions.length} questions from ${fileName}.`);
