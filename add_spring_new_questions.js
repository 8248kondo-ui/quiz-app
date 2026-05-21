const fs = require('fs');

let qJsContent = fs.readFileSync('questions.js', 'utf-8');
qJsContent = qJsContent.replace(/window\.questionDatabase\s*=\s*questionDatabase;/, '')
                       .replace(/window\.dailySets\s*=\s*dailySets;/, '')
                       .replace(/const questionDatabase\s*=/, 'var questionDatabase =')
                       .replace(/const dailySets\s*=/, 'var dailySets =');

eval(qJsContent); 

let maxId = questionDatabase.reduce((max, q) => Math.max(max, q.id), 0);
let currentId = maxId + 1;

const newQuestions = [
    {
        id: currentId++,
        question: "【@RequestMapping】\n@RequestMapping(\"/hello\")と記述した場合の動作として正しいものを選べ。",
        options: [
            "戻り値として「hello」という文字列そのものをブラウザに表示する",
            "パス「/hello」にアクセスがあった時に、このメソッドが呼び出され、戻り値に指定したHTMLファイルが表示される",
            "hello.htmlというファイルが自動で生成される",
            "常にPOSTリクエストのみを受け付けるようになる"
        ],
        answer: 1,
        explanation: "正解は2番です。\n\n@RequestMappingは、URLのパスとメソッドを紐付けるためのアノテーションです。戻り値の文字列は、表示するHTMLファイル名（.htmlを除く）を表します。",
        category: "Spring"
    },
    {
        id: currentId++,
        question: "【application.properties】\nSpringアプリの設定ファイルであるapplication.propertiesの役割として誤っているものを選べ。",
        options: [
            "サーバーのポート番号（server.port）を変更できる",
            "Thymeleafのキャッシュを無効にする設定（spring.thymeleaf.cache=false）ができる",
            "Javaのコードをコンパイルするための設定を記述する",
            "コンテキストパス（server.servlet.context-path）を設定できる"
        ],
        answer: 2,
        explanation: "正解は3番です。\n\napplication.propertiesはアプリの起動時や動作に必要な設定（ポート、DB接続先、キャッシュなど）を記述するファイルであり、コンパイルの設定を行うものではありません。",
        category: "Spring"
    },
    {
        id: currentId++,
        question: "【GETとPOSTの違い】\nWebフォームにおけるGETとPOSTの違いについて、正しいものを選べ。",
        options: [
            "GETはデータがURLに表示されないためパスワード送信に向いており、POSTはURLに表示されるため検索に向いている",
            "GETはデータがURLの末尾に付加されるため検索結果のブックマークが可能であり、POSTはデータがURLに付加されないためパスワード等の送信に向いている",
            "GETはデータベースを更新する専用のメソッドであり、POSTはデータを取得する専用のメソッドである",
            "GETは送信できるデータ量に制限がないが、POSTは送信できるデータ量が非常に少ない"
        ],
        answer: 1,
        explanation: "正解は2番です。\n\nGETはURLの末尾に「?キー=値」の形でデータが付加されるため誰でも見えます。POSTは本文中に隠れるため安全性が高く、ログインや登録系に使用されます。",
        category: "Spring"
    },
    {
        id: currentId++,
        question: "【スコープ】\nユーザーがログインしてからログアウトする（またはブラウザを閉じる）までデータを保持し続けるスコープとして正しいものを選べ。",
        options: [
            "リクエストスコープ",
            "セッションスコープ",
            "アプリケーションスコープ",
            "ページスコープ"
        ],
        answer: 1,
        explanation: "正解は2番です。\n\nセッションスコープ（HttpSession）はブラウザを閉じるまでデータを保持するため、ログイン情報やカート情報などの保持に適しています。",
        category: "Spring"
    },
    {
        id: currentId++,
        question: "【JPQL】\nJPQLとSQLの違いについて、正しいものを選べ。",
        options: [
            "SQLはテーブル名や列名を使うが、JPQLはエンティティ名やフィールド名を使う",
            "SQLはJava専用の言語であり、JPQLはすべてのデータベースで共通の言語である",
            "SQLはデータの取得しかできないが、JPQLはデータの追加や削除もできる",
            "SQLは「SELECT * FROM」と書けるが、JPQLでも「SELECT * FROM」が推奨されている"
        ],
        answer: 0,
        explanation: "正解は1番です。\n\nJPQL（Java Persistence Query Language）は、DBのテーブル名ではなく、Javaのエンティティクラス名とフィールド名を使ってクエリを記述するDB非依存の言語です。JPQLでは「*」は使えません。",
        category: "Spring"
    }
];

questionDatabase.push(...newQuestions);

dailySets.push({
    date: '5/22',
    title: 'Spring総合試験 対策クイズ',
    questions: newQuestions.map(q => q.id)
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
console.log('Successfully added ' + newQuestions.length + ' new Spring questions.');
