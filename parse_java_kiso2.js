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

const blocks = text.split(/^問題\d+[\s　]+/m);
let parsedQuestions = [];

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;
    
    const linesAll = block.split(/\r?\n/);
    const title = linesAll[0].trim();
    
    const ansMatch = block.match(/正答:\s*(\d+)/);
    if (!ansMatch) continue;
    
    const answerIdx = parseInt(ansMatch[1], 10) - 1;
    
    const expMatch = block.match(/解説:\s*([\s\S]*)/);
    let explanation = expMatch ? expMatch[1].trim() : `正解は ${answerIdx + 1}番 です。`;
    
    const qAndOptText = block.substring(0, ansMatch.index).trim();
    const qAndOptLines = qAndOptText.split(/\r?\n/).map(l => l.trim());
    
    let options = [];
    let questionTextLines = [];
    let parsingOptions = false;
    
    for (let line of qAndOptLines) {
        if (line === title) continue;
        
        const optMatch = line.match(/^(\d+)\.\s*(.*)/);
        if (optMatch && parseInt(optMatch[1]) >= 1 && parseInt(optMatch[1]) <= 4) {
            parsingOptions = true;
            options.push(optMatch[2]);
        } else {
            if (parsingOptions && line.trim() !== '') {
                options[options.length - 1] += '\n' + line;
            } else if (!parsingOptions) {
                // Ignore horizontal lines that aren't Java blocks
                if (line.match(/^---+$/) || line.match(/^-{10,}$/)) {
                    continue; 
                }
                questionTextLines.push(line);
            }
        }
    }
    
    if (options.length < 2) {
        console.log("Could not parse options for a block in " + fileName);
        continue;
    }
    
    let questionText = `【${title}】\n` + questionTextLines.join('\n').trim();
    
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
