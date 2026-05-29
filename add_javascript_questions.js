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
        question: "【JavaScriptを記述する場所】\n問1. JavaScriptを記述する場所として正しいものを選べ。",
        options: [
            "<script> タグの内部、または外部の .js ファイルに記述する。",
            "<javascript> タグの内部、または外部の .java ファイルに記述する。",
            "<style> タグの内部、または外部の .css ファイルに記述する。",
            "<body> タグの属性としてのみ記述でき、外部ファイルには記述できない。"
        ],
        answer: 0,
        explanation: "HTMLドキュメント内でJavaScriptを記述する際は、<script>タグを使用します。また、外部ファイル（拡張子 .js）に記述したJavaScriptコードを <script src=\"path/to/file.js\"></script> のように読み込んで実行することも一般的です。\n\n他の選択肢について：\n・<javascript> タグや .java 拡張子は誤りです（Java用の拡張子です）。\n・<style> や .css はCSSスタイルシート用です。\n・<body> タグの属性だけでなく、外部ファイルや <script> タグの内部にも記述できます。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【変数宣言のconstとletの違い】\n問2. 以下のコードはどのような処理を行うか。正しいものを選べ。\n\nconst user = { name: \"Taro\" };\nuser.name = \"Hanako\";\nuser = { name: \"Jiro\" };",
        options: [
            "2行目でエラー（TypeError）が発生し、処理が停止する。",
            "3行目でエラー（TypeError）が発生し、処理が停止する。",
            "エラーは発生せず、userのオブジェクト全体が正常に更新される。",
            "エラーは発生せず、2行目のプロパティ変更処理のみが無効化される。"
        ],
        answer: 1,
        explanation: "constで宣言された変数は、再代入が禁止されます。3行目の「user = { name: \"Jiro\" }」は user 変数自体への再代入を試みているため、TypeError が発生し処理が停止します。\n\n2行目の「user.name = \"Hanako\"」はオブジェクト内部のプロパティの変更であり、変数自体への再代入ではないためエラーになりません。constで宣言されたオブジェクトであっても、そのプロパティを変更したり追加したりすることは可能です。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【関数の書き方として正しいもの】\n問3. 関数の書き方として正しいものを選べ。",
        options: [
            "function greet(name) { return \"Hello \" + name; }",
            "def greet(name) { return \"Hello \" + name; }",
            "func greet(name) { return \"Hello \" + name; }",
            "function: greet(name) { return \"Hello \" + name; }"
        ],
        answer: 0,
        explanation: "JavaScriptにおける基本的な関数定義（関数宣言）は、「function 関数名(引数) { 処理 }」の構文を使用します。\n\n他の選択肢について：\n・def は Python や Ruby などで使われるキーワードです。\n・func は Swift や Go などで使われるキーワードです。\n・function: というコロン付きのキーワードはJavaScriptには存在しません。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【アロー関数の書き方として誤っているもの】\n問4. アロー関数の書き方として誤っているものを選べ。",
        options: [
            "const add = (a, b) => { return a + b; };",
            "const add = a, b => a + b;",
            "const add = (a, b) => a + b;",
            "const add = () => { return 10; };"
        ],
        answer: 1,
        explanation: "アロー関数において引数が2つ以上ある場合、引数を囲むカッコ「(a, b)」を省略することはできません（引数が1つのときのみカッコを省略できます）。よって「const add = a, b => a + b;」は構文エラーとなります。\n\n他の選択肢はすべて正しいアロー関数の構文です。3番のように波カッコ { } と return を同時に省略して、式を簡潔に書く（暗慢のreturn）ことも可能です。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【JavaScriptのデータ型の説明】\n問5. JavaScriptのデータ型の説明として正しいものを選べ。",
        options: [
            "変数は宣言時にデータ型が固定され、異なる型の値は代入できない。",
            "値が異なる変数に異なるデータ型の値を代入することができる。",
            "変数には数値と文字列のみが代入可能で、オブジェクトは代入できない。",
            "変数のデータ型は自動変換されないため、常に明示的なキャストが必要である。"
        ],
        answer: 1,
        explanation: "JavaScriptは「動的型付け言語」であり、変数そのものには特定の型が固定されません。そのため、同じ変数であっても、最初は数値を代入し、後から文字列やオブジェクトなど異なるデータ型の値を代入し直すことが可能です（これが「値が異なる変数に異なるデータ型の値を代入することができる」という意味に相当します）。\n\n1番は静的型付け言語（Javaなど）の説明です。\n3番はオブジェクトや配列なども変数に代入できるため誤りです。\n4番は暗黙的な型変換（自動型変換）が行われるため、常に明示的なキャストが必要というわけではなく、誤りです。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【オブジェクトの生成方法】\n問6. 以下のコードはどのような処理を行うか。正しいものを選べ。\n\nconst obj = {};",
        options: [
            "空の配列オブジェクトを生成して変数 obj に代入する。",
            "空のオブジェクトを生成して変数 obj に代入する。",
            "参照エラーが発生し、変数 obj は定義されない。",
            "特殊な関数オブジェクトを生成して変数 obj に代入する。"
        ],
        answer: 1,
        explanation: "JavaScriptにおいて、波カッコ「{}」はオブジェクトリテラルを表し、空のオブジェクト（プロパティを持たないオブジェクト）を生成して変数 obj に代入します。\n\n1番の「空の配列オブジェクト」を生成する場合は、角カッコ「[]」を使用します（例: const arr = [];）。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【JavaScriptの配列】\n問7. 以下のコードはどのような処理を行うか。正しいものを選べ。 ただし、変数 numbers には [1, 2, 3] が代入されているとする。\n\nconst result = numbers.map(num => num * 2);",
        options: [
            "元の numbers の各要素を2倍に変更し、result には元の配列を代入する。",
            "numbers の各要素を2倍にした新しい配列を作成し、result に代入する。",
            "numbers の要素数を2倍に増やした新しい配列を作成し、result に代入する。",
            "元の numbers の各要素を2倍に変更し、result には undefined を代入する。"
        ],
        answer: 1,
        explanation: "Array.prototype.map() メソッドは、元の配列の各要素に対してコールバック関数を実行し、その実行結果を格納した「新しい配列」を作成して返します。元の配列である numbers は変更されません（イミュータブルな操作）。\n\nしたがって、result には [2, 4, 6] が代入され、numbers は [1, 2, 3] のまま維持されます。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【オブジェクトの定義の方法】\n問8. 2つのプロパティをもっているコンストラクタ関数の書き方として正しいものを選べ。",
        options: [
            "function User(name, age) { this.name = name; this.age = age; }",
            "function User(name, age) { let name = name; let age = age; }",
            "class User(name, age) { this.name = name; this.age = age; }",
            "function User(name, age) { User.name = name; User.age = age; }"
        ],
        answer: 0,
        explanation: "コンストラクタ関数を用いてオブジェクトを生成する際は、関数内部で「this.プロパティ名 = 値」の形式で新しく作成されるインスタンスのプロパティを設定します。\n\n他の選択肢について：\n・2番はローカル変数を宣言しているだけで、生成されるオブジェクトのプロパティにはなりません。\n・3番はクラス宣言の構文として正しくありません（class User { constructor(name, age) { ... } } のように書く必要があります）。\n・4番は User というコンストラクタ関数自体のプロパティ（静的プロパティ）を設定しようとしているため、生成されるインスタンスのプロパティにはなりません。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【DOMの説明文に当てはまる単語の組み合わせ】\n問9. 次の説明文の（ A ）と（ B ）に当てはまる単語の組み合わせとして正しいものを選べ。\n「（ A ）とは、HTMLやXMLなどの文書を（ B ）として表現し、プログラムから操作できるようにするための仕組みである。」",
        options: [
            "A: DOM / B: オブジェクト",
            "A: DOM / B: テキストファイル",
            "A: JSON / B: オブジェクト",
            "A: JSON / B: テキストファイル"
        ],
        answer: 0,
        explanation: "DOM（Document Object Model）とは、HTMLやXMLドキュメントをツリー構造の「オブジェクト」として表現し、JavaScriptなどのプログラミング言語から要素の取得・変更・削除などの操作を行えるようにするための標準的なAPIです。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【マークアップ言語】\n問10. マークアップ言語において、タグで指定したものをオブジェクトとして扱う仕組みとして正しいものを選べ。",
        options: [
            "CSS（Cascading Style Sheets）",
            "DOM（Document Object Model）",
            "BOM（Browser Object Model）",
            "API（Application Programming Interface）"
        ],
        answer: 1,
        explanation: "HTMLなどのマークアップ言語で記述されたタグ（要素）を、プログラムからオブジェクト（Elementオブジェクト等）として読み込んだり操作したりする仕組みを DOM（Document Object Model）と呼びます。\n\n他の選択肢について：\n・CSS は文書の見た目を装飾するためのスタイルシートです。\n・BOM はウィンドウオブジェクト（window）や画面サイズ（screen）など、ブラウザそのものを提供するオブジェクトモデルです。\n・API はソフトウェア同士が情報をやり取りする窓口の総称であり、具体的な仕組み名ではありません。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【JavaScriptでとなりあう要素を指定するプロパティ】\n問11. あるHTML要素の、次の（隣り合う）兄弟要素（ノード）を指定するプロパティとして正しいものを選べ。",
        options: [
            "nextSibling",
            "previousSibling",
            "childNode",
            "parentNode"
        ],
        answer: 0,
        explanation: "あるノードの直後にある兄弟ノードを参照するには「nextSibling」プロパティを使用します。また、Element（要素ノード）に限定して次の兄弟要素を取得したい場合は「nextElementSibling」を使用します。\n\n他の選択肢について：\n・previousSibling は直前にある兄弟ノードを参照します。\n・childNodes (複数形) は子ノードのリストを参照します。\n・parentNode は親ノードを参照します。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【id属性を指定して要素を取得するメソッド】\n問12. id属性を指定して要素を取得するメソッドとして正しいものを選べ。",
        options: [
            "document.getElementById(\"id属性に指定した値\")",
            "document.getElementsByTagName(\"id属性に指定した値\")",
            "document.querySelectorID(\"id属性に指定した値\")",
            "document.findNodeById(\"id属性に指定した値\")"
        ],
        answer: 0,
        explanation: "HTML要素のid属性を指定して、特定の要素を直接取得するには「document.getElementById()」を使用します。\n\n他の選択肢について：\n・document.getElementsByTagName() はタグ名（divやpなど）を指定して要素をすべて取得するメソッドです。\n・document.querySelectorID() や document.findNodeById() というメソッドはJavaScriptには存在しません。なお、id指定で取得する別の方法として、CSSセレクターを用いて「document.querySelector(\"#id名\")」と書くことは一般的です。",
        category: "JavaScript"
    },
    {
        id: currentId++,
        question: "【対象の要素をクリックしたときのイベントハンドラ】\n問13. 対象の要素をクリックしたときのイベントハンドラとして正しいものを選べ。",
        options: [
            "onclick プロパティ、または addEventListener(\"click\", ...) メソッドを使用する。",
            "onhover プロパティ、または addEventListener(\"hover\", ...) メソッドを使用する。",
            "onclick プロパティ、または addEventListener(\"onclick\", ...) メソッドを使用する。",
            "onpress プロパティ、または addEventListener(\"press\", ...) メソッドを使用する。"
        ],
        answer: 0,
        explanation: "要素をクリックした時の処理を登録するには、要素の「onclick」プロパティに関数を代入するか、または「addEventListener(\"click\", コールバック関数)」を使用します。注意点として、addEventListenerを使用する際のイベント名は「onclick」ではなく「click」（onは付けない）になります。したがって、3番は誤りです。\n\n2番、4番の hover や press は正しいクリックイベント用のものではありません（ホバーはmouseenter/mouseleave等、マウスボタン押し下げはmousedown等を使用します）。",
        category: "JavaScript"
    }
];

questionDatabase.push(...newQuestions);

const newQIds = newQuestions.map(q => q.id);
dailySets.push({
    date: '5/29',
    title: 'JavaScript確認問題 (5/29)',
    questions: newQIds
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
console.log('Successfully added ' + newQuestions.length + ' JavaScript questions to questions.js.');
