const fs = require('fs');

function parseMarkdownStyle(filename) {
    if (!fs.existsSync(filename)) return [];
    const text = fs.readFileSync(filename, 'utf-8');
    
    const parts = text.split(/^##\s+第/m);
    
    const intro = parts[0].trim();
    const chapters = [];
    
    if (intro) {
        chapters.push({
            id: '0',
            title: 'はじめに',
            content: intro
        });
    }
    
    for (let i = 1; i < parts.length; i++) {
        const lines = parts[i].trim().split('\n');
        const titleLine = lines[0].trim();
        const title = "第" + titleLine;
        const content = lines.slice(1).join('\n').trim();
        
        chapters.push({
            id: i.toString(),
            title: title,
            content: content
        });
    }
    return chapters;
}

function parseHTMLStyle(filename) {
    if (!fs.existsSync(filename)) return [];
    const text = fs.readFileSync(filename, 'utf-8');
    
    const chapters = [];
    let currentChapter = null;
    const lines = text.split('\n');
    let contentAcc = [];
    
    for (let line of lines) {
        // Matches "1. " or "2. "
        const m = line.match(/^(\d+)\.\s+(.*)$/);
        if (m) {
            if (currentChapter) {
                currentChapter.content = contentAcc.join('\n').trim();
                chapters.push(currentChapter);
            } else {
                const intro = contentAcc.join('\n').trim();
                if (intro) {
                    chapters.push({ id: '0', title: 'はじめに', content: intro });
                }
            }
            currentChapter = {
                id: m[1],
                title: m[1] + '. ' + m[2],
                content: ''
            };
            contentAcc = [];
        } else {
            contentAcc.push(line);
        }
    }
    
    if (currentChapter) {
        currentChapter.content = contentAcc.join('\n').trim();
        chapters.push(currentChapter);
    }
    
    return chapters;
}

const learnData = {
    Spring: parseMarkdownStyle('資料/springまとめ.txt'),
    Java: parseMarkdownStyle('資料/Javaまとめ.txt'),
    Oracle: parseMarkdownStyle('資料/Oracleまとめ.txt'),
    'HTML/CSS': parseHTMLStyle('資料/HTMLまとめ.txt'),
    JavaScript: parseMarkdownStyle('資料/JavaScriptまとめ.txt')
};

const jsOutput = `const learnDatabase = ${JSON.stringify(learnData, null, 4)};\nwindow.learnDatabase = learnDatabase;\n`;
fs.writeFileSync('learn_data.js', jsOutput, 'utf-8');
console.log('Successfully parsed all learning data.');
