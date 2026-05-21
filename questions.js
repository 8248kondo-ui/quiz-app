/**
 * 問題データベース
 */
const questionDatabase = [
    {
        "id": 1,
        "question": "【RDBとは】\nリレーショナルデータベース（RDB）の基本的な特徴として正しいものを選べ。",
        "options": [
            "データを木構造で階層的に管理し、親から子への経路でデータを検索するデータベースである。",
            "データを「テーブル（表）」の形式で管理し、複数のテーブルを関連付けて扱うデータベースである。",
            "データを「キー」と「値」の単純なペアとして管理し、高速な検索のみに特化したデータベースである。",
            "データを「オブジェクト」として管理し、プログラムの変数と直接対応させて保存するデータベースである。"
        ],
        "answer": 1,
        "explanation": "RDB（リレーショナルデータベース）は、データを「テーブル（表）」の形式で管理し、複数のテーブルを関連付けて扱うのが最大の特徴です。木構造は階層型、キーと値はKVS型のデータベースです。",
        "category": "Oracle"
    },
    {
        "id": 2,
        "question": "【データベースオブジェクトとスキーマの関係】\nデータベースにおけるスキーマとオブジェクトの関係について、正しいものを選べ。",
        "options": [
            "スキーマはテーブルやビューなどの具体的な部品を指し、オブジェクトはそれらをまとめる枠組みを指す。",
            "スキーマはデータベース内のデータをまとめる枠組みであり、テーブルなどの具体的な部品はその中に含まれるオブジェクトである。",
            "スキーマはSQLの実行結果を一時的に保存する領域であり、オブジェクトはデータを永続的に保存する領域である。",
            "スキーマとオブジェクトは全く同じものを指す用語であり、データベースの製品によって呼び方が異なるだけである。"
        ],
        "answer": 1,
        "explanation": "スキーマはユーザーが所有するテーブルなどの「枠組み（入れ物）」を指し、テーブルやビューなどの個別の要素がオブジェクトと呼ばれます。",
        "category": "Oracle"
    },
    {
        "id": 3,
        "question": "【DMLとは】\nDML（データ操作言語）に分類されるSQL命令として正しいものを選べ。",
        "options": [
            "CREATE、ALTER、DROPなど、テーブルなどの構造を定義・変更するための命令群である。",
            "GRANT、REVOKEなど、ユーザーに対するデータベースの操作権限を制御するための命令群である。",
            "COMMIT、ROLLBACKなど、データベースに対する変更処理を確定・取り消しするための命令群である。",
            "SELECT、INSERT、UPDATE、DELETEなど、テーブル内のデータそのものを検索・変更するための命令群である。"
        ],
        "answer": 3,
        "explanation": "DML（Data Manipulation Language）は、データの検索や変更（SELECT, INSERT, UPDATE, DELETE）を行う命令です。CREATEなどはDDL、GRANTなどはDCLに分類されます。",
        "category": "Oracle"
    },
    {
        "id": 4,
        "question": "【権限】\nデータベースにおける権限の仕組みについて、誤っているものを選べ。",
        "options": [
            "ユーザーごとに「データの閲覧のみ許可する」「データの削除も許可する」といった個別のルールを設定できる。",
            "権限を適切に管理・制限することで、意図しないデータの破壊や情報漏洩などのセキュリティリスクを低減できる。",
            "一度特定のユーザーに付与した操作権限は、後から別のSQL命令を使用することで取り消すことが可能である。",
            "新規に作成されたデータベースユーザーには、最初から自動的にすべてのテーブルに対する完全な操作権限が付与される。"
        ],
        "answer": 3,
        "explanation": "新規作成されたユーザーにはデフォルトで何の権限も付与されていません。必要な操作を行うには、管理者から明示的にGRANT文で権限を付与してもらう必要があります。",
        "category": "Oracle"
    },
    {
        "id": 5,
        "question": "【GRANT文】\n以下のSQL文が実行する処理の内容として正しいものを選べ。 ただし、EMPLOYEESは既存のテーブル、USER_Aは既存のユーザーとする。\nGRANT SELECT ON EMPLOYEES TO USER_A;",
        "options": [
            "EMPLOYEESテーブルから、USER_Aという条件に一致するデータを検索して取得する。",
            "USER_Aに対して、EMPLOYEESテーブルに格納されているデータの閲覧権限を付与する。",
            "USER_Aに対して、EMPLOYEESテーブルへのデータの追加・更新・削除権限を付与する。",
            "EMPLOYEESテーブルの所有者をUSER_Aに変更し、テーブルに対するすべての権限を移譲する。"
        ],
        "answer": 1,
        "explanation": "GRANT文は権限を付与する命令です。「GRANT 権限 ON オブジェクト TO ユーザー」の構文になり、この場合は「EMPLOYEESテーブルをSELECT（閲覧）する権限」をUSER_Aに与えています。",
        "category": "Oracle"
    },
    {
        "id": 6,
        "question": "【主キー制約】\nテーブルに設定する主キー制約（Primary Key Constraint）の性質として正しいものを選べ。",
        "options": [
            "テーブル内の各行を識別するための制約であり、重複する値は許可されないが、NULL（空）は1行だけ許可される。",
            "テーブル内の各行を識別するための制約であり、重複する値が入力されることも、NULL（空）のままとすることも一切許可されない。",
            "テーブル内の各行を識別するための制約であり、他のテーブルの特定の列に同じ値が存在しているかどうかをチェックする。",
            "テーブル内の各行を識別するための制約であり、数値型の列にしか設定することができず、文字型の列には設定できない。"
        ],
        "answer": 1,
        "explanation": "主キー（Primary Key）は行を一意に特定するための制約です。そのため、値の重複は一切許されず、またNULL（空）のままデータを登録することもできません。",
        "category": "Oracle"
    },
    {
        "id": 7,
        "question": "【外部参照先制約（外部キー制約）】\n外部参照先制約（外部キー制約）の役割として正しいものを選べ。",
        "options": [
            "テーブル内の特定の列に対して、値が重複しないこと（一意性）とNULLでないことを同時に保証し、行を特定しやすくする。",
            "関連する2つのテーブル間でデータの整合性を保つため、参照先のテーブルに存在しない値が入力されるのを禁止する。",
            "テーブルに新しいデータを追加する際に、特定の列に対して自動的に連番の数値を割り当てて入力の手間を省く。",
            "特定の条件を満たす行のみをテーブルに入力できるように、その列に格納できる値の範囲や文字の種類をあらかじめ制限する。"
        ],
        "answer": 1,
        "explanation": "外部キー制約（Foreign Key）は、別のテーブルに存在する値しか入力できないように制限する制約です。これにより、存在しない部署IDなどが登録されるのを防ぎ、データの一貫性を保ちます。",
        "category": "Oracle"
    },
    {
        "id": 8,
        "question": "【INSERT文】\nテーブルに新しいデータを追加するためのSQL文として正しいものを選べ。 ただし、EMPLOYEESテーブルはEMP_ID, NAME, SALARYの列を持つとする。",
        "options": [
            "ADD INTO EMPLOYEES VALUES (1, '田中', 300000);",
            "INSERT INTO EMPLOYEES VALUES (1, '田中', 300000);",
            "UPDATE EMPLOYEES SET VALUES (1, '田中', 300000);",
            "INSERT INTO EMPLOYEES (EMP_ID, NAME, SALARY) SET (1, '田中', 300000);"
        ],
        "answer": 1,
        "explanation": "テーブルに新しい行を追加するには「INSERT INTO テーブル名 VALUES (値...)」を使用します。列を指定する場合は「INSERT INTO テーブル名 (列1...) VALUES (値1...)」の形式になります。",
        "category": "Oracle"
    },
    {
        "id": 9,
        "question": "【SELECT文】\nテーブルからすべての列のデータを検索して取得するためのSQL文として正しいものを選べ。 ただし、EMPLOYEESテーブルが対象であるとする。",
        "options": [
            "SELECT ALL FROM EMPLOYEES;",
            "SELECT EMPLOYEES FROM *;",
            "SELECT * FROM EMPLOYEES;",
            "SEARCH * FROM EMPLOYEES;"
        ],
        "answer": 2,
        "explanation": "すべての列を取得する場合は「*（アスタリスク）」を使用します。「SELECT * FROM テーブル名」と記述することで、全データを確認できます。",
        "category": "Oracle"
    },
    {
        "id": 10,
        "question": "【UPDATE文】\n以下のSQL文の実行結果として正しいものを選べ。 ただし、EMPLOYEESテーブルはEMP_ID, NAME, SALARYの列を持つとする。 ---SQL--- UPDATE EMPLOYEES SET SALARY = 350000;",
        "options": [
            "EMPLOYEESテーブルから、すでにSALARYが350000である行のみが更新される。",
            "EMPLOYEESテーブルに存在するすべての行のSALARY列が350000に更新される。",
            "EMPLOYEESテーブルに新しい行が1件追加され、SALARYに350000がセットされる。",
            "WHERE句が指定されていないため、実行時にエラーとなり何も処理されない。"
        ],
        "answer": 1,
        "explanation": "UPDATE文はデータの更新を行いますが、WHERE句で条件を指定しない場合、テーブルに存在する「すべての行」が更新対象になってしまうため注意が必要です。",
        "category": "Oracle"
    },
    {
        "id": 11,
        "question": "【DELETE文】\nテーブルから特定の条件に合致する不要なデータを削除するためのSQL文として、正しいものを選べ。 ただし、EMPLOYEESテーブルから、EMP_IDが10の行を削除するとする。",
        "options": [
            "DELETE FROM EMPLOYEES WHERE EMP_ID = 10;",
            "DROP FROM EMPLOYEES WHERE EMP_ID = 10;",
            "REMOVE FROM EMPLOYEES WHERE EMP_ID = 10;",
            "DELETE * FROM EMPLOYEES WHERE EMP_ID = 10;"
        ],
        "answer": 0,
        "explanation": "データを削除するには「DELETE FROM テーブル名」を使用します。WHERE句で条件（EMP_ID = 10）を指定することで、特定の行のみを安全に削除できます。",
        "category": "Oracle"
    },
    {
        "id": 12,
        "question": "【コミット (COMMIT)】\nトランザクション処理における「COMMIT」の役割として正しいものを選べ。",
        "options": [
            "これまでに行ったすべての変更処理（追加・更新・削除）を取り消し、処理前の状態に戻す。",
            "これまでに行ったすべての変更処理（追加・更新・削除）を確定させ、データベースに永続的に保存する。",
            "実行中のトランザクションを一時停止し、他のユーザーが同じデータを操作できるようにする。",
            "テーブルの構造（列の追加や削除などのDDL）を変更した際に、その変更内容を確定させるための専用の命令である。"
        ],
        "answer": 1,
        "explanation": "COMMIT（コミット）は、INSERTやUPDATEなどで行った変更を「確定」させ、データベースに永続的に反映させるための重要なトランザクション制御命令です。",
        "category": "Oracle"
    },
    {
        "id": 13,
        "question": "【ロールバック (ROLLBACK)】\nトランザクション処理における「ROLLBACK」の役割として正しいものを選べ。",
        "options": [
            "直前の処理で発生したエラーの内容をログファイルに書き出して保存する。",
            "他のユーザーがデータを更新できないように、テーブル全体に一時的なロックをかける。",
            "データベースの構成やパラメータを、システム導入時の初期状態に戻す。",
            "これまでに行った変更を取り消し、最後にコミット（またはトランザクション開始）した直後の状態まで戻す。"
        ],
        "answer": 3,
        "explanation": "ROLLBACK（ロールバック）は、変更を確定させる前（コミット前）の処理を取り消し、トランザクション開始時の状態までデータを元に戻すための命令です。",
        "category": "Oracle"
    },
    {
        "id": 14,
        "question": "【Oracleのロック処理】\nデータベースにおける「ロック処理」の目的として正しいものを選べ。",
        "options": [
            "特定のユーザーがデータベースにログインできないように、アカウントを一時的に停止するため。",
            "データベースのデータファイルがOS上の他のプログラムによって誤って削除されないように保護するため。",
            "あるユーザーがデータを更新している最中に、他のユーザーが同時に同じデータを書き換えて不整合が起きるのを防ぐため。",
            "トランザクションの実行速度を上げるために、変更対象のデータをメモリ上に固定して高速に処理するため。"
        ],
        "answer": 2,
        "explanation": "ロック処理は、複数のユーザーが同時に同じデータを更新しようとした際に発生する不整合（データの破壊）を防ぐために、他のユーザーの変更を一時的に待たせる仕組みです。",
        "category": "Oracle"
    },
    {
        "id": 15,
        "question": "【算術演算子】\n以下のSQL文の実行結果として正しいものを選べ。 ただし、PRODUCTSテーブルはPRICE列（現在の値はすべての行で1000）を持つとする。 ---SQL--- SELECT PRICE * 2 + 500 FROM PRODUCTS;",
        "options": [
            "各行について、元の価格1000に2を掛けた後、500を足した値「2500」が結果として返される。",
            "各行について、元の価格1000に、2と500を足した値502を掛けた「502000」が結果として返される。",
            "PRODUCTSテーブルのPRICE列の実際のデータが、計算結果である「2500」にすべて更新される。",
            "数値の計算処理はSQLのSELECT句では実行できないため、構文エラーが発生する。"
        ],
        "answer": 0,
        "explanation": "SELECT句の中で算術演算子（+, -, *, /）を使うことができます。これは取得したデータに対して計算を行い、その結果を表示するものであり、テーブルの元のデータが書き換わるわけではありません。",
        "category": "Oracle"
    },
    {
        "id": 16,
        "question": "【比較演算子】\n比較演算子を使用して、「SALARYが300000と等しくない」という条件を表したWHERE句として正しいものを選べ。",
        "options": [
            "WHERE SALARY NOT 300000",
            "WHERE SALARY <> 300000",
            "WHERE SALARY >< 300000",
            "WHERE SALARY =! 300000"
        ],
        "answer": 1,
        "explanation": "「等しくない」を表す比較演算子は「<>」または「!=」を使用します。「><」や「=!」といった演算子は存在しません。",
        "category": "Oracle"
    },
    {
        "id": 17,
        "question": "【NULLの比較 (IS NULL)】\nDEPT_ID列に値が入っていない（NULLである）行を検索するための正しいWHERE句を選べ。",
        "options": [
            "WHERE DEPT_ID = NULL",
            "WHERE DEPT_ID IS NULL",
            "WHERE DEPT_ID == NULL",
            "WHERE DEPT_ID HAS NULL"
        ],
        "answer": 1,
        "explanation": "NULL（空）であるかどうかを判定する場合は「= NULL」ではなく「IS NULL」を使用する必要があります。逆にNULLでない場合は「IS NOT NULL」を使います。",
        "category": "Oracle"
    },
    {
        "id": 18,
        "question": "【LIKE】\n文字列の部分一致検索（LIKE句）において、「名前が『東』から始まる任意の長さの文字列」を検索する条件として正しいものを選べ。",
        "options": [
            "WHERE NAME LIKE '東_'",
            "WHERE NAME LIKE '東%'",
            "WHERE NAME LIKE '%東'",
            "WHERE NAME LIKE '%東%'"
        ],
        "answer": 1,
        "explanation": "LIKE句で「%」は任意の0文字以上の文字列、「_」は任意の1文字を表します。「東%」と記述することで、東から始まるすべての文字列に一致します。",
        "category": "Oracle"
    },
    {
        "id": 19,
        "question": "【GROUP BY句】\nGROUP BY句を使用する際のルールとして正しいものを選べ。",
        "options": [
            "GROUP BY句で指定した列以外の列であっても、SELECT句に自由に指定して結果を表示することができる。",
            "GROUP BY句を使用したSELECT文では、SELECT句に記述できるのはGROUP BYに指定した列か集計関数のみである。",
            "GROUP BY句は、テーブル内に存在するすべての行を全く同じ値に上書き更新するために使用される機能である。",
            "GROUP BY句でグループ化を行うと、結果の行は必ずGROUP BYに指定した列の値の降順（大きい順）に並び替えられる。"
        ],
        "answer": 1,
        "explanation": "GROUP BY句を使用する場合、SELECT句に指定できるのは「GROUP BYで指定した列」または「SUMやAVGなどの集約関数」のみという厳密なルールがあります。",
        "category": "Oracle"
    },
    {
        "id": 20,
        "question": "【集約関数の使い方・ルール】\n集約関数（SUM, AVG, COUNTなど）の仕様やルールについて、誤っているものを選べ。",
        "options": [
            "COUNT(*)を除く集約関数は、対象となる列にNULL値が含まれている場合、そのNULL値を計算から除外して（無視して）処理を行う。",
            "集約関数を使って算出した計算結果（例：合計値が100以上）を条件にして行を絞り込みたい場合は、WHERE句を使用する。",
            "集計を行ったあとのグループ化された結果に対して条件を指定し、結果に表示するグループを絞り込む場合は、HAVING句を使用する。",
            "SQLの内部処理順序において、「WHERE句による行の事前の絞り込み」は「集約関数による計算」よりも先に行われる。"
        ],
        "answer": 1,
        "explanation": "集約関数で計算した結果に対して条件を絞り込む場合は、WHERE句ではなく「HAVING句」を使用しなければなりません。WHERE句は集計前の行の絞り込みに使われます。",
        "category": "Oracle"
    },
    {
        "id": 21,
        "question": "【ORDER BY句】\n取得したデータを並べ替えるORDER BY句の機能について正しいものを選べ。",
        "options": [
            "ORDER BY句で並べ替えの順序（ASCまたはDESC）の指定を省略した場合、デフォルトでは降順（DESC：大きい順）になる。",
            "ORDER BY句に複数の列を指定した場合、まず左側に書いた列で並べ替えられ、その値が同じ行同士で右側の列による並べ替えが行われる。",
            "ORDER BY句で並べ替えの対象にできるのは数値型のデータのみであり、文字列型や日付型のデータは並べ替えることができない。",
            "ORDER BY句を実行すると、検索結果の表示順序が変わるだけでなく、データベースのテーブル本体のデータの並び順も永続的に変更される。"
        ],
        "answer": 1,
        "explanation": "ORDER BY句に複数の列を指定すると、最初に指定した列（左側）でまず並べ替えられ、その中で同じ値を持つ行に対して、次に指定した列（右側）で並べ替えが行われます。",
        "category": "Oracle"
    },
    {
        "id": 22,
        "question": "【ORDER BY句の記述位置】\nSELECT文におけるORDER BY句の記述位置に関するルールとして正しいものを選べ。",
        "options": [
            "データの絞り込み処理を効率よく行うため、ORDER BY句は必ずWHERE句の直前に記述しなければならない。",
            "データのグループ化より先に並べ替えを行うため、ORDER BY句は必ずGROUP BY句より前に記述しなければならない。",
            "SELECT文の中であればORDER BY句はどこに記述してもエラーにはならず、書き手の任意の場所に配置することができる。",
            "最終的な検索結果のデータに対して最後に並び替えを行うため、ORDER BY句はSELECT文の末尾（最後）に記述しなければならない。"
        ],
        "answer": 3,
        "explanation": "ORDER BY句は取得した結果を最後に並べ替えるためのものであるため、SQL文（SELECT文）の必ず一番最後（末尾）に記述しなければなりません。",
        "category": "Oracle"
    },
    {
        "id": 23,
        "question": "【内部結合と外部結合の違い】\nテーブルの結合（JOIN）における内部結合（INNER JOIN）と外部結合（OUTER JOIN）の違いについて正しいものを選べ。",
        "options": [
            "内部結合は両方のテーブルに共通するデータがある行のみを抽出し、一致しない行は結果から削除される。",
            "外部結合は両方のテーブルに共通するデータがある行のみを抽出し、一致しない行は結果から削除される。",
            "内部結合は一方のテーブルの全行を必ず残し、もう一方のテーブルに一致するデータがない部分はNULLとして表示する。",
            "内部結合と外部結合の違いは取得結果の並び順が異なるだけであり、取得される行の件数や内容に違いは発生しない。"
        ],
        "answer": 0,
        "explanation": "内部結合（INNER JOIN）は、指定した結合条件に両方のテーブルで一致する行のみを取得します。片方にしか存在しないデータは結果から除外されます。",
        "category": "Oracle"
    },
    {
        "id": 24,
        "question": "【結合の説明】\n複数テーブルの結合（JOIN）に関する説明として、誤っているものを選べ。",
        "options": [
            "外部結合（LEFT OUTER JOIN）を使用すると、左側に指定したテーブルのデータは条件に一致しなくてもすべて結果に表示される。",
            "内部結合（INNER JOIN）を使用した場合、結合条件に一致しない行は結果から除外されるのではなくNULLとして表示される。",
            "ON句で指定する結合条件は、通常は主キーや外部キーを使用するが、データの内容的に関連のある列であれば他の列同士でも結合可能である。",
            "結合処理を活用することで、複数に分割されている関連データを一つのテーブルのようにまとめて取得できる。"
        ],
        "answer": 1,
        "explanation": "内部結合では条件に一致しない行は除外されます。NULLとして表示して残すのは「外部結合（OUTER JOIN）」の役割です。",
        "category": "Oracle"
    },
    {
        "id": 25,
        "question": "【CREATE USER文】\n新しいユーザーを作成するためのSQL文の構文として正しいものを選べ。",
        "options": [
            "CREATE USER ユーザー名 WITH PASSWORD 'パスワード';",
            "CREATE USER ユーザー名 IDENTIFIED BY 'パスワード';",
            "ADD USER ユーザー名 SET PASSWORD 'パスワード';",
            "INSERT INTO USERS (NAME, PASS) VALUES ('ユーザー名', 'パスワード');"
        ],
        "answer": 1,
        "explanation": "新しいユーザーを作成する際は「CREATE USER ユーザー名 IDENTIFIED BY 'パスワード'」の構文を使用します。",
        "category": "Oracle"
    },
    {
        "id": 26,
        "question": "【GRANT文】\nユーザー（USER_A）に対して、データベースへの接続権限（CREATE SESSION）を付与するSQL文として正しいものを選べ。",
        "options": [
            "GRANT CREATE SESSION ON USER_A;",
            "GIVE CREATE SESSION TO USER_A;",
            "GRANT CREATE SESSION TO USER_A;",
            "ALLOW CREATE SESSION FOR USER_A;"
        ],
        "answer": 2,
        "explanation": "権限を付与するGRANT文では「TO ユーザー名」を使用します。データベースにログイン（接続）するためには「CREATE SESSION」権限が必要です。",
        "category": "Oracle"
    },
    {
        "id": 27,
        "question": "【DROP USER CASCADE】\nユーザー（USER_A）を削除する際、そのユーザーが作成したテーブルなどのオブジェクトが残っていても、中身ごと強制的に削除するためのSQL文として正しいものを選べ。",
        "options": [
            "DROP USER USER_A ALL;",
            "DROP USER USER_A FORCE;",
            "DROP USER USER_A INCLUDING OBJECTS;",
            "DROP USER USER_A CASCADE;"
        ],
        "answer": 3,
        "explanation": "ユーザーがテーブルなどのオブジェクトを所有している場合、通常は削除できませんが「CASCADE」オプションを付けることで、所有オブジェクトごと強制的に削除できます。",
        "category": "Oracle"
    },
    {
        "id": 28,
        "question": "【NOT NULL制約】\nテーブルの列に対して、空の値（NULL）が入力されることを禁止し、値を必須とするための制約として正しいものを選べ。",
        "options": [
            "REQUIRED制約",
            "UNIQUE制約",
            "NOT NULL制約",
            "CHECK NULL制約"
        ],
        "answer": 2,
        "explanation": "NULL（空の値）の入力を禁止し、必ず何らかの値を入力させるようにするには「NOT NULL制約」を使用します。",
        "category": "Oracle"
    },
    {
        "id": 29,
        "question": "【ALTER TABLE】\n既存のEMPLOYEESテーブルから「AGE」という列を削除するためのSQL文として正しいものを選べ。",
        "options": [
            "ALTER TABLE EMPLOYEES DELETE COLUMN AGE;",
            "ALTER TABLE EMPLOYEES DROP COLUMN AGE;",
            "ALTER TABLE EMPLOYEES REMOVE AGE;",
            "DROP COLUMN AGE FROM EMPLOYEES;"
        ],
        "answer": 1,
        "explanation": "既存のテーブル構造を変更するにはALTER TABLE文を使います。列を削除する場合は「DROP COLUMN 列名」と記述します。",
        "category": "Oracle"
    },
    {
        "id": 30,
        "question": "【外部参照 表制約】\nテーブル作成時に外部キー制約を設定し、他のテーブルの主キーを参照するための正しい記述を選べ。",
        "options": [
            "REFERENCES 参照先テーブル名 (参照先列名)",
            "FOREIGN KEY (列名) REFERENCES 参照先テーブル名 (参照先列名)",
            "EXTERNAL KEY (列名) ON 参照先テーブル名 (参照先列名)",
            "RELATION (列名) TO 参照先テーブル名 (参照先列名)"
        ],
        "answer": 1,
        "explanation": "外部キー制約を設定する場合は「FOREIGN KEY (自テーブルの列名) REFERENCES 参照先テーブル名 (参照先列名)」の形式で記述します。",
        "category": "Oracle"
    },
    {
        "id": 31,
        "question": "【WHERE句を含むSELECT文】\n以下のSQL文はどのような結果を返すか。正しいものを選べ。 ただし、EMPLOYEESテーブルはEMP_ID, NAME, SALARYの列を持つとする。 ---SQL--- SELECT NAME FROM EMPLOYEES WHERE SALARY >= 300000;",
        "options": [
            "SALARYが300000以上であるすべての行のすべての列（EMP_ID, NAME, SALARY）が返される。",
            "SALARYが300000より大きい（300000を含まない）行のNAME列のみが返される。",
            "SALARYが300000以上である行のNAME列のみが返される。",
            "NAMEが'300000'以上である行のSALARY列のみが返される。"
        ],
        "answer": 2,
        "explanation": "WHERE句で「>=」を使用すると「以上（その値を含む）」となります。そのため、SALARYが300000以上の行が絞り込まれ、SELECT句で指定したNAME列のみが取得されます。",
        "category": "Oracle"
    },
    {
        "id": 32,
        "question": "【DISTINCTキーワード】\nテーブルからデータを取得する際、指定した列の重複する値を1つにまとめて表示するためのSQL文として正しいものを選べ。",
        "options": [
            "SELECT UNIQUE DEPT_ID FROM EMPLOYEES;",
            "SELECT DISTINCT DEPT_ID FROM EMPLOYEES;",
            "SELECT SINGLE DEPT_ID FROM EMPLOYEES;",
            "SELECT DEPT_ID FROM EMPLOYEES GROUP BY UNIQUE;"
        ],
        "answer": 1,
        "explanation": "重複する値を取り除いて1つにまとめて表示するには「DISTINCT」キーワードをSELECT句の直後に記述します。",
        "category": "Oracle"
    },
    {
        "id": 33,
        "question": "【ASキーワード】\nSELECT文で取得する列に「従業員名」という別名（エイリアス）を付けるためのSQL文として正しいものを選べ。",
        "options": [
            "SELECT NAME TO 従業員名 FROM EMPLOYEES;",
            "SELECT NAME LIKE '従業員名' FROM EMPLOYEES;",
            "SELECT NAME AS 従業員名 FROM EMPLOYEES;",
            "SELECT NAME = 従業員名 FROM EMPLOYEES;"
        ],
        "answer": 2,
        "explanation": "取得する列に別名を付ける場合は「AS」キーワードを使用します。「SELECT 列名 AS 別名」のように記述することで、出力結果の列名が変わります。",
        "category": "Oracle"
    },
    {
        "id": 34,
        "question": "【INSERT文の書き方】\n以下のINSERT文を実行した結果として正しいものを選べ。 ただし、EMPLOYEESテーブルはEMP_ID, NAME, DEPT_IDの3つの列を持つとする。 ---SQL--- INSERT INTO EMPLOYEES (EMP_ID, NAME, DEPT_ID) VALUES (1, '田中');",
        "options": [
            "EMP_IDに1、NAMEに'田中'が入り、指定されていないDEPT_IDには自動的に「0」が入って追加される。",
            "挿入先として指定した列の数（3つ）と、VALUESで指定した値の数（2つ）が一致していないため、構文エラーとなる。",
            "EMP_IDに1が入り、残りの列はすべて'田中'という値がコピーされて追加される。",
            "構文エラーにはならないが、データの不足により何もテーブルには追加されない。"
        ],
        "answer": 1,
        "explanation": "INSERT文では、挿入先として指定した列の数と、VALUES内に指定した値の数が完全に一致していなければ構文エラーとなります。",
        "category": "Oracle"
    },
    {
        "id": 35,
        "question": "【UPDATE文】\nEMPLOYEESテーブルのうち、EMP_IDが10の従業員の給与（SALARY）を350000に変更するためのSQL文として正しいものを選べ。",
        "options": [
            "UPDATE EMPLOYEES WHERE EMP_ID = 10 SET SALARY = 350000;",
            "UPDATE EMPLOYEES SET SALARY = 350000 WHERE EMP_ID = 10;",
            "SET SALARY = 350000 FROM EMPLOYEES WHERE EMP_ID = 10;",
            "MODIFY EMPLOYEES SET SALARY = 350000 WHERE EMP_ID = 10;"
        ],
        "answer": 1,
        "explanation": "UPDATE文で条件を指定する場合は「UPDATE テーブル名 SET 列名 = 値 WHERE 条件」の順序で記述する必要があります。",
        "category": "Oracle"
    },
    {
        "id": 36,
        "question": "【WHERE句を含まないDELETE文】\n以下のSQL文を実行した結果として正しいものを選べ。 ---SQL--- DELETE FROM EMPLOYEES;",
        "options": [
            "削除対象の条件が指定されていないため実行エラーとなり、データは一切削除されない。",
            "テーブル内の最後の1行だけが削除される。",
            "EMPLOYEESというテーブルそのものがデータベースから完全に削除される（DROPと同じ効果）。",
            "WHERE句による条件指定がないため、EMPLOYEESテーブル内のすべての行のデータが削除される。"
        ],
        "answer": 3,
        "explanation": "DELETE文は行を削除する命令です。WHERE句で条件を指定しないと、対象が「すべての行」となり、テーブルの中身が空になってしまいます。",
        "category": "Oracle"
    },
    {
        "id": 37,
        "question": "【COMMIT文忘れ】\n新しいデータをINSERT文で追加した後、COMMITを行わなかった場合に発生する事象として正しいものを選べ。",
        "options": [
            "追加したデータはすでにデータベースに完全に保存されており、他のすべてのユーザーからもすぐに検索できる。",
            "自分が検索した場合は追加されたデータが見えるが、トランザクションが確定していないため他のユーザーからは見えない。",
            "コミット忘れを防ぐため、10分経過するとデータベース側で自動的にCOMMITが実行される。",
            "COMMITを行わない限り、自分自身のSELECT文を実行しても追加したデータを検索することはできない。"
        ],
        "answer": 1,
        "explanation": "COMMITを行う前は、変更した本人だけがその結果を確認できますが、他のユーザーからは変更前のデータしか見えません（これをトランザクションの分離性と呼びます）。",
        "category": "Oracle"
    },
    {
        "id": 38,
        "question": "【UPDATEとCOMMITのタイミング】\nユーザーAがデータをUPDATEした直後、まだCOMMITを行っていない時点で、ユーザーBが同じテーブルをSELECTした場合の実行結果として正しいものを選べ（分離性に関する一般的な動作とする）。",
        "options": [
            "ユーザーBは、ユーザーAがUPDATEする前の古いデータを取得する。",
            "ユーザーBは、ユーザーAがUPDATEした後の新しいデータを取得する。",
            "ユーザーAのCOMMITが終わるまで、ユーザーBのSELECT文はエラーとなり失敗する。",
            "ユーザーBには該当するデータがすべてNULL（空）となって表示される。"
        ],
        "answer": 0,
        "explanation": "トランザクションの分離性により、他のユーザー（ユーザーA）が変更中でまだCOMMITしていないデータは、ユーザーBからは更新前の古いデータとして見えます。",
        "category": "Oracle"
    },
    {
        "id": 39,
        "question": "【SAVEPOINT文】\nトランザクション処理におけるSAVEPOINT（セーブポイント）の役割として正しいものを選べ。",
        "options": [
            "データベースの完全なバックアップをファイルとして安全な場所に保存する機能である。",
            "トランザクションの途中に「しおり」を挟み、特定の地点までだけ変更を元に戻す（ROLLBACK TO）ことができる。",
            "現在実行中のすべてのSQL文を強制終了し、テーブルのロックを瞬時に解除する機能である。",
            "COMMITを行わなくても、システム障害時に自動で復旧できるようにデータをディスクに一時保存する機能である。"
        ],
        "answer": 1,
        "explanation": "SAVEPOINT（セーブポイント）を設定しておくと、ROLLBACK時にトランザクションの最初まで戻るのではなく、指定したセーブポイントの地点までだけ部分的に戻すことができます。",
        "category": "Oracle"
    },
    {
        "id": 40,
        "question": "【算術演算子】\n以下のSQL文の実行結果として正しいものを選べ。 ただし、PRODUCTSテーブルはPRICE列（数値型）を持つとする。 ---SQL--- SELECT PRICE + 500 FROM PRODUCTS;",
        "options": [
            "PRODUCTSテーブルのPRICE列の実際のデータに500が加算され、データベース自体が更新される。",
            "取得された各行のPRICE列の値に500を足した計算結果が、画面に表示される。",
            "PRICE列の後ろに「500」という文字列が連結されて表示される。",
            "SELECT句の中で足し算（+）などの算術演算子は使用できないため、構文エラーとなる。"
        ],
        "answer": 1,
        "explanation": "SELECT句での算術演算（+ 500など）は、取得結果の表示上で計算を行うだけであり、データベースに保存されている実際のデータが書き換わるわけではありません。",
        "category": "Oracle"
    },
    {
        "id": 41,
        "question": "【述語INの書き換え】\n以下のSQL文のWHERE句と全く同じ条件を表すものを選べ。 ---SQL--- WHERE DEPT_ID IN (10, 20)",
        "options": [
            "WHERE DEPT_ID = 10 AND DEPT_ID = 20",
            "WHERE DEPT_ID = 10 OR DEPT_ID = 20",
            "WHERE DEPT_ID >= 10 AND DEPT_ID <= 20",
            "WHERE DEPT_ID != 10 AND DEPT_ID != 20"
        ],
        "answer": 1,
        "explanation": "IN演算子「IN (A, B)」は、「Aと等しい、または（OR）Bと等しい」という複数のOR条件を簡潔に書くためのものです。",
        "category": "Oracle"
    },
    {
        "id": 42,
        "question": "【IS NOT NULLとLIKE】\n「名前（NAME）が空（NULL）ではなく、かつ名前に『藤』の文字が含まれる」行を検索するための条件として正しいものを選べ。",
        "options": [
            "WHERE NAME != NULL AND NAME LIKE '%藤%'",
            "WHERE NAME IS NOT NULL AND NAME LIKE '_藤_'",
            "WHERE NAME IS NOT NULL AND NAME LIKE '%藤%'",
            "WHERE NAME NOT NULL AND NAME = '%藤%'"
        ],
        "answer": 2,
        "explanation": "「空ではない」は「IS NOT NULL」、「『藤』が含まれる（部分一致）」は前後に%を付けた「LIKE '%藤%'」を使用し、これらを「AND」で繋ぎます。",
        "category": "Oracle"
    },
    {
        "id": 43,
        "question": "【集約関数COUNT】\n集約関数における COUNT(*) と COUNT(列名) の動作の違いとして正しいものを選べ。",
        "options": [
            "COUNT(*)はテーブルの全行数を数えるが、COUNT(列名)はその列の値がNULLである行だけを数える。",
            "COUNT(*)はNULLを含むすべての行を数えるが、COUNT(列名)はその列の値がNULLである行を除外して数える。",
            "COUNT(*)は文字型の列だけを数え、COUNT(列名)は数値型の列だけを数える。",
            "両者に動作の違いはなく、どちらもテーブルの全行数を数える。"
        ],
        "answer": 1,
        "explanation": "COUNT(*)はNULLを含むすべての行（レコード数そのもの）を数えますが、COUNT(列名)と指定した場合は、その列にNULLが入っている行は除外してカウントされます。",
        "category": "Oracle"
    },
    {
        "id": 44,
        "question": "【集約関数とGROUP BY句】\n以下のSQL文を実行した結果として正しいものを選べ。 ただし、EMPLOYEESテーブルはDEPT_IDとSALARYの列を持つとする。 ---SQL--- SELECT DEPT_ID, SUM(SALARY) FROM EMPLOYEES GROUP BY DEPT_ID;",
        "options": [
            "テーブル全体のSALARYの合計値が1行だけ計算され、すべてのDEPT_IDと共に表示される。",
            "部署（DEPT_ID）ごとにグループ化され、各部署のSALARYの合計値が計算されて複数行で表示される。",
            "SALARYの合計値が最も大きい部署（DEPT_ID）のみが抽出され、1行だけ表示される。",
            "GROUP BY句を使用する場合、SELECT句に集約関数を含めることはできないためエラーになる。"
        ],
        "answer": 1,
        "explanation": "GROUP BY句を使用すると、指定した列（DEPT_ID）の値ごとにグループ化され、それぞれのグループごとに集約関数（SUM）が計算されて出力されます。",
        "category": "Oracle"
    },
    {
        "id": 45,
        "question": "【GROUP BY句とHAVING句】\n「部署（DEPT_ID）ごとに給与（SALARY）の平均を計算し、その平均給与が300000以上の部署のみを表示する」SQL文として正しいものを選べ。",
        "options": [
            "SELECT DEPT_ID, AVG(SALARY) FROM EMPLOYEES WHERE AVG(SALARY) >= 300000 GROUP BY DEPT_ID;",
            "SELECT DEPT_ID, AVG(SALARY) FROM EMPLOYEES GROUP BY DEPT_ID HAVING AVG(SALARY) >= 300000;",
            "SELECT DEPT_ID, AVG(SALARY) FROM EMPLOYEES HAVING AVG(SALARY) >= 300000 GROUP BY DEPT_ID;",
            "SELECT DEPT_ID, AVG(SALARY) FROM EMPLOYEES GROUP BY DEPT_ID WHERE AVG(SALARY) >= 300000;"
        ],
        "answer": 1,
        "explanation": "GROUP BYでグループ化した後に、集約関数の結果（平均値など）を条件にして絞り込む場合は、WHERE句ではなく必ず「HAVING句」を使用します。",
        "category": "Oracle"
    },
    {
        "id": 46,
        "question": "【結合の記述ミス】\n複数テーブルの結合（JOIN）において、ON句の結合条件でよく発生するエラーの原因として正しいものを選べ。",
        "options": [
            "両方のテーブルに同じ名前の列が存在する場合に、「テーブル名.列名」のようにどのテーブルの列かを明示しなかったため「列の定義が曖昧です」というエラーになる。",
            "結合条件の列に、テーブル作成時に主キー（PRIMARY KEY）として設定した列以外を指定したため、構文エラーになる。",
            "SELECT句で取得する列の数を、結合するテーブル間で全く同じ数に揃えなかったためエラーになる。",
            "WHERE句とON句を同じSQL文の中に同時に記述すると処理が競合を起こすため、エラーになる。"
        ],
        "answer": 0,
        "explanation": "結合する複数のテーブルに「同じ名前の列」がある場合、そのまま列名だけを書くとデータベースはどちらの列か判断できず「列の定義が曖昧」というエラーを出します。",
        "category": "Oracle"
    },
    {
        "id": 47,
        "question": "【左外部結合のレコード数】\nテーブルA（5行）とテーブルB（3行）を、テーブルAを左側にして左外部結合（LEFT OUTER JOIN）した結果のレコード数について、正しいものを選べ。 （ただし、テーブルAの1行に対してテーブルBの複数行が一致するようなデータの重複関係はないものとする）",
        "options": [
            "データが少ないテーブルBの3行に制限されるため、結果は最大でも3行になる。",
            "左側であるテーブルAのデータは一致しなくてもすべて残るため、結果は最低でも5行になる。",
            "両方のテーブルに共通して存在する行のみが残るため、結果は必ず3行以下になる。",
            "テーブルAの5行とテーブルBの3行が無条件に掛け合わされ、結果は必ず15行になる。"
        ],
        "answer": 1,
        "explanation": "左外部結合（LEFT OUTER JOIN）は、左側のテーブル（テーブルA）の全行を必ず結果に残します。右側のデータが一致しなくてもNULLとして表示するため、最低でも5行は出力されます。",
        "category": "Oracle"
    },
    {
        "id": 48,
        "question": "【左外部結合の正しいSQL文】\nEMPLOYEES（従業員）テーブルを基準とし、そこにDEPARTMENTS（部署）テーブルを左外部結合するための正しい構文を選べ。",
        "options": [
            "FROM EMPLOYEES LEFT JOIN DEPARTMENTS ON EMPLOYEES.DEPT_ID = DEPARTMENTS.DEPT_ID",
            "FROM EMPLOYEES JOIN LEFT DEPARTMENTS ON EMPLOYEES.DEPT_ID = DEPARTMENTS.DEPT_ID",
            "FROM EMPLOYEES OUTER JOIN DEPARTMENTS WHERE LEFT EMPLOYEES.DEPT_ID = DEPARTMENTS.DEPT_ID",
            "FROM EMPLOYEES LEFT DEPARTMENTS JOIN ON EMPLOYEES.DEPT_ID = DEPARTMENTS.DEPT_ID"
        ],
        "answer": 0,
        "explanation": "左外部結合は「LEFT OUTER JOIN」または単に「LEFT JOIN」と記述します。結合条件は「ON」の後に指定します。",
        "category": "Oracle"
    },
    {
        "id": 49,
        "question": "【サブクエリ】\nサブクエリ（副問合せ）の基本的な説明として正しいものを選べ。",
        "options": [
            "サブクエリとは、データベースの定期的なバックアップを自動で作成するための専用のSQL文のことである。",
            "サブクエリとは、他のSQL文（SELECT, UPDATEなど）の中に埋め込まれたもう一つのSELECT文のことである。",
            "サブクエリを使用すると、テーブル同士を結合（JOIN）する処理よりも必ず実行速度が速くなるという特徴がある。",
            "サブクエリはWHERE句の中にしか記述することができず、FROM句やSELECT句には記述できない。"
        ],
        "answer": 1,
        "explanation": "サブクエリ（副問合せ）とは、WHERE句などの条件指定の中で、さらに別のSELECT文をカッコ()で囲んで埋め込む手法のことです。",
        "category": "Oracle"
    },
    {
        "id": 50,
        "question": "【スカラ・サブクエリ】\nスカラ・サブクエリの説明として正しいものを選べ。",
        "options": [
            "複数の列を持つテーブルを、そのまま一つの結果表として返すサブクエリのこと。",
            "複数行のデータを返し、主にIN演算子などと組み合わせて使用するサブクエリのこと。",
            "SELECT文で文字型の列だけを抽出し、文字列の比較にのみ用いるサブクエリのこと。",
            "実行結果として「1行1列（たった1つの単一の値）」だけを返すサブクエリのこと。"
        ],
        "answer": 3,
        "explanation": "スカラ・サブクエリとは、実行結果が必ず「1行1列（単一の値）」になるサブクエリのことです。これにより、= や > などの比較演算子と直接比較できるようになります。",
        "category": "Oracle"
    },
    {
        "id": 51,
        "question": "【エラーになるサブクエリ】\nWHERE句で「=」演算子を使用してスカラ・サブクエリと比較する際、エラーとなってしまうサブクエリの記述として誤っているもの（※エラーになるパターン）を選べ。",
        "options": [
            "(SELECT AVG(SALARY) FROM EMPLOYEES)",
            "(SELECT MAX(AGE) FROM EMPLOYEES)",
            "(SELECT SALARY FROM EMPLOYEES WHERE DEPT_ID = 10)",
            "(SELECT COUNT(*) FROM EMPLOYEES)"
        ],
        "answer": 2,
        "explanation": "「=」演算子は単一の値と比較する必要がありますが、「SELECT SALARY FROM EMPLOYEES WHERE DEPT_ID = 10」は条件に一致する従業員が複数いる場合、複数行を返してしまうためエラーになります。AVGやMAX、COUNTは必ず1行1列を返すため問題ありません。",
        "category": "Oracle"
    },
    {
        "id": 52,
        "question": "【クラスファイルが持つメリット・Javaの特徴】\nJavaの「プラットフォーム独立性」の説明として正しいものを選べ。",
        "options": [
            "一度作成したクラスファイルは、JVMがある環境ならどこでも動作する。",
            "OSの種類ごとに専用のプログラムを一から書き直す必要がある。",
            "プログラムを書いたコンピュータと同じ種類の環境でのみ動作する。",
            "人間が書いたソースコードをそのまま読み取ってどの環境でも動作する。"
        ],
        "answer": 0,
        "explanation": "Javaは一度コンパイルしてクラスファイル（バイトコード）を作成すれば、JVM（Java仮想マシン）がインストールされているどのOS環境でも動作するという「Write Once, Run Anywhere」の特徴を持っています。",
        "category": "Java"
    },
    {
        "id": 53,
        "question": "【コンパイラとインタプリタ (Java仮想マシン)】\nJavaプログラムを実行する仕組みの説明として誤っているものを選べ。",
        "options": [
            "コンパイラは人間が書いたコードをクラスファイルに変換する。",
            "インタプリタはクラスファイルを一行ずつ読み取って実行する。",
            "コンパイラとインタプリタの2段階を経ることで移植性を高めている。",
            "コンパイラが変換したクラスファイルは、人間がそのまま読むことができる。"
        ],
        "answer": 3,
        "explanation": "コンパイラが変換したクラスファイルは、人間が読むためのものではなくJVMが解釈するための機械語に近い形式（バイトコード）になっています。",
        "category": "Java"
    },
    {
        "id": 54,
        "question": "【System.out.println()の処理】\n以下の文はどのような処理を行うか。正しいものを選べ。 System.out.println(\"Hello\");",
        "options": [
            "コンソールに文字列を表示し、その後で自動的に改行する。",
            "コンソールに文字列を表示するが、改行処理は行わない。",
            "コンソールに文字列を表示する前に、一度だけ改行を行う。",
            "文字列を内部に保存するだけで、コンソールには何も表示しない。"
        ],
        "answer": 0,
        "explanation": "System.out.println() は、指定された文字列をコンソールに表示した直後に自動的に改行を行います。改行しない場合は print() を使用します。",
        "category": "Java"
    },
    {
        "id": 55,
        "question": "【mainメソッドに関する説明】\nJavaにおける public static void main(String[] args) の説明として正しいものを選べ。",
        "options": [
            "プログラムの最後に必ず呼び出される終了処理である。",
            "エラーが発生したときにだけ呼び出される特殊な処理である。",
            "プログラムの中で何度でも自由に呼び出すことができる変数である。",
            "プログラムが実行されたとき、一番最初に呼び出される入り口である。"
        ],
        "answer": 3,
        "explanation": "mainメソッドはJavaプログラムの実行時の「エントリーポイント（入り口）」であり、プログラムを起動したときに一番最初に呼び出されます。",
        "category": "Java"
    },
    {
        "id": 56,
        "question": "【エスケープシーケンスの説明】\n以下の文はどのような処理を行うか。正しいものを選べ。 System.out.println(\"A\\nB\");",
        "options": [
            "画面に「A\\nB」という文字の羅列をそのまま表示する。",
            "Aを表示した後に改行し、次の行の先頭にBを表示する。",
            "AとBの間にタブ（空白）を一つ空けて横並びに表示する。",
            "AとBの間にダブルクォーテーションを挟んで表示する。"
        ],
        "answer": 1,
        "explanation": "「\\n」はエスケープシーケンスの一つで「改行」を表します。そのため、Aが表示された後に改行され、次の行にBが表示されます。",
        "category": "Java"
    },
    {
        "id": 57,
        "question": "【変数の説明】\nプログラミングにおける「変数」の説明として誤っているものを選べ。",
        "options": [
            "数値や文字などのデータを一時的に保存しておくための箱のようなものである。",
            "データを保存するためには、あらかじめ箱の形（データ型）を決める必要がある。",
            "一度箱に入れたデータは、後から別のデータに入れ替えることができる。",
            "プログラムが終了した後も、箱の中のデータは半永久的に保存され続ける。"
        ],
        "answer": 3,
        "explanation": "変数はメモリ上に一時的に確保される領域です。プログラムの実行が終了すると、メモリ上の変数のデータはすべて消去されます。",
        "category": "Java"
    },
    {
        "id": 58,
        "question": "【変数の宣言と代入】\n以下の文はどのような処理を行うか。正しいものを選べ。 ---Java--- int age; age = 20;",
        "options": [
            "20という名前の箱を用意し、中にageという文字を入れる。",
            "20という値を記憶させ、その後に整数の箱をageとして用意する。",
            "整数の箱をageという名前で用意し、中に20を記憶させる。",
            "ageという箱を用意するが、中は空のままで何も記憶させない。"
        ],
        "answer": 2,
        "explanation": "int age; で整数を格納できる箱をageという名前で用意し、age = 20; でその中に20という数値を記憶（代入）させています。",
        "category": "Java"
    },
    {
        "id": 59,
        "question": "【入力処理（1行読み込み）】\n以下の文はどのような処理を行うか。正しいものを選べ。 ---Java--- BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); String str = br.readLine();",
        "options": [
            "ユーザーがキーボードから入力した1行分を読み込み、変数 str に保存する。",
            "ユーザーがキーボードから入力した1文字だけを読み込み、変数 str に保存する。",
            "変数 str の中身をキーボードへ送信し、コンソール画面に結果を表示させる。",
            "入力された1行目のデータを読み飛ばし、変数 str には何も保存しない状態にする。"
        ],
        "answer": 0,
        "explanation": "readLine()メソッドは、ユーザーが入力した文字列を「Enterキーが押されるまで」の1行分まとめて読み込むためのメソッドです。",
        "category": "Java"
    },
    {
        "id": 60,
        "question": "【入力処理（複数行読み飛ばし・連続読み込み）】\n以下の文はどのような処理を行うか。正しいものを選べ。 ---Java--- BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); br.readLine(); br.readLine(); String memo = br.readLine();",
        "options": [
            "1行目と2行目を読み込み、両方の文字列を結合して変数 memo に保存する。",
            "1行目から3行目までを順番に読み込み、すべての入力内容を変数 memo に保存する。",
            "3行目の入力を意図的に読み飛ばし、1行目と2行目の内容を変数 memo に保存する。",
            "1行目と2行目の入力を読み飛ばし、3行目の入力内容だけを変数 memo に保存する。"
        ],
        "answer": 3,
        "explanation": "最初の2回の br.readLine(); は読み込んだ結果を変数に代入していないため単に読み飛ばされます。3回目の読み込み結果のみが memo に保存されます。",
        "category": "Java"
    },
    {
        "id": 61,
        "question": "%演算子がどのような処理を行うかとして正しいものはどれか。",
        "options": [
            "割り算の商を求めること",
            "割り算の余りを求めること",
            "2つの数値を結合して1つの数値にすること",
            "検索を高速化するための索引付け（インデックス）を行うこと"
        ],
        "answer": 1,
        "explanation": "「%」は剰余演算子と呼ばれ、割り算を行った際の「余り」を求めるために使用されます。（例：5 % 2 は 1 となる）",
        "category": "Java"
    },
    {
        "id": 62,
        "question": "以下のコードにおける後置インクリメントの動作として正しいものはどれか。\n---Java---\nint a = 5;\nint b = a++;",
        "options": [
            "変数の値を1増やしてから代入すること",
            "変数の値を代入してから1増やすこと",
            "データを複数の表に分割し、重複を排除する（正規化）こと",
            "変数の値を1減らすこと"
        ],
        "answer": 1,
        "explanation": "「a++」のように変数名の後ろに「++」を付けると（後置インクリメント）、まず現在の値が代入などの処理に使われ、その後に変数自身の値が1加算されます。",
        "category": "Java"
    },
    {
        "id": 63,
        "question": "文字列連結演算子の動作として正しいものはどれか。",
        "options": [
            "数値同士を加算すること",
            "一連の連続した番号を自動生成する（シーケンス）こと",
            "文字列と他のデータ型の値を繋ぎ合わせて1つの文字列にすること",
            "複数のテーブルのデータを共通の列を基準に結びつける（結合）こと"
        ],
        "answer": 2,
        "explanation": "「+」演算子は、左右のどちらかが文字列（String）の場合、数値の加算ではなく「文字列の連結」として機能し、1つの繋がった文字列を作成します。",
        "category": "Java"
    },
    {
        "id": 64,
        "question": "型変換の説明で誤っているものを選べ。",
        "options": [
            "小さいサイズの型から大きいサイズの型への変換は自動的に行われる",
            "大きいサイズの型から小さいサイズの型へ変換するにはキャスト式が必要である",
            "キャストを行えば、論理型(boolean)を整数型(int)に変換できる",
            "異なる型の変数を演算する際、サイズの大きい型に自動で揃えられる"
        ],
        "answer": 2,
        "explanation": "boolean型（true/false）は特殊な型であり、intなどの数値型やその他の型と相互にキャスト（型変換）することはできません。",
        "category": "Java"
    },
    {
        "id": 65,
        "question": "【配列】\n配列の説明として正しいものはどれか。",
        "options": [
            "異なるデータ型の値を複数格納できるデータ構造のこと",
            "同じデータ型の複数の値を1つの変数名でまとめて管理するデータ構造のこと",
            "テーブルの主キーと外部キーを結びつけてデータを取得する（結合）こと",
            "データの矛盾を防ぐため、表を適切な形に分割する（正規化）こと"
        ],
        "answer": 1,
        "explanation": "配列は「同じデータ型」の複数の値を、一つの変数名とインデックス（番号）を使って連続して管理するためのデータ構造です。",
        "category": "Java"
    },
    {
        "id": 66,
        "question": "【配列】\n以下の配列の宣言と作成の処理の説明として正しいものはどれか。\n---Java---\nint[] numbers = new int[5];",
        "options": [
            "初期値として5つの要素全てに1が代入されること",
            "5つの要素を持つ整数型の配列を作成し、各要素は0で初期化されること",
            "値が5の要素を1つだけ持つ配列を作成すること",
            "検索速度を向上させるため、要素にインデックスを作成すること"
        ],
        "answer": 1,
        "explanation": "new int[5] と記述すると、要素数が5つのint型配列がメモリ上に作成されます。int型配列の各要素は、デフォルトで 0 に初期化されます。",
        "category": "Java"
    },
    {
        "id": 67,
        "question": "【配列】\n以下の配列の長さを表示する処理の説明として正しいものはどれか。\n---Java---\nint[] numbers = {1, 2, 3};\nSystem.out.println(numbers.length);",
        "options": [
            "配列の最後の要素の値（3）を取得すること",
            "配列が持つ要素の数（3）を取得すること",
            "配列の要素の合計値（6）を取得すること",
            "連続した数値を自動生成する（シーケンス）こと"
        ],
        "answer": 1,
        "explanation": "配列変数名.length は配列の「要素の数（長さ）」を返します。この場合は {1, 2, 3} の3つの要素があるため、3が取得されます。",
        "category": "Java"
    },
    {
        "id": 68,
        "question": "関係演算子の説明として正しいものを選べ。",
        "options": [
            "「<=」は左辺が右辺より小さいときに true を返す。",
            "「=>」は左辺が右辺以上のときに true を返す。",
            "「==」は左辺と右辺の値が等しいときに true を返す。",
            "「!=」は左辺と右辺の値が等しいときに true を返す。"
        ],
        "answer": 2,
        "explanation": "関係演算子「==」は、左辺と右辺の値が等しいかどうかを判定し、等しければ true、そうでなければ false を返します。",
        "category": "Java"
    },
    {
        "id": 69,
        "question": "if-else if-else文の説明として誤っているものを選べ。",
        "options": [
            "else if ブロックはいくつでも記述できるが、最低1つは必須である。",
            "if ブロックの条件式が true の場合、それ以降のブロックは評価されない。",
            "else ブロックは省略可能であり、記述しなくてもエラーにはならない。",
            "括弧内に記述する条件式は、評価結果が boolean 型になる必要がある。"
        ],
        "answer": 0,
        "explanation": "if文において「else if」ブロックは任意であり、全く記述しなくても構文エラーにはなりません。複数条件を判定したい場合のみ追加します。",
        "category": "Java"
    },
    {
        "id": 70,
        "question": "switch文の説明として誤っているものを選べ。",
        "options": [
            "case ラベルの値には、変数や評価結果が変わる式を指定することができる。",
            "break 文を省略すると、条件に一致した case ブロック以降の処理も実行される。",
            "default ブロックは、どの case ラベルの値とも一致しなかった場合に実行される。",
            "評価する式には、int 型などの整数や String 型の文字列などを指定することができる。"
        ],
        "answer": 0,
        "explanation": "switch文の case ラベルには、変数や評価結果が変わる式を指定することはできず、必ず「定数」を指定しなければなりません。",
        "category": "Java"
    },
    {
        "id": 71,
        "question": "論理演算子「||」の説明として正しいものを選べ。",
        "options": [
            "左右どちらかの条件式が true であれば、全体として true を返す。",
            "左右両方の条件式が true の場合のみ、全体として true を返す。",
            "左辺が true であっても、必ず右辺の条件式の評価が実行される。",
            "左右両方の条件式が false の場合、全体として true を返す。"
        ],
        "answer": 0,
        "explanation": "論理演算子「||」（論理和・OR）は、左右の条件式のうち、少なくとも「どちらか一方」が true であれば全体として true になります。",
        "category": "Java"
    },
    {
        "id": 72,
        "question": "for文の構文の説明として正しいものを選べ。",
        "options": [
            "丸括弧内は「初期化式; 条件式; 変化式」の順序で記述し、セミコロンで区切る。",
            "丸括弧内は「条件式; 初期化式; 変化式」の順序で記述し、セミコロンで区切る。",
            "丸括弧内は「初期化式, 条件式, 変化式」の順序で記述し、カンマで区切る。",
            "丸括弧内は「変化式; 条件式; 初期化式」の順序で記述し、セミコロンで区切る。"
        ],
        "answer": 0,
        "explanation": "for文の丸括弧の中は「初期化式 ; 条件式 ; 変化式」という順番で記述し、それぞれの要素をセミコロン（;）で区切るのが正しい構文です。",
        "category": "Java"
    },
    {
        "id": 73,
        "question": "while文とdo-while文の処理の違いとして正しいものを選べ。",
        "options": [
            "while文は条件式を最初に評価し、do-while文はブロック内の処理を一度実行した後に条件式を評価する。",
            "do-while文は条件式を最初に評価し、while文はブロック内の処理を一度実行した後に条件式を評価する。",
            "while文は条件式が false の間ループを継続し、do-while文は条件式が true の間ループを継続する。",
            "do-while文は無限ループを作成できるが、while文では無限ループを作成することができない。"
        ],
        "answer": 0,
        "explanation": "while文はループ処理の最初に条件を評価しますが、do-while文はループ処理の「最後」に条件を評価するため、最低でも必ず1回はブロック内の処理が実行されます。",
        "category": "Java"
    },
    {
        "id": 74,
        "question": "【オブジェクト指向の概要】\nオブジェクト指向プログラミングの概要についての説明として正しいものを選べ。",
        "options": [
            "プログラムの実行順序を制御するための条件分岐や繰り返し処理を極力排除する考え方である。",
            "データとそれを操作する手続きをひとまとめにして「モノ」として扱う考え方である。",
            "プログラムをデータを含まない独立した関数の集まりとして細かく分割する考え方である。",
            "すべての処理を順番に1つの巨大なファイルに記述して上から順に実行する考え方である。"
        ],
        "answer": 1,
        "explanation": "オブジェクト指向は、関連する「データ（属性・状態）」と「手続き（操作・ふるまい）」をひとまとめにして「オブジェクト（モノ）」として扱う考え方です。",
        "category": "Java"
    },
    {
        "id": 75,
        "question": "【オブジェクト指向のメリット】\nオブジェクト指向プログラミングのメリットとして誤っているものを選べ。",
        "options": [
            "プログラムを役割ごとに部品化することで、規模が大きくなってもコードの管理が容易になる。",
            "過去に作成した既存のプログラムを部品として再利用しやすく、開発の効率が大きく向上する。",
            "すべてのデータがどこからでも自由に書き換え可能になり、プログラムの動作予測が容易になる。",
            "扱う対象を現実世界の概念のようにモデル化して、プログラムの設計に落とし込みやすくなる。"
        ],
        "answer": 2,
        "explanation": "オブジェクト指向では「カプセル化」を用いて、どこからでも自由にデータを書き換えられる状況を防ぎ、予期せぬ不具合を防ぐことで動作予測を容易にします。",
        "category": "Java"
    },
    {
        "id": 76,
        "question": "【クラスの記述方法】\nJavaにおけるクラスの定義（記述方法）として正しいものを選べ。",
        "options": [
            "class クラス名 ( ) の形式で記述し、丸括弧の中にフィールドやメソッドを定義する。",
            "クラス名 class { } の形式で記述し、波括弧の中にフィールドやメソッドを定義する。",
            "class クラス名 [ ] の形式で記述し、角括弧の中にフィールドやメソッドを定義する。",
            "class クラス名 { } の形式で記述し、波括弧の中にフィールドやメソッドを定義する。"
        ],
        "answer": 3,
        "explanation": "Javaのクラスは、「class クラス名 { //フィールドやメソッドの定義 }」という形式で、波括弧の中に内容を記述します。",
        "category": "Java"
    },
    {
        "id": 77,
        "question": "【クラス型の変数宣言とオブジェクト生成】\n以下の文はどのような処理を行うか。正しいものを選べ。 ただし、Carクラスはすでに正しく定義されているものとする。\n---Java---\nCar myCar = new Car();",
        "options": [
            "Carクラス型の変数myCarを宣言し、新しく生成したCarオブジェクトを代入する。",
            "Carオブジェクトの変数myCarを宣言し、新しく生成したCarクラスの設計図を代入する。",
            "Car型の変数myCarを宣言し、既存のCarオブジェクトが持つフィールド内容を初期化する。",
            "CarクラスのメソッドmyCarを呼び出し、新しく生成したCarオブジェクトの処理を実行する。"
        ],
        "answer": 0,
        "explanation": "new Car() によってメモリ上に新しいCarオブジェクトを生成し、その参照（場所）を、Carクラス型の変数 myCar に代入しています。",
        "category": "Java"
    },
    {
        "id": 78,
        "question": "【フィールド宣言の記述】\nクラスにおけるフィールド（メンバ変数）宣言の記述に関する説明として正しいものを選べ。",
        "options": [
            "メソッドのブロック内に宣言され、メソッドの実行中のみ利用できる一時的なデータを表す。",
            "クラスのブロック内に宣言され、そのオブジェクトが持つ「状態」や「データ」を表す。",
            "クラスの外部に宣言され、プログラム全体で共通して利用できる変更不可の定数を表す。",
            "クラスのブロック内に宣言され、そのオブジェクトが持つ「ふるまい」や「処理」を表す。"
        ],
        "answer": 1,
        "explanation": "フィールド（メンバ変数）はクラスのブロック内に直接定義され、そのクラスから生成されたオブジェクトが保持する個別の「状態」や「データ」を表します。",
        "category": "Java"
    },
    {
        "id": 79,
        "question": "【メソッドの説明】\nクラスの構成要素であるメソッドの説明として正しいものを選べ。",
        "options": [
            "オブジェクトの「状態」や「属性」を表し、特定のデータを記憶するための変数のことである。",
            "クラスからオブジェクトを生成するための特別な命令であり、必ずクラス名と同じ名前にする。",
            "オブジェクトの「ふるまい」や「機能」を表し、ある程度の処理の塊を記述したものである。",
            "クラス間でデータを送受信するための専用の箱であり、具体的な処理内容は一切記述できない。"
        ],
        "answer": 2,
        "explanation": "メソッドはクラスの中に定義され、オブジェクトが実行できる「機能」や「ふるまい」を具体的な処理（コードの塊）として表現したものです。",
        "category": "Java"
    },
    {
        "id": 80,
        "question": "【引数の用途】\nメソッドにおける「引数」の用途として正しいものを選べ。",
        "options": [
            "メソッドを呼び出す際に、外部からその処理の実行に必要なデータをメソッドへ渡すため。",
            "メソッドの処理が終了した際に、その処理の実行結果を呼び出し元のメソッドへ返すため。",
            "メソッド内で発生したエラーを検知し、安全にプログラムの実行を強制終了させるため。",
            "メソッドの処理を途中で中断し、呼び出し元の処理の指定した行に強制的にジャンプさせるため。"
        ],
        "answer": 0,
        "explanation": "引数（パラメータ）は、メソッドを呼び出す際に、メソッド内部での計算や処理に必要となるデータ（値）を外部から渡すための仕組みです。",
        "category": "Java"
    },
    {
        "id": 81,
        "question": "【戻り値の用途】\nメソッドにおける「戻り値」の用途として正しいものを選べ。",
        "options": [
            "メソッド内で使用する変数のデータ型を、プログラム実行時に自動的に変換・決定するため。",
            "メソッドを呼び出す際に、外部から実行に必要なデータをメソッド内にあらかじめ取り込むため。",
            "メソッドの処理を順番に実行せず、コード内の指定した別のメソッドへ強制的に移動させるため。",
            "メソッドの処理が終了した際に、その処理の実行結果をデータとして呼び出し元へ返すため。"
        ],
        "answer": 3,
        "explanation": "戻り値（返り値）は、メソッドの処理がすべて完了した後に、その結果のデータをメソッドの呼び出し元へ送り返すための仕組みです。",
        "category": "Java"
    },
    {
        "id": 82,
        "question": "【アクセス修飾子（private）】\nprivate 修飾子がついたメンバの特徴として正しいものを選べ。",
        "options": [
            "同じクラス内からのみアクセスできる。",
            "同じパッケージ内のすべてのクラスからアクセスできる。",
            "サブクラス（子クラス）からであればアクセスできる。",
            "どのクラスからでも自由にアクセスできる。"
        ],
        "answer": 0,
        "explanation": "private修飾子を付けたフィールドやメソッドは、完全に隠蔽され「そのクラスの内部からのみ」アクセスできるようになります（カプセル化の基本）。",
        "category": "Java"
    },
    {
        "id": 83,
        "question": "【アクセス修飾子（public）】\npublic 修飾子がついたメンバの特徴として正しいものを選べ。",
        "options": [
            "同じクラス内からのみアクセスできる。",
            "同じパッケージ内のクラスからのみアクセスできる。",
            "異なるパッケージのクラスを含む、すべてのクラスからアクセスできる。",
            "サブクラスからのみアクセスでき、他のクラスからはアクセスできない。"
        ],
        "answer": 2,
        "explanation": "public修飾子は最も制限が緩いアクセス修飾子であり、異なるパッケージも含めて「すべてのクラスから」自由にアクセス可能になります。",
        "category": "Java"
    },
    {
        "id": 84,
        "question": "【メソッドのオーバーロード（定義）】\nメソッドのオーバーロードの説明として正しいものを選べ。",
        "options": [
            "同じクラス内で、メソッド名が同じで戻り値の型だけが異なるメソッドを定義することができる。",
            "同じクラス内で、メソッド名が同じで引数の型や数が異なるメソッドを複数定義することができる。",
            "異なるクラスに、まったく同じシグネチャ（名前・引数）のメソッドを定義することをオーバーロードという。",
            "オーバーロードされたメソッドは、クラスのインスタンスを生成しなくても呼び出すことができる。"
        ],
        "answer": 1,
        "explanation": "オーバーロードとは、「同じクラス内」に「同じメソッド名」で「引数の型や数（または並び順）が異なる」メソッドを複数定義することを指します。",
        "category": "Java"
    },
    {
        "id": 85,
        "question": "【メソッドのオーバーロード（呼び出し）】\n以下のコードを実行したとき、呼び出されるメソッドとして正しいものを選べ。\nただし、クラス Calc には以下の3つのオーバーロードされたメソッドが定義されているとする。\n----java----\nvoid add(int a, int b)     { System.out.println(\"int, int\"); }\nvoid add(double a, int b)  { System.out.println(\"double, int\"); }\nvoid add(int a, double b)  { System.out.println(\"int, double\"); }\n実行コード：\n----java----\nCalc c = new Calc();\nc.add(1, 2);",
        "options": [
            "add(double a, int b) が呼び出され、double, int と表示される。",
            "add(int a, double b) が呼び出され、int, double と表示される。",
            "add(int a, int b) が呼び出され、int, int と表示される。",
            "引数の型が一致するメソッドが複数あるためコンパイルエラーになる。"
        ],
        "answer": 2,
        "explanation": "呼び出し時の引数が (1, 2) とどちらもint型であるため、定義されている中から引数が (int, int) に一致するメソッドが選択されて実行されます。",
        "category": "Java"
    },
    {
        "id": 86,
        "question": "【コンストラクタ（実行タイミング）】\nコンストラクタ内のブロックの処理が実行される正しいタイミングを選べ。",
        "options": [
            "クラスが最初に読み込まれた（ロードされた）とき、1回だけ実行される。",
            "new 演算子によってインスタンスが生成されたとき、その都度実行される。",
            "インスタンスに対してメソッドが最初に呼び出されたとき、1回だけ実行される。",
            "プログラム全体の終了時に、後処理として実行される。"
        ],
        "answer": 1,
        "explanation": "コンストラクタは、new演算子を使って「インスタンス（オブジェクト）が生成された瞬間」に、初期化処理を行うために自動的かつその都度実行されます。",
        "category": "Java"
    },
    {
        "id": 87,
        "question": "【コンストラクタのオーバーロード】\nコンストラクタのオーバーロードについての説明として正しいものを選べ。",
        "options": [
            "コンストラクタはオーバーロードできないため、1クラスに1つしか定義できない。",
            "引数の型や数が異なるコンストラクタを、同じクラスに複数定義することができる。",
            "オーバーロードしたコンストラクタを呼び出すには、メソッドと同様に戻り値の型を指定する必要がある。",
            "オーバーロードされたコンストラクタは、new なしで直接呼び出すことができる。"
        ],
        "answer": 1,
        "explanation": "コンストラクタも通常のメソッドと同様に、引数の型や数を変えることで同じクラス内に複数定義（オーバーロード）することができます。",
        "category": "Java"
    },
    {
        "id": 88,
        "question": "【staticメソッドの特徴】\nstatic 修飾子がついたメソッドの特徴として正しいものを選べ。",
        "options": [
            "static メソッドは必ずインスタンスを生成してから呼び出さなければならない。",
            "static メソッドは、インスタンスを生成しなくても「クラス名.メソッド名()」の形で呼び出すことができる。",
            "static メソッドの内部では、同じクラスのインスタンスメソッドを直接呼び出すことができる。",
            "static メソッドは、1つのクラスにつき1つしか定義できない。"
        ],
        "answer": 1,
        "explanation": "staticメソッドはインスタンスごとの状態に依存しない共通の処理であり、インスタンスを生成（new）しなくても「クラス名.メソッド名()」で直接呼び出せます。",
        "category": "Java"
    },
    {
        "id": 89,
        "question": "【staticメソッド（誤りの選択）】\nstatic メソッドの説明として誤っているものを選べ。",
        "options": [
            "クラス名を使って「クラス名.メソッド名()」の形式で呼び出すことができる。",
            "static メソッド内では、static でないインスタンス変数を直接参照することができる。",
            "static メソッドは、インスタンスを生成しなくても呼び出せる。",
            "static メンバはクラス全体で共有されるため、すべてのインスタンスから同じ値にアクセスされる。"
        ],
        "answer": 1,
        "explanation": "staticメソッドはインスタンスがなくても呼び出せるため、メソッド内で特定のインスタンスに紐づく変数（非static変数）を直接参照することはできません。",
        "category": "Java"
    },
    {
        "id": 90,
        "question": "【クラスライブラリ】\nJavaのクラスライブラリに関する説明として正しいものを選べ。",
        "options": [
            "java.lang パッケージのクラスは、ファイルの先頭に import 文を書かなくても使用できる。",
            "java.util パッケージのクラスは、import 文を書かなくても自動的に使用できる。",
            "クラスライブラリを使うには、すべてのクラスに対して必ず import 文が必要である。",
            "import 文はファイルの末尾に記述しなければならない。"
        ],
        "answer": 0,
        "explanation": "java.langパッケージにはStringやSystemなど最も基本的なクラスが含まれており、このパッケージのクラスだけは特別にimport文なしで使用できます。",
        "category": "Java"
    },
    {
        "id": 91,
        "question": "【参照渡し】\n以下のコードの実行後、arr[0] の値として正しいものを選べ。\nただし、arr には {10, 20, 30} が代入されているとする。\n------------java--------------\nstatic void change(int[] a) {\na[0] = 99;\n}\npublic static void main(String[] args) {\nint[] arr = {10, 20, 30};\nchange(arr);\nSystem.out.println(arr[0]);\n}",
        "options": [
            "99",
            "10",
            "0",
            "コンパイルエラーになる。"
        ],
        "answer": 0,
        "explanation": "配列は参照型であるため、メソッドに渡されるのは「配列の実体の場所（参照）」です。メソッド内で要素を変更すると、呼び出し元の配列も変更（99に）されます。",
        "category": "Java"
    },
    {
        "id": 92,
        "question": "【スーパークラスとサブクラス】\nJavaの継承に関する説明として正しいものを選べ。",
        "options": [
            "サブクラスは、スーパークラスの public および protected なフィールドやメソッドを使用できる。",
            "サブクラスは、スーパークラスの private なフィールドに直接アクセスできる。",
            "サブクラスを定義するときは implements スーパークラス名 と記述する。",
            "サブクラスは、スーパークラスのすべてのメンバーに制限なくアクセスできる。"
        ],
        "answer": 0,
        "explanation": "サブクラス（子クラス）は extends キーワードを用いて定義し、スーパークラス（親クラス）の持つ private 以外のフィールドやメソッドを引き継いで利用できます。",
        "category": "Java"
    },
    {
        "id": 93,
        "question": "【protected修飾子】\nprotected 修飾子に関する説明として正しいものを選べ。",
        "options": [
            "protected が付いたメンバーは、同じパッケージ内のクラスと、そのクラスを継承したサブクラスからアクセスできる。",
            "protected が付いたメンバーは、同じパッケージ内のクラスからのみアクセスでき、サブクラスからはアクセスできない。",
            "protected が付いたメンバーは、public と同じくすべてのクラスからアクセスできる。",
            "protected が付いたメンバーは、private と同じく同じクラス内からしかアクセスできない。"
        ],
        "answer": 0,
        "explanation": "protected修飾子は、デフォルトのアクセス範囲（同じパッケージ内）に加えて、「異なるパッケージであっても、それを継承したサブクラスから」のアクセスを許可します。",
        "category": "Java"
    },
    {
        "id": 94,
        "question": "【オーバーライド】\nオーバーライドに関する説明として正しいものを選べ。",
        "options": [
            "オーバーライドとは、スーパークラスと同じメソッド名・同じ引数・同じ戻り値の型でメソッドを再定義することである。",
            "オーバーライドとは、同じクラス内で引数の数や型を変えて同名のメソッドを複数定義することである。",
            "オーバーライドするとき、引数の型が異なっていてもメソッド名が同じであれば成立する。",
            "@Override アノテーションを付けると、コンパイル時ではなく実行時にミスを検出できる。"
        ],
        "answer": 0,
        "explanation": "オーバーライドとは、サブクラスがスーパークラスから継承したメソッドを、「全く同じメソッド名・引数・戻り値」で独自の処理に書き換える（再定義する）ことです。",
        "category": "Java"
    },
    {
        "id": 95,
        "question": "【finalフィールド】\nfinal 修飾子に関する説明として正しいものを選べ。",
        "options": [
            "フィールドに final を付けると、最初に値を代入した後は変更できなくなる。",
            "フィールドに final を付けると、サブクラスから自由に値を上書きできるようになる。",
            "メソッドに final を付けると、サブクラスでそのメソッドをオーバーライドすることが必須になる。",
            "クラスに final を付けると、そのクラスを継承して新たなサブクラスを作ることができるようになる。"
        ],
        "answer": 0,
        "explanation": "変数やフィールドに final を付けると、その値は一度代入されたら二度と変更できない「定数」として扱われるようになります。",
        "category": "Java"
    },
    {
        "id": 96,
        "question": "【抽象クラス】\n抽象クラスの特徴として正しいものを選べ。",
        "options": [
            "抽象クラスは new を使って直接インスタンスを生成できる。",
            "抽象クラスはサブクラスに継承されることを前提としており、直接インスタンスを生成することはできない。",
            "抽象クラスは抽象メソッドを持つことができないため、すべてのメソッドに処理を記述しなければならない。",
            "抽象クラスはインターフェイスと同様に implements キーワードで利用する。"
        ],
        "answer": 1,
        "explanation": "抽象クラス（abstract class）は未完成のメソッド（抽象メソッド）を持つことができるため、直接newしてインスタンス化することはできず、必ず継承して利用します。",
        "category": "Java"
    },
    {
        "id": 97,
        "question": "【抽象クラス】\n抽象クラスおよび抽象メソッドに付与する修飾子として正しいものを選べ。",
        "options": [
            "クラス名やメソッド名の前に static 修飾子を付与する。",
            "クラス名やメソッド名の前に final 修飾子を付与する。",
            "クラス名やメソッド名の前に abstract 修飾子を付与する。",
            "クラス名やメソッド名の前に protected 修飾子を付与する。"
        ],
        "answer": 2,
        "explanation": "抽象クラスや抽象メソッドを定義する際には、クラス宣言やメソッド宣言の先頭に「abstract」という修飾子を付与する必要があります。",
        "category": "Java"
    },
    {
        "id": 98,
        "question": "【インターフェイス】\nインターフェイスの特徴として正しいものを選べ。",
        "options": [
            "インターフェイスは具体的な処理を持つメソッドのみを定義でき、抽象メソッドは定義できない。",
            "インターフェイスは1つのクラスに対して1つしか実装させることができない。",
            "インターフェイスは抽象メソッドと定数のみを定義でき、クラスに複数同時に実装させることができる。",
            "インターフェイスはコンストラクタを持ち、インスタンス生成時に初期処理を行うことができる。"
        ],
        "answer": 2,
        "explanation": "インターフェイスは、具体的な処理を持たない「抽象メソッド」と「定数」のみを定義でき、1つのクラスに複数のインターフェイスを同時に実装（implements）できます。",
        "category": "Java"
    },
    {
        "id": 99,
        "question": "【インターフェイス】\nインターフェイス内のフィールドに暗黙的に付与されるアクセス修飾子として正しいものを選べ。",
        "options": [
            "インターフェイスのフィールドには private が暗黙的に付与され、外部からはアクセスできない。",
            "インターフェイスのフィールドには public static final が暗黙的に付与され、すべて定数として扱われる。",
            "インターフェイスのフィールドには protected が暗黙的に付与され、サブクラスからのみアクセスできる。",
            "インターフェイスのフィールドには abstract が暗黙的に付与され、実装クラスで定義が必要となる。"
        ],
        "answer": 1,
        "explanation": "インターフェイス内で定義したフィールドには、明記しなくても自動的に public static final が付与され、変更不可能な定数として扱われます。",
        "category": "Java"
    },
    {
        "id": 100,
        "question": "【インターフェイス】\nインターフェイスの特徴として誤っているものを選べ。",
        "options": [
            "インターフェイスは抽象メソッドを定義できる。",
            "インターフェイスのフィールドはすべて定数として扱われる。",
            "インターフェイスは new を使って直接インスタンスを生成することができる。",
            "1つのクラスに対して複数のインターフェイスを同時に実装させることができる。"
        ],
        "answer": 2,
        "explanation": "インターフェイスは抽象クラス以上に未完成な設計図（仕様書）であるため、抽象クラスと同様にnew演算子を使って直接インスタンスを生成することはできません。",
        "category": "Java"
    },
    {
        "id": 101,
        "question": "【オブジェクト指向の3大要素】\nオブジェクト指向の3大要素の組み合わせとして誤っているものを選べ。",
        "options": [
            "カプセル化・継承・ポリモーフィズム",
            "データ隠蔽・機能の引き継ぎ・多様性",
            "カプセル化・抽象化・委譲",
            "情報の隠蔽・サブクラスへの機能継承・同一メソッド名による異なる振る舞い"
        ],
        "answer": 2,
        "explanation": "オブジェクト指向の3大要素は「カプセル化（データの隠蔽）」「継承（機能の引き継ぎ）」「ポリモーフィズム（多様性）」の3つを指します。",
        "category": "Java"
    },
    {
        "id": 102,
        "question": "【オブジェクト指向の3大要素】\nオブジェクト指向の3大要素の説明として正しいものを選べ。",
        "options": [
            "カプセル化とはクラスの処理を細かく分割することで、継承とはメソッドの名前を統一することである。",
            "カプセル化はデータの隠蔽と保護、継承は機能の引き継ぎと拡張、ポリモーフィズムは同じメソッド名で異なる振る舞いをする仕組みである。",
            "カプセル化とはクラス同士を結合させることで、ポリモーフィズムとはクラスを複数に分割することである。",
            "継承とは複数のインターフェイスを同時に実装する多重実装のことで、ポリモーフィズムとはフィールドの値を隠すことである。"
        ],
        "answer": 1,
        "explanation": "カプセル化は保護、継承は再利用と拡張、ポリモーフィズム（多態性）は同じ呼び出し方（同名メソッド）でオブジェクトごとに異なる動作をさせる強力な仕組みです。",
        "category": "Java"
    },
    {
        "id": 103,
        "question": "【パッケージ】\nパッケージの用途として正しいものを選べ。",
        "options": [
            "クラスをグループ化して名前の衝突を防ぐ",
            "クラスのメンバ変数の初期値を一括で設定する",
            "クラスのインスタンス生成を自動化する",
            "クラスの継承関係を強制的に無効化する"
        ],
        "answer": 0,
        "explanation": "パッケージは、多数のクラスをフォルダのように分類・グループ化する仕組みです。これにより、異なるパッケージ間であれば同じ名前のクラスを作成でき、名前の衝突を防げます。",
        "category": "Java"
    },
    {
        "id": 104,
        "question": "【パッケージ】\nインポート文を記述する利点として正しいものを選べ。",
        "options": [
            "指定したクラスの完全修飾名を省略して記述できる",
            "指定したクラスのすべてのメソッドを静的に呼び出せる",
            "指定したクラスのprivateメンバにアクセスできる",
            "指定したクラスのコンストラクタの引数を省略できる"
        ],
        "answer": 0,
        "explanation": "import文をファイルの先頭に記述することで、プログラム内でそのクラスを使用する際に「java.util.ArrayList」のような長い完全修飾名を「ArrayList」と省略して書けるようになります。",
        "category": "Java"
    },
    {
        "id": 105,
        "question": "【例外】\ncatchブロック内の処理が実行される条件として正しいものを選べ。",
        "options": [
            "tryブロック内で指定された型の例外が発生したとき",
            "tryブロック内の処理がすべて正常に完了したとき",
            "finallyブロック内で指定された型の例外が発生したとき",
            "メソッドの戻り値がnullとして返却されたとき"
        ],
        "answer": 0,
        "explanation": "catchブロックは、tryブロック内でエラー（例外）が発生し、その例外の種類がcatchで指定した例外の型（またはそのサブクラス）と一致した場合にのみ実行されます。",
        "category": "Java"
    },
    {
        "id": 106,
        "question": "【例外】\nfinallyブロック内の処理として正しいものを選べ。",
        "options": [
            "例外の発生有無にかかわらず、必ず実行される",
            "例外が発生しなかった場合のみ、必ず実行される",
            "例外がcatchブロックで捕捉された場合のみ、実行される",
            "例外が発生し、異常終了した場合のみ、実行される"
        ],
        "answer": 0,
        "explanation": "finallyブロックに記述された処理は、例外が発生してもしなくても、tryまたはcatchの処理が終わった後に「必ず」実行されます。ファイルのクローズ処理などによく使われます。",
        "category": "Java"
    },
    {
        "id": 107,
        "question": "【例外】\n例外処理の記述（try-catchまたはthrows）が不要な例外クラスとして正しいものを選べ。",
        "options": [
            "RuntimeExceptionとそのサブクラスである例外",
            "Exceptionクラスを直接継承しているすべての例外",
            "IOExceptionとそのすべてのサブクラスである例外",
            "独自に定義したすべてのオリジナル例外クラス"
        ],
        "answer": 0,
        "explanation": "RuntimeExceptionとそのサブクラス（非検査例外）は、プログラマの論理的ミス（NullPointerExceptionなど）を表すため、try-catchやthrowsでの明示的な例外処理を強制されません。",
        "category": "Java"
    },
    {
        "id": 108,
        "question": "【コレクションフレームワーク】\nListと配列の違いとして正しいものを選べ。",
        "options": [
            "Listは要素の追加に応じて自動的にサイズが拡張される",
            "配列は異なるデータ型の要素を混在して格納・管理できる",
            "Listはインスタンス生成時に必ず最大要素数を指定する",
            "配列は格納された要素を自動的に昇順に並び替えされる"
        ],
        "answer": 0,
        "explanation": "配列は作成時に要素数が固定されますが、List（ArrayListなど）は要素を追加（add）や削除（remove）するたびに、内部的にサイズが自動で拡張・縮小される便利なデータ構造です。",
        "category": "Java"
    },
    {
        "id": 109,
        "question": "【コレクションフレームワーク】\n以下の文はどのような処理を行うか。正しいものを選べ。\n---Java---\nList list = new ArrayList<>();\nlist.add(\"Apple\"); list.add(\"Banana\");\nlist.set(1, \"Orange\");\nSystem.out.println(list.get(1));",
        "options": [
            "文字列 Orange を出力する",
            "文字列 Banana を出力する",
            "文字列 Apple を出力する",
            "実行時に例外が発生する"
        ],
        "answer": 0,
        "explanation": "list.get(1)はインデックス1（2番目）の要素を取得します。最初に追加されたBananaがインデックス1でしたが、set(1, \"Orange\")によって「Orange」に上書きされたため、Orangeが出力されます。",
        "category": "Java"
    },
    {
        "id": 110,
        "question": "【Webの基礎に関する問題】\n静的ページと動的ページについて、以下の空欄（A）・（B）に入る組み合わせとして正しいものを選べ。\n「（A）ページとは、サーバー上に保存されたHTMLファイルをそのまま返すページのことである。一方、（B）ページとは、アクセスのたびにプログラムが実行され、内容が変化するページのことである。」",
        "options": [
            "A：動的　／　B：静的",
            "A：静的　／　B：動的",
            "A：静的　／　B：静的",
            "A：動的　／　B：動的"
        ],
        "answer": 1,
        "explanation": "静的ページ（Static）はサーバー上にあるHTMLファイルをそのまま返し、動的ページ（Dynamic）はアクセス時にプログラムが処理を行ってその都度異なる内容を生成します。",
        "category": "Spring"
    },
    {
        "id": 111,
        "question": "【Webの基礎に関する問題】\nHTTPにおけるリクエストとレスポンスの説明として正しいものを選べ。",
        "options": [
            "クライアントがサーバーへデータを送ることをレスポンス、サーバーが結果を返すことをリクエストという。",
            "リクエストはサーバーからクライアントへ送られ、レスポンスはクライアントからサーバーへ送られる。",
            "リクエストはクライアントからサーバーへ送られ、レスポンスはサーバーからクライアントへ返される。",
            "リクエストとレスポンスは同一の通信であり、方向による区別はない。"
        ],
        "answer": 2,
        "explanation": "Webの通信は、クライアント（ブラウザ）からサーバーに対して要求を送る「リクエスト」と、サーバーがその結果を返す「レスポンス」という一連のやり取りで構成されます。",
        "category": "Spring"
    },
    {
        "id": 112,
        "question": "【Webの基礎に関する問題】\nコンテキストパスについて正しいものを選べ。",
        "options": [
            "コンテキストパスとは、URLの中でファイル名の部分のみを指す文字列である。",
            "コンテキストパスとは、Webアプリケーションを識別するためにURLの先頭に付与されるパスのことである。",
            "コンテキストパスはサーバーごとに1つだけ存在し、すべてのアプリケーションで共有される。",
            "コンテキストパスは、ドメイン名（ホスト名）と同じ意味で使われる用語である。"
        ],
        "answer": 1,
        "explanation": "コンテキストパスは、1つのサーバー上で動いている複数のWebアプリケーションを識別するため、URLのルートの直後に付与されるアプリケーション固有のパスです。",
        "category": "Spring"
    },
    {
        "id": 113,
        "question": "【Webの基礎に関する問題】\nSpring FrameworkのWebアプリとDIについて、以下の空欄（A）・（B）に入る組み合わせとして正しいものを選べ。\n「Spring Frameworkは、（A）という仕組みにより、クラスが必要とする依存オブジェクトを外部から自動的に注入する。また、Webアプリ開発では（B）というモジュールが中心的な役割を担う。」",
        "options": [
            "A：DI（依存性の注入）　／　B：Spring MVC",
            "A：MVC（モデルビューコントローラ）　／　B：Spring DI",
            "A：DI（依存性の注入）　／　B：Spring JDBC",
            "A：AOP（アスペクト指向）　／　B：Spring MVC"
        ],
        "answer": 0,
        "explanation": "Springの最大の特徴であるDI（Dependency Injection：依存性の注入）により、オブジェクト間の依存関係が自動的に解決されます。Webアプリ開発ではSpring MVCが使われます。",
        "category": "Spring"
    },
    {
        "id": 114,
        "question": "【Springアノテーションに関する問題】\n@Controller が付与されたクラスの特徴として正しいものを選べ。",
        "options": [
            "データベースへのアクセスを担当するクラスであることを示す。",
            "そのクラスがHTTPリクエストを受け付けるコントローラーであることをSpringに認識させる。",
            "クラスをシングルトンとして生成することを禁止するアノテーションである。",
            "HTMLテンプレートを直接定義するためのクラスであることを示す。"
        ],
        "answer": 1,
        "explanation": "クラスに@Controllerアノテーションを付与することで、Springはそのクラスが画面遷移を伴うHTTPリクエストを受け付けるコントローラーであると認識します。",
        "category": "Spring"
    },
    {
        "id": 115,
        "question": "【Springアノテーションに関する問題】\n@RequestMapping が付与されたメソッドの特徴として正しいものを選べ。",
        "options": [
            "そのメソッドは、対応するURLへのリクエストが来たときに自動的に呼び出される。",
            "そのメソッドは、アプリケーション起動時に一度だけ自動的に実行される。",
            "そのメソッドは、他のクラスからは呼び出せなくなる。",
            "そのメソッドは、戻り値を必ずvoidにしなければならない。"
        ],
        "answer": 0,
        "explanation": "@RequestMapping（または@GetMapping, @PostMappingなど）を付与することで、指定したURLに対するリクエストが来た際に、そのメソッドが自動的に実行されるようマッピングされます。",
        "category": "Spring"
    },
    {
        "id": 116,
        "question": "【Springアノテーションに関する問題】\n@RequestMapping が付与されたメソッドの戻り値として正しいものを選べ。",
        "options": [
            "戻り値は必ずint型でなければならない。",
            "戻り値にはリダイレクト先URLのみが指定でき、テンプレート名は返せない。",
            "戻り値のString値が、遷移先のビュー（テンプレート）名として使用される。",
            "戻り値はHTTPステータスコードを表す数値でなければならない。"
        ],
        "answer": 2,
        "explanation": "コントローラのメソッドがString型の戻り値を返す場合、その文字列は「遷移先の画面（ビュー・テンプレート）の名前」として扱われ、対応するHTMLファイルが表示されます。",
        "category": "Spring"
    },
    {
        "id": 117,
        "question": "【パスと画面遷移に関する問題】\n絶対パスの説明として正しいものを選べ。",
        "options": [
            "現在のファイルの位置を基準として記述するパスのことである。",
            "「../」などの相対記法を使い、階層をさかのぼって指定するパスのことである。",
            "ルートディレクトリやドメインを起点とし、完全な経路で指定するパスのことである。",
            "ファイル名のみで構成され、ディレクトリ情報を含まないパスのことである。"
        ],
        "answer": 2,
        "explanation": "絶対パスはルートディレクトリ（「/」）やURLのドメイン名から始まる完全な経路指定のことです。逆に現在の位置を基準とするものは相対パスと呼ばれます。",
        "category": "Spring"
    },
    {
        "id": 118,
        "question": "【パスと画面遷移に関する問題】\nフォワードの説明として正しいものを選べ。",
        "options": [
            "サーバー内部で別のリソースへ処理を引き継ぐため、クライアント側のURLは変化しない。",
            "ブラウザに新しいURLへアクセスするよう指示するため、URLバーの表示が変わる。",
            "フォワードを行うと、リクエストに保持していたデータは必ず破棄される。",
            "フォワードはクライアントとサーバー間で2回の通信が発生する。"
        ],
        "answer": 0,
        "explanation": "フォワードは、サーバー内部で処理を別の画面（テンプレート）に引き継ぐ方式です。クライアントとサーバー間の通信は1回のみで完結するため、ブラウザのURLバーは変化しません。",
        "category": "Spring"
    },
    {
        "id": 119,
        "question": "【パスと画面遷移に関する問題】\nリダイレクトの説明として正しいものを選べ。",
        "options": [
            "サーバー内部で処理を転送するため、ブラウザのURLバーは変化しない。",
            "サーバーがブラウザに対して別のURLへ再度リクエストするよう指示し、URLバーの表示が変わる。",
            "リダイレクト後も元のリクエストスコープのデータはそのまま引き継がれる。",
            "リダイレクトはサーバー内部の処理であり、クライアントには通知されない。"
        ],
        "answer": 1,
        "explanation": "リダイレクトは、サーバーがブラウザに対して「別のURLへ再リクエストして」と指示を返す方式です。通信が2回発生し、ブラウザのURLバーが新しいURLに変わります。",
        "category": "Spring"
    },
    {
        "id": 120,
        "question": "【コントローラでの引数名（値の受け取り）】\nHTMLのフォームから送信されたデータを、コントローラで受け取る際のルールとして正しいものを選べ。",
        "options": [
            "HTMLのname属性の値とコントローラの引数名は完全に一致させる必要がある。",
            "HTMLのid属性の値とコントローラの引数名は完全に一致させる必要がある。",
            "HTMLのname属性の値とコントローラの引数名が部分的に一致していれば受け取ることができる。",
            "HTMLのclass属性の値とコントローラの引数名は完全に一致させる必要がある。"
        ],
        "answer": 0,
        "explanation": "フォームから送信されたデータ（パラメータ）を受け取るには、HTML側（inputタグなど）のname属性の値と、コントローラの引数名を一致させる必要があります。",
        "category": "Spring"
    },
    {
        "id": 121,
        "question": "【GETリクエストとPOSTリクエストの違い】\nGETリクエストの特徴として正しいものを選べ。",
        "options": [
            "送信するデータをURLの末尾に付加する方式であり、データの一覧取得や検索の用途で使用される。",
            "送信するデータをリクエストボディに格納する方式であり、データの一覧取得や検索の用途で使用される。",
            "送信するデータをURLの末尾に付加する方式であり、パスワードなど秘匿性の高いデータの送信で使用される。",
            "送信するデータをリクエストボディに格納する方式であり、検索結果をブラウザの履歴に残す目的で使用される。"
        ],
        "answer": 0,
        "explanation": "GETリクエストは、送信するデータをURLの末尾（クエリパラメータ）に付加して送る方式です。データがURLに見えるため、検索や画面の表示などデータの取得に適しています。",
        "category": "Spring"
    },
    {
        "id": 122,
        "question": "【POST】\nPOSTリクエストの特徴や用途として誤っているものを選べ。",
        "options": [
            "送信するデータをリクエストボディに隠して送る方式である。",
            "データの登録・更新・削除や、パスワードの送信などの用途で使用される。",
            "送信したデータがURLの末尾に表示されるため、結果のページをブックマークするのに適している。",
            "URLにデータが出ないため、送信内容がブラウザの履歴に残らない。"
        ],
        "answer": 2,
        "explanation": "POSTリクエストはデータをリクエストボディに格納して隠して送るため、URLには表示されません。そのため、結果のページをブックマークするのには適していません（GETが適しています）。",
        "category": "Spring"
    },
    {
        "id": 123,
        "question": "【フォームクラスの正しい役割】\nフォームクラスの役割として正しいものを選べ。",
        "options": [
            "画面からの入力値を一時的にまとめて格納するための専用のクラスである。",
            "画面から受け取ったデータを元に、データベースへの保存処理を直接実行するクラスである。",
            "画面から受け取ったデータを元に、複雑な金額計算などのビジネスロジックを実行するクラスである。",
            "画面を表示するためのデザイン情報を保持し、次への画面遷移を制御するクラスである。"
        ],
        "answer": 0,
        "explanation": "フォーム（Form）クラスは、画面から送信された複数の入力値をまとめて受け取り、一時的に保持しておくための「データの入れ物」として機能する専用のクラスです。",
        "category": "Spring"
    },
    {
        "id": 124,
        "question": "【スコープの特徴（データが生き残る期間）】\nセッションスコープの特徴として正しいものを選べ。",
        "options": [
            "ブラウザを閉じるかタイムアウトするまで有効であり、ユーザーごとの情報を保持する。",
            "1回のリクエスト（画面遷移）が終わるまで有効であり、最も短命で安全に情報を保持する。",
            "サーバーが動いている間は常に有効であり、すべてのユーザー間で情報を共有して保持する。",
            "ブラウザを閉じるかタイムアウトするまで有効であり、すべてのユーザー間で情報を共有して保持する。"
        ],
        "answer": 0,
        "explanation": "セッションスコープは、特定のユーザーがブラウザを起動してから閉じる（または一定時間経過でタイムアウトする）までの間、ユーザー固有の情報をサーバー側で保持し続ける仕組みです。",
        "category": "Spring"
    },
    {
        "id": 125,
        "question": "【addAttributeの正しい役割】\naddAttributeメソッドの役割に関する説明として正しいものを選べ。",
        "options": [
            "コントローラ側から、ビュー（画面）へ表示したいデータを渡すためのものである。",
            "ビュー（画面）側で入力されたデータを、コントローラ側で受け取るためのものである。",
            "コントローラ側から、セッションスコープへデータを長期間保存するためのものである。",
            "アプリケーション全体で共有する設定情報を、サーバー起動時に登録するためのものである。"
        ],
        "answer": 0,
        "explanation": "ModelのaddAttributeメソッドは、コントローラ側で用意したデータ（文字列やオブジェクトなど）をビュー（画面・HTML）に渡して表示させるために使用されます。",
        "category": "Spring"
    },
    {
        "id": 126,
        "question": "【セッションスコープの値をビュー（画面）に表示する書き方】\nテンプレートエンジンにおいて、セッションスコープに保存されたキー名「userName」の値を画面に表示する記述として正しいものを選べ。",
        "options": [
            "${session.userName} のように、頭に「session」をつけて指定する。",
            "${userName.session} のように、末尾に「session」をつけて指定する。",
            "${request.userName} のように、頭に「request」をつけて指定する。",
            "${application.userName} のように、頭に「application」をつけて指定する。"
        ],
        "answer": 0,
        "explanation": "Thymeleafなどのテンプレートエンジンでセッションスコープの値を表示する場合、明示的に「session.」というプレフィックスを付けるのが一般的な記述方法です。",
        "category": "Spring"
    },
    {
        "id": 127,
        "question": "【セッションタイムアウトとは】\nセッションタイムアウトが行われる目的として正しいものを選べ。",
        "options": [
            "他人の不正操作の防止（セキュリティ）と、サーバーのメモリを節約するため。",
            "他人の不正操作の防止（セキュリティ）と、クライアントのメモリを節約するため。",
            "処理にかかる時間を制限し、ネットワークの通信量を節約するため。",
            "古くなった情報を破棄し、最新の画面デザインを強制的に再読み込みさせるため。"
        ],
        "answer": 0,
        "explanation": "セッションタイムアウトは、長時間操作がない場合に自動でセッションを破棄する仕組みです。他人が操作を引き継ぐ不正利用を防ぎ、同時にサーバーのメモリを解放する目的があります。",
        "category": "Spring"
    },
    {
        "id": 128,
        "question": "【JPA】\nJPAに関する説明として誤っているものを選べ。",
        "options": [
            "JPAはJavaとデータベースの間の操作を抽象化する仕様であり、SQLを直接書かずにオブジェクト操作でDBを扱える。",
            "JPAはあくまでインターフェース（仕様）であり、実際の動作にはHibernateなどの実装ライブラリが必要である。",
            "JPAを使用するとJavaのオブジェクトとDBのテーブルを自動的に対応付けることができる。",
            "JPAはSpring Frameworkにのみ対応した専用の仕様であり、Spring以外のJavaアプリケーションでは使用できない。"
        ],
        "answer": 3,
        "explanation": "JPA（Java Persistence API）はJavaの標準仕様であり、Spring専用ではありません。他のフレームワークやプレーンなJavaアプリケーションでもHibernateなどの実装を用意すれば使用可能です。",
        "category": "Spring"
    },
    {
        "id": 129,
        "question": "【エンティティ】\nエンティティの用途として正しいものを選べ。",
        "options": [
            "データベースのテーブル1行分のデータを表すJavaクラスとして使用する。",
            "ユーザーからのHTTPリクエストパラメータを受け取るための専用クラスとして使用する。",
            "データベースへのSQL発行処理をまとめて管理するための専用クラスとして使用する。",
            "アプリケーション全体で共通利用される定数値を一元管理するためのクラスとして使用する。"
        ],
        "answer": 0,
        "explanation": "エンティティクラスは、データベースのテーブルの構造と1対1で対応づけられ、テーブルの「1行分のデータ」を表現し格納するためのオブジェクトとして使用されます。",
        "category": "Spring"
    },
    {
        "id": 130,
        "question": "【エンティティ・@Id】\nエンティティのフィールド内の @Id が付与されたフィールドとして正しいものを選べ。",
        "options": [
            "そのエンティティクラスが対応するデータベーステーブルの主キー列を表すフィールドである。",
            "そのフィールドがデータベースに保存されない一時的な値であることを示すフィールドである。",
            "そのフィールドが外部テーブルとの結合に使用される外部キー列を表すフィールドである。",
            "そのエンティティ内で最初に定義された、インデックスが自動付与されるフィールドである。"
        ],
        "answer": 0,
        "explanation": "@Idアノテーションが付与されたフィールドは、そのテーブルの「主キー（Primary Key）」であることを示します。データベース上の行を一意に特定するために必須となります。",
        "category": "Spring"
    },
    {
        "id": 131,
        "question": "【CREATE USER文】\n次のうち、ユーザ「user01」をパスワード「pass01」で作成する正しいSQL文はどれか。",
        "options": [
            "MAKE USER user01 PASSWORD pass01;",
            "CREATE USER user01 IDENTIFIED BY pass01;",
            "CREATE USER user01 PASSWORD = 'pass01';",
            "ADD USER user01 IDENTIFIED BY pass01;"
        ],
        "answer": 1,
        "explanation": "Oracleでは CREATE USER ユーザ名 IDENTIFIED BY パスワード; が正しい構文です。  \n- A・D は実在しない構文です。  \n- C は他のDBMS（MySQL等）風の書き方であり、Oracleでは誤りです。",
        "category": "総合問題"
    },
    {
        "id": 132,
        "question": "【GRANT文】\nユーザ「user01」に表「products」に対するSELECT権限を付与するSQL文として正しいものはどれか。",
        "options": [
            "GRANT SELECT TO products ON user01;",
            "GIVE SELECT ON products TO user01;",
            "GRANT SELECT ON products TO user01;",
            "ALLOW SELECT ON products FOR user01;"
        ],
        "answer": 2,
        "explanation": "Oracleの権限付与構文は GRANT 権限 ON オブジェクト TO ユーザ; です。  \n- A は TO と ON の順序が逆です。  \n- B・D は実在しない構文（GIVE / ALLOW）です。",
        "category": "総合問題"
    },
    {
        "id": 133,
        "question": "【DROP USER文（CASCADE）】\nユーザ「user01」と、そのユーザが所有するすべてのオブジェクトを削除するSQL文として正しいものはどれか。",
        "options": [
            "DROP USER user01;",
            "DELETE USER user01 CASCADE;",
            "REMOVE USER user01 WITH OBJECTS;",
            "DROP USER user01 CASCADE;"
        ],
        "answer": 3,
        "explanation": "ユーザが所持するオブジェクトごと削除するには DROP USER ユーザ名 CASCADE; を使用します。  \n- A は CASCADE がないため、オブジェクトを持つユーザを削除しようとするとエラーになります。  \n- B・C は実在しない構文です。",
        "category": "総合問題"
    },
    {
        "id": 134,
        "question": "【NOT NULL制約】\n列「name」に対してNOT NULL制約を設定する正しい記述はどれか。",
        "options": [
            "name VARCHAR2(50) NULL;",
            "name VARCHAR2(50) NOT NULL;",
            "name VARCHAR2(50) REQUIRED;",
            "name VARCHAR2(50) UNIQUE;"
        ],
        "answer": 1,
        "explanation": "列定義において NOT NULL を記述することでNULLを禁止できます。  \n- A の NULL は明示的にNULLを許可しており逆の意味です。  \n- C の REQUIRED は実在しません。  \n- D の UNIQUE は一意制約であり、NULLの禁止とは別です。",
        "category": "総合問題"
    },
    {
        "id": 135,
        "question": "【ALTER TABLE（列の削除）】\n表「employees」から列「bonus」を削除するSQL文として正しいものはどれか。",
        "options": [
            "ALTER TABLE employees REMOVE COLUMN bonus;",
            "ALTER TABLE employees DELETE bonus;",
            "ALTER TABLE employees DROP COLUMN bonus;",
            "UPDATE TABLE employees DROP bonus;"
        ],
        "answer": 2,
        "explanation": "列を削除するには ALTER TABLE テーブル名 DROP COLUMN 列名; を使用します。  \n- A の REMOVE COLUMN は実在しない構文です。  \n- B の DELETE は行削除用の命令であり列には使えません。  \n- D の UPDATE TABLE は実在しない構文です。",
        "category": "総合問題"
    },
    {
        "id": 136,
        "question": "【外部キー制約（表制約の記述）】\n表「orders」に、「customers」表の「customer_id」を参照する外部キー制約を表制約として記述した正しいSQL文はどれか。",
        "options": [
            "FOREIGN KEY (customer_id) REFERENCES customers;",
            "CONSTRAINT fk_cust FOREIGN KEY (customer_id) REFERENCES customers(customer_id)",
            "REFERENCES customers(customer_id) FOREIGN KEY (customer_id)`",
            "customer_id FOREIGN KEY REFERENCES customers(customer_id)"
        ],
        "answer": 1,
        "explanation": "表制約として外部キーを定義する場合は CONSTRAINT 制約名 FOREIGN KEY (列名) REFERENCES 参照先テーブル(列名) と記述します。  \n- A は CONSTRAINT 名や参照先の列指定が欠けています。  \n- C・D は構文の順序や記述が誤っています。",
        "category": "総合問題"
    },
    {
        "id": 137,
        "question": "【WHERE句を含むSELECT文】\n次のテーブル「emp」がある。\n| emp_id | name   | dept_id |\n|--------|--------|---------|\n| 1      | 田中   | 10      |\n| 2      | 鈴木   | 20      |\n| 3      | 佐藤   | 10      |\nSELECT name FROM emp WHERE dept_id = 10; の結果として正しいものはどれか。",
        "options": [
            "田中、鈴木、佐藤の3行が返る",
            "鈴木の1行が返る",
            "田中、佐藤の2行が返る",
            "結果は0行（エラー）"
        ],
        "answer": 2,
        "explanation": "WHERE dept_id = 10 の条件に一致するのは田中（dept_id=10）と佐藤（dept_id=10）の2行です。  \n鈴木は dept_id=20 なので対象外です。",
        "category": "総合問題"
    },
    {
        "id": 138,
        "question": "【DISTINCTキーワード】\n次のテーブル「emp」の「dept_id」を重複なく取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT dept_id FROM emp GROUP DISTINCT;",
            "SELECT UNIQUE dept_id FROM emp;",
            "SELECT DISTINCT dept_id FROM emp;",
            "SELECT dept_id DISTINCT FROM emp;"
        ],
        "answer": 2,
        "explanation": "重複を除いて取得するには SELECT DISTINCT 列名 FROM テーブル; を使用します。  \n- B の UNIQUE はOracleでは列制約の用法で、SELECTでの重複除去には使用しません。  \n- D は DISTINCT の配置が誤りです。",
        "category": "総合問題"
    },
    {
        "id": 139,
        "question": "【AS（別名指定）】\n列「salary」を「給与」という別名で取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT salary NAME 給与 FROM emp;",
            "SELECT salary AS 給与 FROM emp;",
            "SELECT salary = 給与 FROM emp;",
            "SELECT salary RENAME 給与 FROM emp;"
        ],
        "answer": 1,
        "explanation": "列に別名を付けるには 列名 AS 別名 または 列名 別名（ASを省略可）と記述します。  \n- A の NAME は実在しない構文です。  \n- C の = は代入演算子であり別名指定には使えません。  \n- D の RENAME は実在しません。",
        "category": "総合問題"
    },
    {
        "id": 140,
        "question": "【INSERT文（値の指定数間違い）】\n次のテーブル「emp」（列：emp_id, name, dept_id の3列）への挿入文で、エラーとなるものはどれか。",
        "options": [
            "INSERT INTO emp VALUES (4, '山田', 30);",
            "INSERT INTO emp (emp_id, name) VALUES (4, '山田');",
            "INSERT INTO emp VALUES (4, '山田');",
            "INSERT INTO emp (emp_id) VALUES (4);"
        ],
        "answer": 2,
        "explanation": "列を省略した VALUES 句では、テーブルの全列分の値を指定する必要があります。  \n3列あるのに2値しか指定していないCはエラーになります。  \n- B・D は挿入する列名を明示しているため問題ありません（NOT NULL制約がなければ）。",
        "category": "総合問題"
    },
    {
        "id": 141,
        "question": "【UPDATE文（WHERE句を含む）】\nemp_id が 2 の従業員の dept_id を 30 に更新する正しいSQL文はどれか。",
        "options": [
            "UPDATE emp SET dept_id = 30;",
            "UPDATE emp SET dept_id = 30 WHERE emp_id = 2;",
            "MODIFY emp SET dept_id = 30 WHERE emp_id = 2;",
            "UPDATE emp dept_id = 30 WHERE emp_id = 2;"
        ],
        "answer": 1,
        "explanation": "UPDATE テーブル名 SET 列名 = 値 WHERE 条件; が正しい構文です。  \n- A は WHERE句がないため全行が更新されます（正しいSQL文ですが問題で求めるSQL文ではありません）。  \n- C の MODIFY は他のDBMSの構文であり実在しません。  \n- D は SET キーワードが抜けているためエラーです。",
        "category": "総合問題"
    },
    {
        "id": 142,
        "question": "【WHERE句なしのDELETE文】\n次のSQL文を実行した場合の動作として正しいものはどれか。\nDELETE FROM emp;",
        "options": [
            "構文エラーが発生する",
            "emp_id が 1 の行のみ削除される",
            "表「emp」のすべての行が削除される",
            "表「emp」自体が削除される"
        ],
        "answer": 2,
        "explanation": "DELETE FROM テーブル名; はWHERE句がないため、テーブル内のすべての行を削除します。  \n- A は正しい構文であるためエラーにはなりません。  \n- D はテーブル本体を削除する DROP TABLE の動作です。DELETE は行の削除のみです。",
        "category": "総合問題"
    },
    {
        "id": 143,
        "question": "【COMMIT文の忘れ】\nトランザクションでUPDATE文を実行後、COMMIT文を実行せずにセッションを終了した場合の動作として正しいものはどれか。",
        "options": [
            "更新内容は自動的にコミットされる",
            "更新内容はロールバックされ、変更が破棄される",
            "SQLエラーが発生し、データベースが停止する",
            "次回ログイン時に更新が再実行される"
        ],
        "answer": 1,
        "explanation": "トランザクション中にCOMMITせずにセッションを終了すると、データベースは自動的にROLLBACKを行い、変更は破棄されます。  \n- A は自動コミット設定が有効な場合ですが、通常のOracleセッションでは手動COMMITが必要です。  \n- C・D は実際には起こりません。",
        "category": "総合問題"
    },
    {
        "id": 144,
        "question": "【UPDATE文とCOMMITのタイミングによるSELECT結果】\nセッションAが以下を実行した（まだCOMMITしていない）。セッションBが同じ表を SELECT した場合、セッションBが見るデータとして正しいものはどれか。\n-- セッションA\nUPDATE emp SET dept_id = 99 WHERE emp_id = 1;\n-- (COMMITなし)",
        "options": [
            "セッションBは dept_id = 99 の変更済みデータを参照できる",
            "セッションBはコミット前のデータ（変更前）を参照する",
            "セッションBはエラーが発生し参照できない",
            "セッションBのSELECTはロックされ永遠に待機する"
        ],
        "answer": 1,
        "explanation": "Oracleは 読み取り一貫性（Read Consistency) を保証しており、コミットされていないデータは他のセッションから参照できません。セッションBはコミット前の元のデータを参照します。  \n- A はコミット前なので誤りです。  \n- D はSELECT文のみではロック待ちになりません（DML文がロックを保持しているが、SELECT自体はMVCC機構により待機しません）。",
        "category": "総合問題"
    },
    {
        "id": 145,
        "question": "【SAVEPOINTを含むSQL文の動作】\n以下のSQL文を実行した場合、最終的に残るデータとして正しいものはどれか。\nINSERT INTO emp VALUES (5, '木村', 10);\nSAVEPOINT sp1;\nINSERT INTO emp VALUES (6, '松本', 20);\nROLLBACK TO SAVEPOINT sp1;\nCOMMIT;",
        "options": [
            "emp_id = 5 と emp_id = 6 の両行が残る",
            "emp_id = 5 の行のみ残る",
            "emp_id = 6 の行のみ残る",
            "どちらの行も残らない"
        ],
        "answer": 1,
        "explanation": "ROLLBACK TO SAVEPOINT sp1; により、SAVEPOINTより後の操作（emp_id=6のINSERT）が取り消されます。  \nその後 COMMIT; により sp1 以前のデータ（emp_id=5のINSERT）が確定します。  \n結果として emp_id=5 の行のみが残ります。",
        "category": "総合問題"
    },
    {
        "id": 146,
        "question": "【算術演算子（＋の利用）】\n表「emp」に salary（数値型）列がある。全員の salary に 10000 を加算した値を取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT salary & 10000 FROM emp;",
            "SELECT salary ADD 10000 FROM emp;",
            "SELECT salary + 10000 FROM emp;",
            "SELECT salary PLUS 10000 FROM emp;"
        ],
        "answer": 2,
        "explanation": "SQLでは一般的な算術演算子（+, -, *, /）がそのまま使用できます。  \n- salary + 10000 は salary に 10000 を加算した値を返します。  \n- A・B・D は実在しない演算子です。",
        "category": "総合問題"
    },
    {
        "id": 147,
        "question": "【述語INのORへの書き換え】\n次のSQL文と同じ結果を返すSQL文はどれか。\nSELECT * FROM emp WHERE dept_id IN (10, 20, 30);",
        "options": [
            "SELECT * FROM emp WHERE dept_id = 10 AND dept_id = 20 AND dept_id = 30;",
            "SELECT * FROM emp WHERE dept_id = 10 OR dept_id = 20 OR dept_id = 30;",
            "SELECT * FROM emp WHERE dept_id BETWEEN 10 AND 30;",
            "SELECT * FROM emp WHERE dept_id != 10 OR dept_id != 20;"
        ],
        "answer": 1,
        "explanation": "IN (10, 20, 30) は = 10 OR = 20 OR = 30 と同義です。  \n- A の AND では、1列が同時に複数の値になることはないため常に0行となります。  \n- C の BETWEEN 10 AND 30` は10〜30の範囲すべてを含むため意味が異なります。",
        "category": "総合問題"
    },
    {
        "id": 148,
        "question": "【IS NOT NULLとLIKEの条件指定】\nname列がNULLでなく、かつ「田」で始まる従業員を取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT * FROM emp WHERE name IS NOT NULL AND name LIKE '田%';",
            "SELECT * FROM emp WHERE name != NULL AND name = '田%';",
            "SELECT * FROM emp WHERE name IS NOT NULL OR name LIKE '田%';",
            "SELECT * FROM emp WHERE name NOT NULL AND name LIKE '%田';"
        ],
        "answer": 0,
        "explanation": "NULLの判定には IS NOT NULL を使用し、部分一致には LIKE '田%'（前方一致）を使用します。  \n- B は != NULL が無効（NULLの比較はIS NULLを使う）で、= '田%' はLIKEなしでは文字通りの等値比較です。  \n- C は AND ではなく OR のため条件が緩くなります。  \n- D の NOT NULL は制約構文であり WHERE 句では使えません。",
        "category": "総合問題"
    },
    {
        "id": 149,
        "question": "【集約関数 COUNT】\n表「emp」の全件数を取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT TOTAL(*) FROM emp;",
            "SELECT COUNT(1) FROM emp;",
            "SELECT NUMBER(*) FROM emp;",
            "SELECT SUM(*) FROM emp;"
        ],
        "answer": 1,
        "explanation": "COUNT(*) または COUNT(1) で全行数を取得できます。  \n- A の TOTAL は存在しません。  \n- C の NUMBER は存在しません。  \n- D の SUM(*) は数値列以外には使えず、全行数の取得には使いません。",
        "category": "総合問題"
    },
    {
        "id": 150,
        "question": "【集約関数SUM・GROUP BY句】\n次のSQL文の実行結果として正しい説明はどれか。\nSELECT dept_id, SUM(salary) FROM emp GROUP BY dept_id;",
        "options": [
            "全従業員の給与合計を1行で返す",
            "部門ごとに給与合計を集計して返す",
            "給与が最も高い従業員を部門ごとに返す",
            "構文エラーとなる"
        ],
        "answer": 1,
        "explanation": "GROUP BY dept_id により部門単位でグループ化され、各部門の SUM(salary) がそれぞれ返されます。  \n- A は GROUP BY がない場合の動作です。  \n- C は MAX や MIN の説明に近く誤りです。  \n- D は正しい構文であるためエラーにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 151,
        "question": "【集約関数・GROUP BY・HAVING句】\n部門ごとの平均給与が300000以上の部門とその平均給与を取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT dept_id, AVG(salary) FROM emp WHERE AVG(salary) >= 300000 GROUP BY dept_id;",
            "SELECT dept_id, AVG(salary) FROM emp GROUP BY dept_id WHERE AVG(salary) >= 300000;",
            "SELECT dept_id, AVG(salary) FROM emp GROUP BY dept_id HAVING AVG(salary) >= 300000;",
            "SELECT dept_id, AVG(salary) FROM emp HAVING AVG(salary) >= 300000;"
        ],
        "answer": 2,
        "explanation": "グループ化後の集約条件には HAVING 句を使用します。WHERE 句では集約関数は使用できません。  \n- A は WHERE 句に AVG() を使っておりエラーになります。  \n- B は WHERE と GROUP BY の順序が逆でエラーになります。  \n- D は GROUP BY がなくエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 152,
        "question": "【結合（テーブル指定の記述ミス）】\n「emp」表と「dept」表を emp.dept_id = dept.dept_id で内部結合するSQL文で、テーブル指定が抜けているためエラーになるものはどれか。",
        "options": [
            "SELECT e.name, d.dept_name FROM emp e INNER JOIN dept d ON e.dept_id = d.dept_id;",
            "SELECT e.name, d.dept_name FROM emp e, dept d WHERE e.dept_id = d.dept_id;",
            "SELECT e.name, d.dept_name FROM emp e INNER JOIN ON e.dept_id = d.dept_id;",
            "SELECT e.name, d.dept_name FROM emp e JOIN dept d ON e.dept_id = d.dept_id;"
        ],
        "answer": 2,
        "explanation": "INNER JOIN ON ... と書いた場合、JOIN のあとに結合対象テーブル名（dept d）が必要ですが抜けているためエラーになります。  \n- A・B・D は文法的に正しい記述です。",
        "category": "総合問題"
    },
    {
        "id": 153,
        "question": "【左外部結合の実行結果（レコード数）】\n「emp」表（3行）と「dept」表（2行）を LEFT OUTER JOIN した場合、結果のレコード数として正しいものはどれか（empの一部のdept_idがdeptに存在しない場合）。",
        "options": [
            "結合に成功した行のみ返るため、最大2行",
            "empのすべての行が返るため、3行",
            "両表の組み合わせで最大6行",
            "dept_idが一致しない行はエラーになる"
        ],
        "answer": 1,
        "explanation": "LEFT OUTER JOIN は左テーブル（empの全行）を基準に結合します。dept に一致する行がなくてもNULLとして返されます。よってempの行数分（3行）が必ず返ります。  \n- A は INNER JOIN の特性です。  \n- C は クロス結合の特性です。  \n- D は外部結合においてエラーにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 154,
        "question": "【左外部結合の正しいSQL文】\n「emp」表を基準に「dept」表を左外部結合する正しいSQL文はどれか。",
        "options": [
            "SELECT * FROM emp RIGHT OUTER JOIN dept ON emp.dept_id = dept.dept_id;",
            "SELECT * FROM emp LEFT OUTER JOIN dept ON emp.dept_id = dept.dept_id;",
            "SELECT * FROM emp LEFT INNER JOIN dept ON emp.dept_id = dept.dept_id;",
            "SELECT * FROM emp OUTER JOIN dept ON emp.dept_id = dept.dept_id;"
        ],
        "answer": 1,
        "explanation": "LEFT OUTER JOIN はFROM句の左側（emp）を基準とした外部結合です。右テーブル（dept）に一致がなくてもempはすべて残ります。  \n- A の RIGHT OUTER JOIN は dept を基準にするため逆になります。  \n- C の LEFT INNER JOIN は存在しません。  \n- D の OUTER JOIN 単体は構文として不完全です（LEFT または RIGHT が必要）。",
        "category": "総合問題"
    },
    {
        "id": 155,
        "question": "【サブクエリ（実行結果を得るための記述）】\n「salary」が全体の平均給与より高い従業員の名前を取得するSQL文として正しいものはどれか。",
        "options": [
            "SELECT name FROM emp WHERE salary > AVG(salary);",
            "SELECT name FROM emp WHERE salary > (SELECT AVG(salary) FROM emp);",
            "SELECT name FROM emp HAVING salary > AVG(salary);",
            "SELECT name FROM emp WHERE salary > (AVG(salary) FROM emp);"
        ],
        "answer": 1,
        "explanation": "WHERE 句の条件値にサブクエリを使用するには (SELECT AVG(salary) FROM emp) のように括弧で囲みます。  \n- A は WHERE 句に集約関数を直接使えないためエラーです。  \n- C は HAVING 句は GROUP BY とセットで使うためこの文脈では誤りです。  \n- D は括弧内の構文が誤りです（SELECT句が必要）。",
        "category": "総合問題"
    },
    {
        "id": 156,
        "question": "【WHERE句でのスカラ・サブクエリ】\n次のSQL文でスカラ・サブクエリとして正しく機能するものはどれか。",
        "options": [
            "SELECT name FROM emp WHERE dept_id = (SELECT dept_id FROM dept WHERE dept_name = '営業');",
            "SELECT name FROM emp WHERE dept_id = (SELECT dept_id FROM dept);",
            "SELECT name FROM emp WHERE dept_id = (SELECT dept_id, dept_name FROM dept WHERE dept_name = '営業');",
            "SELECT name FROM emp WHERE dept_id IN (SELECT dept_id FROM dept WHERE dept_name = '営業');（※複数行返る可能性がある）"
        ],
        "answer": 0,
        "explanation": "スカラ・サブクエリは「必ず1行1列を返す」サブクエリです。dept_name='営業' の dept_id が1件だけ取得される場合に正しく機能します。  \n- B は dept テーブル全件を返す可能性があり、スカラにならないためエラーになる可能性があります。  \n- C は2列返すためスカラではなくエラーになります。  \n- D は IN を使っており、複数行返る可能性があるためスカラ・サブクエリの文脈では正確ではありません（構文的には正しい別の書き方です）。",
        "category": "総合問題"
    },
    {
        "id": 157,
        "question": "【スカラ・サブクエリにならない記述】\n次のうち、スカラ・サブクエリにならない（スカラ値を返さない）記述はどれか。",
        "options": [
            "(SELECT MAX(salary) FROM emp)",
            "(SELECT AVG(salary) FROM emp)",
            "(SELECT salary FROM emp WHERE emp_id = 1)",
            "(SELECT salary FROM emp WHERE dept_id = 10)"
        ],
        "answer": 3,
        "explanation": "スカラ・サブクエリとは「常に1行1列を返す」サブクエリです。  \n- A：MAX は必ず1行返すのでスカラです。  \n- B：AVG も必ず1行返すのでスカラです。  \n- C：emp_id は主キーのため1行しか返らずスカラです。  \n- D：dept_id=10 に属する従業員が複数いる場合、複数行返るためスカラにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 158,
        "question": "【CREATE USER文】\nユーザ名が testuser、パスワードが system のユーザを作成したい。実行する SQL 文として正しいものはどれか。",
        "options": [
            "CREATE USER system MAKEDNAME BY testuser;",
            "CREATE USER testuser IDENTIFIED BY system;",
            "CREATE USER testuser SET PASSWORD system;",
            "CREATE PASSWORD system USERNAME testuser;"
        ],
        "answer": 1,
        "explanation": "Oracleでユーザを作成しパスワードを設定する正しい構文は CREATE USER ユーザ名 IDENTIFIED BY パスワード; です。  \n- Bが正解です。  \n- A・C・D は実在しない構文または他のDBMSの構文です。",
        "category": "総合問題"
    },
    {
        "id": 159,
        "question": "【GRANT文】\nユーザ scott に、「CREATE TABLE」という権限を割り当てたい。実行する SQL 文として正しいものはどれか。なお、「CREATE TABLE」は表を作成できる権限です。",
        "options": [
            "CREATE ROLE CREATE TABLE IDENTIFIED BY scott;",
            "GRANT CREATE TABLE TO scott;",
            "SET ROLE CREATE TABLE TO scott;",
            "REVOKE CREATE TABLE FROM scott;"
        ],
        "answer": 1,
        "explanation": "権限をユーザに付与する正しい構文は GRANT 権限 TO ユーザ; です。  \n- Bが正解です。  \n- A・C は構文が誤っています。  \n- D の REVOKE は権限を剥奪する際の構文です。",
        "category": "総合問題"
    },
    {
        "id": 160,
        "question": "【DROP USER文（CASCADE）】\nユーザ taro のスキーマにはテーブルやビュー等のオブジェクトが保存されているとする。\nこれらも含めてまとめてユーザ taro を削除する場合に正しい SQL はどれか。",
        "options": [
            "DROP TABLE taro;",
            "DROP USER taro CASCADE;",
            "DROP USER taro;",
            "DROP TABLE taro CASCADE;"
        ],
        "answer": 1,
        "explanation": "オブジェクトを所有しているユーザを削除するには DROP USER ユーザ名 CASCADE; を使用して、所有しているオブジェクトもまとめて削除する必要があります。  \n- Bが正解です。  \n- C の CASCADE なしの DROP USER では、オブジェクトが存在するためエラーになります。  \n- A・D の DROP TABLE はテーブルを削除する構文です。",
        "category": "総合問題"
    },
    {
        "id": 161,
        "question": "【NOT NULL制約】\n下記のSQLを実行してstudentsテーブルを作成したい。gender列にある下線部に、必ず値を入れるための制約を記述する場合、正しい制約はどれか。\nCREATE TABLE students (\nid NUMBER(5) PRIMARY KEY ,\nname VARCHAR2(10) ,\nage NUMBER(2),\ngender NUMBER(1) ________ ,\nbirthday DATE\n);",
        "options": [
            "PRIMARY KEY",
            "NOT NULL",
            "UNIQUE",
            "FOREIGN KEY"
        ],
        "answer": 1,
        "explanation": "「必ず値を入れる（NULLを許可しない）」ための制約は NOT NULL 制約です。  \n- Bが正解です。  \n- A の PRIMARY KEY は主キー制約（一意かつNOT NULL）ですが、ここではgender列に対する単一の必須入力要件を満たす NOT NULL が適切です。  \n- C の UNIQUE は一意制約です。  \n- D の FOREIGN KEY は外部キー制約です。",
        "category": "総合問題"
    },
    {
        "id": 162,
        "question": "【ALTER TABLE（列の削除）】\nemp テーブルの address 列を削除したい。Oracle で実行可能な正しい SQL 文はどれか。",
        "options": [
            "MODIFY TABLE address DROP(emp);",
            "ADD TABLE address FROM(emp);",
            "DROP TABLE emp FROM(address);",
            "ALTER TABLE emp DROP COLUMN address;"
        ],
        "answer": 3,
        "explanation": "表から列を削除する正しい構文は ALTER TABLE テーブル名 DROP COLUMN 列名; です。  \n- Dが正解です。  \n- A・B・C は実在しない構文です。",
        "category": "総合問題"
    },
    {
        "id": 163,
        "question": "【DISTINCTキーワード】\n(前問と同じempテーブルに対し)\n「deptno」が「30」の従業員のJOB列を重複なく取得し以下のとおり結果を出力したい。実行するSQL文として正しいものはどれか。\nJOB\n---------\nSALESMAN\nCLERK\nMANAGER",
        "options": [
            "DISTINCT SELECT job FROM emp WHERE deptno = 30;",
            "SELECT job DISTINCT FROM emp WHERE deptno = 30;",
            "SELECT DISTINCT job FROM emp WHERE deptno = 30;",
            "SELECT job FROM emp DISTINCT WHERE deptno = 30;"
        ],
        "answer": 2,
        "explanation": "重複を除いて取得するには SELECT の直後に DISTINCT を記述します。  \n- C の SELECT DISTINCT 列名 FROM ... が正しい構文です。  \n- A・B・D は DISTINCT の記述位置が誤っているため構文エラーになります。",
        "category": "総合問題"
    },
    {
        "id": 164,
        "question": "【AS（別名指定）とダブルクォーテーション】\nSQL> SELECT * FROM students;\nID NAME       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       15  1      95-12-05\n2  Jiro       16  1      94-09-10\n3  Hanako     15  2      95-06-08\n上記のstudentsテーブルに対し、以下の結果が出力される文を選択しなさい。\n※Oracleでは、日本語の列別名を付ける場合にダブルクオーテーションを使用する。（\"）\nID 氏名       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       15  1      95-12-05\n2  Jiro       16  1      94-09-10\n3  Hanako     15  2      95-06-08",
        "options": [
            "SELECT *, name AS \"氏名\" FROM students;",
            "SELECT id, name AS \"氏名\", age , gender, birthday FROM students;",
            "SELECT name AS \"氏名\", id, age, gender, birthday FROM students;",
            "SELECT id, age, name AS \"氏名\", gender, birthday FROM students;"
        ],
        "answer": 1,
        "explanation": "出力結果を見ると id, name(氏名), age, gender, birthday の順に表示されています。  \n- この並び順通りに SELECT 句で列を指定しているBが正解です。  \n- C・D は列の順序が出力結果と異なります。  \n- A の * と他の列を混在させる書き方は、テーブル名の修飾が必要なためエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 165,
        "question": "【INSERT文（列と値の数が不一致）】\nitemsテーブルに対して、下記のSQL文でレコードの登録を行いたい。想定される結果として正しいものはどれか。\nINSERT INTO items(id, name, category) VALUES(1, 'book', 3, 3);\nなお、itemsのテーブル定義は下記内容であり、itemsテーブルにはまだ1レコードも登録されていないとする。\n列名        型            制約\n---------   ------------- ------------\nid          NUMBER(5)     PRIMARY KEY\nname        VARCHAR2(10)\ncategory    NUMBER(2)\nstock       NUMBER(5)",
        "options": [
            "レコードが登録され、stock列には3が登録される。",
            "レコードが登録され、stock列には0が登録される。",
            "レコードが登録され、stock列にはnullが登録される。",
            "実行時にエラーが発生する。"
        ],
        "answer": 3,
        "explanation": "INSERT文で指定した列数（id, name, category の3つ）に対して、VALUES句で指定した値の数（1, 'book', 3, 3 の4つ）が一致していません。  \n- 列数と値の数が異なるため、Dの「実行時にエラーが発生する」が正解です。",
        "category": "総合問題"
    },
    {
        "id": 166,
        "question": "【UPDATE文（複数列の更新）】\nempテーブル中でempno列が8000のレコードに対して、下記内容に更新したい。実行するSQL 文として正しいものはどれか。\n更新対象の列名 更新後の値\n------------- -----------\ndeptno        10\nsal           3000",
        "options": [
            "UPDATE emp SET deptno = 10 AND sal = 3000 WHERE empno = 8000;",
            "UPDATE emp SET VALUES(deptno = 10, sal = 3000) WHERE empno = 8000;",
            "UPDATE emp SET deptno = 10, sal = 3000 WHERE empno = 8000;",
            "UPDATE emp SET deptno = 10, sal = 3000, empno= 8000;"
        ],
        "answer": 2,
        "explanation": "UPDATE文で複数の列を更新する場合は、SET 列1 = 値1, 列2 = 値2 のようにカンマで区切ります。  \n- Cが正しい構文です。  \n- A の AND はWHERE句の条件結合用でありSET句では使えません。  \n- B の VALUES はINSERT文の構文です。  \n- D は WHERE 句の指定がなく、empno の更新が含まれてしまっています。",
        "category": "総合問題"
    },
    {
        "id": 167,
        "question": "【WHERE句なしのDELETE文】\nSQL> SELECT * FROM students;\nID NAME       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       15  1      95-12-05\n2  Jiro       16  1      94-09-10\n3  Hanako     15  2      95-06-08\n上記のstudentsテーブルに対して、下記のようにWHERE句を付けずにDELETE文を実行した。\nこのとき、実行結果として正しいものはどれか。\nSQL> DELETE FROM students;",
        "options": [
            "レコードが1行削除される。",
            "レコードが全行削除される。",
            "studentsテーブルとその中のレコードが全行削除される。",
            "実行時にエラーが発生する。"
        ],
        "answer": 1,
        "explanation": "DELETE文にWHERE句を指定しない場合、テーブル内のすべてのレコード（行）が削除されます。  \n- Bが正解です。  \n- C のテーブル自体の削除は DROP TABLE の動作です。",
        "category": "総合問題"
    },
    {
        "id": 168,
        "question": "【トランザクションとCOMMIT】\nあなたはOracle Databaseを使用したデータベースの運用業務を行っている。あなたは業務指示により、レコード数0行のitemsテーブルに対して下記のSQL文2行を正常に実行した後、作業完了と判断して別の業務に移った。\nINSERT INTO items VALUES(1, 'apple', 1, 20);\nINSERT INTO items VALUES(2, 'orange', 1, 30);\nその後、他のメンバーから作業が完了していないとの指摘を受けた。\nOracle Databaseの仕様上の観点で、最も正しい理由はどれか。\nなお、対象のデータベースのトランザクションに関する設定はデフォルト状態だとする。",
        "options": [
            "実行後にデータベースとの接続を切っていなかったから。",
            "実行後にデータベースを再起動していなかったから。",
            "実行後にSELECT文を実行していなかったから。",
            "実行後にCOMMIT文を実行していなかったから。"
        ],
        "answer": 3,
        "explanation": "INSERT等のDML文を実行しただけでは、変更は確定されておらず他のユーザからは見えません。  \n- 変更をデータベースに確定させ、他のユーザからも参照できるようにするには COMMIT 文を実行する必要があります。したがってDが正解です。",
        "category": "総合問題"
    },
    {
        "id": 169,
        "question": "【読取一貫性】\nSQL> SELECT * FROM students;\nID NAME       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       15  1      95-12-05\n2  Jiro       16  1      94-09-10\n3  Hanako     15  2      95-06-08\n上記のstudentsテーブルに対して、1人目のデータベース利用者が下記のSQL文を実行した。\nSQL> UPDATE students SET age = 18;\n同じタイミングで2人目のデータベース利用者が下記のSQL文を実行した。このとき、2人目のデータベース利用者側での実行結果として正しいものはどれか。\nSQL> SELECT * FROM students;\n- B.\nID NAME       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       18  1      95-12-05\n2  Jiro       18  1      94-09-10\n3  Hanako     18  2      95-06-08\n- C.\nID NAME       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       15  1      95-12-05\n2  Jiro       16  1      94-09-10\n3  Hanako     15  2      95-06-08",
        "options": [
            "1人目のデータベース利用者がトランザクションを終了させるまで、実行待ち状態となる。",
            "実行時にエラーが発生する。"
        ],
        "answer": 2,
        "explanation": "Oracleでは 読み取り一貫性 が保証されており、他のユーザが変更中でまだ COMMIT されていないデータは、変更前の状態で参照されます。  \n- 2人目のSELECT結果は変更前のデータが返るため、Cが正解です。",
        "category": "総合問題"
    },
    {
        "id": 170,
        "question": "【算術演算子（＋の利用）】\nSQL> SELECT * FROM students;\nID NAME       AGE GENDER BIRTHDAY\n-- ---------- --- ------ --------\n1  Taro       16  1      95-12-05\n2  Jiro       15  1      94-09-10\n3  Hanako     16  2      95-06-08\n上記のstudentsテーブルを使用して、id列が1のレコードが持つage列の値を5加算して、出力したい。実行するSQLとして正しいものはどれか。なお、出力結果の列名には別名は使用しないものとする。",
        "options": [
            "SELECT (age ADD 5) FROM students WHERE id = 1;",
            "SELECT age FROM students WHERE id = 1 ADD (age + 5);",
            "SELECT (age + 5) FROM students WHERE id = 1;",
            "SELECT age FROM students WHERE age + 5;"
        ],
        "answer": 2,
        "explanation": "SELECT句で列の値に算術演算を行う場合、そのまま + 演算子が使用できます。  \n- C の SELECT (age + 5) ... が正しい構文です。  \n- ADD というキーワードはこのような算術演算には使用しません。",
        "category": "総合問題"
    },
    {
        "id": 171,
        "question": "【述語INのORへの書き換え】\n以下のSQL文と同じ結果を求めているSQL文として正しいものはどれか。\nSELECT * FROM emp WHERE deptno IN (100, 200);",
        "options": [
            "SELECT * FROM emp WHERE deptno <> 100 OR deptno <> 200;",
            "SELECT * FROM emp WHERE deptno <> 100 AND deptno <> 200;",
            "SELECT * FROM emp WHERE deptno = 100 AND deptno = 200;",
            "SELECT * FROM emp WHERE deptno = 100 OR deptno = 200;"
        ],
        "answer": 3,
        "explanation": "IN句は、指定した複数の値のいずれかに一致するものを検索する条件であり、OR演算子を使って書き換えることができます。  \n- IN (100, 200) は deptno = 100 OR deptno = 200 と同義なので、Dが正解です。",
        "category": "総合問題"
    },
    {
        "id": 172,
        "question": "【IS NOT NULLとLIKEの条件指定】\nitems テーブルから、stock 列の値が NULL ではなく、かつ name 列(文字列型)の値に文字「o」を含むレコードのみを検索したい。実行する SQL 文として正しいものはどれか。",
        "options": [
            "SELECT * FROM items WHERE stock IS NOT NULL AND name LIKE '%o%';",
            "SELECT * FROM items WHERE stock IS NOT NULL AND name LIKE 'o';",
            "SELECT * FROM items WHERE stock <> NULL AND name LIKE '%o%';",
            "SELECT * FROM items WHERE stock <> NULL AND name LIKE 'o';"
        ],
        "answer": 0,
        "explanation": "NULLかどうかの判定には IS NOT NULL を使用します（<> NULL は誤り）。また、特定の文字を「含む（部分一致）」場合はワイルドカード % を前後に付けて LIKE '%o%' とします。  \n- Aが正解です。  \n- B・D の LIKE 'o' では「o」1文字との完全一致になってしまいます。",
        "category": "総合問題"
    },
    {
        "id": 173,
        "question": "【集約関数 COUNT】\naccountテーブルに登録されている全レコード数を求めたい。実行するSQL文として正しいものはどれか。",
        "options": [
            "SELECT NUMBER(*) FROM account;",
            "SELECT SUM(*) FROM account;",
            "SELECT UNIQUE(*) FROM account;",
            "SELECT COUNT(*) FROM account;"
        ],
        "answer": 3,
        "explanation": "テーブルの全レコード数（行数）を取得するには集約関数の COUNT(*) を使用します。  \n- Dが正解です。  \n- SUM は合計値を求める関数であり、NUMBER や UNIQUE という集約関数は存在しません。",
        "category": "総合問題"
    },
    {
        "id": 174,
        "question": "【集約関数・GROUP BY・HAVING句】\n(問題7と同じempテーブルに対し)\n「職種ごとの最高給与を求め、最高給与が2000を超える職種」だけを表示する以下の結果をSQLを実行して出力したい。実行するSQLとして正しいものはどれか。\nJOB       MAX(SAL)\n--------- --------\nPRESIDENT 5000\nMANAGER   2975\nANALYST   3000",
        "options": [
            "SELECT job, MAX(sal) FROM emp GROUP BY job HAVING MAX(sal) > 2000;",
            "SELECT job, MAX(sal) FROM emp GROUP BY job WHERE MAX(sal) > 2000;",
            "SELECT job, MAX(sal) FROM emp GROUP BY job HAVING sal > 2000;",
            "SELECT job, MAX(sal) FROM emp GROUP BY job WHERE sal > 2000;"
        ],
        "answer": 0,
        "explanation": "GROUP BYでグループ化した後の結果に対して条件を指定（絞り込み）する場合は、HAVING 句を使用します。  \n- 集約関数 MAX(sal) > 2000 を条件にするため、Aが正解です。  \n- WHERE句では集約関数を使用できないためエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 175,
        "question": "【結合（テーブル指定の記述ミス）】\nSQL> SELECT * FROM students;\nID NAME       CLASS_ID\n-- ---------- --------\n1  Tanaka     1\n2  Suzuki     1\n3  Sato       2\nSQL> SELECT * FROM class_rooms;\nCLASS_ID CLASS_NAME\n-------- ----------\n1        classA\n2        classB\n3        classC\n上記のstudentsテーブルとclass_roomsテーブルを内部結合する下記のSQL文を実行したところエラーが発生した。原因として正しいものはどれか。\nSQL> SELECT id, name, class_id, class_name\nFROM students\nINNER JOIN class_rooms ON students.class_id = class_rooms.class_id;\nなお、studentsテーブルのclass_id列はclass_roomsテーブルのclass_id列を外部参照しているとする。",
        "options": [
            "FROM句で各テーブルに別名を付けていない。",
            "SELECT句でclass_id列がどのテーブルの列であるか明記されていない。",
            "ON句で同名の列名での比較を行っている。",
            "SELECT句でON句で使用していない列が指定されている。"
        ],
        "answer": 1,
        "explanation": "結合する複数のテーブルに同じ名前の列（class_id）が存在する場合、SELECT句などで単に class_id と指定すると、どちらのテーブルの列か判別できず「列の定義があいまいです」というエラーが発生します。  \n- テーブル名または別名で students.class_id のように修飾する必要があるため、Bが正解です。",
        "category": "総合問題"
    },
    {
        "id": 176,
        "question": "【左外部結合の実行結果（レコード数）】\nSQL> SELECT * FROM employee;\nEMP_ID EMP_NAME   DEPT_ID\n------ ---------- -------\n1      田中太郎   2\n2      鈴木二郎   2\n3      渡辺花子   3\n4      佐藤達夫   3\nSQL> SELECT * FROM dept;\nDEPT_ID DEPT_NAME\n------- ----------\n1       総務部\n2       営業部\n3       開発部\n上記のemployeeテーブルとdeptテーブルをLEFT OUTER JOIN（左外部結合）で結合し、結合結果の「レコード数」を出力したい。「deptテーブル」を基準のテーブルとする場合、以下のSQL文となる。このSQL文を実行したときに出力されるレコード数の値として正しいものはどれか。\nSQL> SELECT COUNT(*)\nFROM dept LEFT OUTER JOIN employee\nON dept.dept_id = employee.dept_id;",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": 3,
        "explanation": "LEFT OUTER JOIN は、基準となる左側のテーブル（dept）の全レコードを必ず出力し、条件に一致する右側のテーブル（employee）のレコードを結合します。  \n- dept_id = 1 の行（一致0件で1行）、dept_id = 2 の行（一致2件で2行）、dept_id = 3 の行（一致2件で2行）となり、合計5行が出力されるためDが正解です。",
        "category": "総合問題"
    },
    {
        "id": 177,
        "question": "【左外部結合の正しいSQL文】\nSQL> SELECT * FROM products;\nPRODUCT_ID PRODUCT_NAME CATEGORY_ID\n---------- ------------ -----------\n1          Apple        1\n2          Orange       1\n3          Banana       2\nSQL> SELECT * FROM categories;\nCATEGORY_ID CATEGORY_NAME\n----------- -------------\n1           Fruit\n2           Fruit\n3           Vegetable\n上記の products テーブルと categories テーブルを結合し、「すべてのカテゴリID（category_id）とカテゴリ名（category_name）」を出力するSQL文として正しいものはどれか。",
        "options": [
            "SELECT c.category_id, c.category_name, p.product_name FROM categories c LEFT OUTER JOIN products p ON c.category_id = p.category_id;",
            "SELECT c.category_id, c.category_name, p.product_name FROM categories c INNER JOIN products p ON c.category_id = p.category_id;",
            "SELECT c.category_id, c.category_name, p.product_name FROM categories c RIGHT OUTER JOIN products p ON c.category_id = p.category_id;",
            "SELECT c.category_id, c.category_name, p.product_name FROM products p LEFT OUTER JOIN categories c ON c.category_id = p.category_id;"
        ],
        "answer": 0,
        "explanation": "「すべてのカテゴリ」を出力するには、categories テーブルを基準とした外部結合を行う必要があります。  \n- categories テーブルを左側に配置して LEFT OUTER JOIN を使用している A が正解です。  \n- D は categories が右側ですが LEFT OUTER JOIN なので products が基準になってしまいます。",
        "category": "総合問題"
    },
    {
        "id": 178,
        "question": "【サブクエリ（実行結果を得るための記述）】\n列名        型            制約\n---------   ------------- ------------\nid          NUMBER(5)     PRIMARY KEY\nname        VARCHAR2(10)\ncategory    NUMBER(2)\nstock       NUMBER(5)\n上記のテーブル定義を持つitemsテーブルに対して、「stock列の値が10未満という条件で絞り込み検索するサブクエリの結果から、name列の値のみを出力する」処理を実行したい。上記の要件を満たすSQL文として正しいものはどれか。",
        "options": [
            "SELECT name FROM SELECT * FROM items WHERE stock < 10;",
            "SELECT name FROM (SELECT stock FROM items WHERE stock < 10);",
            "SELECT name FROM (SELECT * FROM items WHERE stock < 10);",
            "SELECT name FROM (SELECT * FROM items) WHERE stock < 10;"
        ],
        "answer": 2,
        "explanation": "FROM句にサブクエリ（インラインビュー）を記述する場合、サブクエリ全体を括弧 () で囲む必要があります。  \n- サブクエリから name 列を取得するには、サブクエリのSELECT句で name 列（または * ）が取得されている必要があります。B は stock しか取得していないためエラーになります。  \n- 条件付きで全列を取得するサブクエリを正しく括弧で囲んでいる C が正解です。",
        "category": "総合問題"
    },
    {
        "id": 179,
        "question": "【WHERE句でのスカラ・サブクエリ】\n(問題7と同じempテーブルに対し)\n上記のempテーブルを使用して、sal列の値が全レコードの平均値以上であるレコードのみを検索したい。実行するSQL文として正しいものはどれか。",
        "options": [
            "SELECT * FROM emp WHERE sal >= (SELECT AVG(sal) FROM emp);",
            "SELECT * FROM emp WHERE sal >= AVG(sal);",
            "SELECT * FROM (SELECT AVG(sal) FROM emp);",
            "SELECT * FROM (SELECT AVG(sal) FROM emp GROUP BY sal HAVING sal >= AVG(sal));"
        ],
        "answer": 0,
        "explanation": "WHERE句で集約関数（AVGなど）の計算結果と比較するには、サブクエリを使用する必要があります。  \n- WHERE sal >= (平均値を求めるサブクエリ) と記述している A が正解です。  \n- WHERE句に直接 AVG(sal) と記述する B はエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 180,
        "question": "【スカラ・サブクエリにならない記述】\n(問題7と同じempテーブルに対し)\n上記のempテーブルに対して下記のSQL文を実行したところエラーが発生した。原因として正しいものはどれか。\nSELECT empno, ename, sal FROM emp\nWHERE deptno = (\nSELECT deptno FROM emp WHERE sal = (\nSELECT MIN(sal) FROM emp GROUP BY job\n)\n);",
        "options": [
            "サブクエリが入れ子になって記述されている。",
            "サブクエリが1 行 1 列の検索結果を返さない。",
            "一番外側のSELECT句にdeptno列の指定がない。",
            "一番内側のSELECT句で集約関数を使用している。"
        ],
        "answer": 1,
        "explanation": "WHERE sal = (サブクエリ) のように = などの単一行比較演算子を使用する場合、サブクエリは必ず 1行1列 の結果（スカラ値）を返す必要があります。  \n- 一番内側のサブクエリで GROUP BY job によって職種ごとに複数の結果が返されるためエラーになります。したがって B が正解です。",
        "category": "総合問題"
    },
    {
        "id": 181,
        "question": "【変数】に関する問題\n\n問1. String型の変数に代入できるものとして正しいものを選べ。",
        "options": [
            "true または false のみ代入できる。",
            "整数値のみ代入できる。",
            "文字列（テキスト）を代入できる。",
            "小数点を含む数値のみ代入できる。"
        ],
        "answer": 2,
        "explanation": "String型はJavaで文字列を扱うためのクラス型です。\n  例）String name = \"Java研修\";\n・1番：true/falseはboolean型の値です。\n・2番：整数値はint型などの数値型に代入します。\n・4番：小数点を含む数値はdouble型やfloat型に代入します。\nStringは文字列専用の型と覚えておきましょう。",
        "category": "総合問題"
    },
    {
        "id": 182,
        "question": "問2. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint num = 5;\nnum = num + 3;\nSystem.out.println(num);\n----------",
        "options": [
            "5",
            "3",
            "8",
            "53"
        ],
        "answer": 2,
        "explanation": "int num = 5;    // numに5を代入\n  num = num + 3;  // 5 + 3 = 8 をnumに再代入\n  System.out.println(num); // 8を出力\n\n・1番：初期値の5のままでは、num = num + 3 の処理がないことになります。\n・2番：3は加算する値であり、結果ではありません。\n・4番：53は文字列連結の誤解です（数値の足し算なので8が正解）。",
        "category": "総合問題"
    },
    {
        "id": 183,
        "question": "【演算子】に関する問題\n\n問3. 以下の式の出力結果として正しいものを選べ。\n\nSystem.out.println(\"点数：\" + 90 + 10);",
        "options": [
            "点数：100",
            "点数：9010",
            "点数：90",
            "エラーになる"
        ],
        "answer": 1,
        "explanation": "Javaの+演算子は左から右に評価されます。\n  \"点数：\" + 90  → 文字列連結 → \"点数：90\"\n  \"点数：90\" + 10 → 文字列連結 → \"点数：9010\"\n\n文字列の後ろに数値を+すると、数値は文字列として連結されます。\n・1番：100になるのは (90 + 10) が先に計算される場合ですが、\n       文字列の後では算術計算にはなりません。\n・3番：10が連結されていないため誤りです。",
        "category": "総合問題"
    },
    {
        "id": 184,
        "question": "問4. 型変換に関する説明として正しいものを選べ。",
        "options": [
            "int型の値をdouble型の変数に代入するにはキャスト演算子が必要である。",
            "double型の値をint型の変数に代入すると、自動的に変換される。",
            "int型はdouble型より小さい型のため、代入するだけで自動的にdouble型に変換される。",
            "booleanはint型に自動変換できる。"
        ],
        "answer": 2,
        "explanation": "型の大きさ：byte < short < int < long < float < double\n小さい型 → 大きい型への代入：キャスト不要（自動変換）\n大きい型 → 小さい型への代入：キャスト必須\n\n  int i = 10;\n  double d = i;  // 自動変換OK（10.0になる）\n\n・1番：逆の説明です。int→doubleはキャスト不要です。\n・2番：double→intが「自動変換される」は誤りです（キャスト必須）。\n・4番：booleanはint型に変換できません（Javaの仕様）。",
        "category": "総合問題"
    },
    {
        "id": 185,
        "question": "【配列】に関する問題\n\n問5. 以下のコードで「みかん」を表示するために正しい添字を選べ。\nただし、配列fruitsには{\"りんご\", \"みかん\", \"ぶどう\"}が代入されているとする。\n\nSystem.out.println(fruits[?]);",
        "options": [
            "fruits[0]",
            "fruits[1]",
            "fruits[2]",
            "fruits[3]"
        ],
        "answer": 1,
        "explanation": "配列の添字（インデックス）は0から始まります。\n  fruits[0] = \"りんご\"\n  fruits[1] = \"みかん\"  ← 正解\n  fruits[2] = \"ぶどう\"\n\n・1番：fruits[0]は「りんご」です。\n・3番：fruits[2]は「ぶどう」です。\n・4番：fruits[3]は存在せず、実行するとArrayIndexOutOfBoundsExceptionが発生します。",
        "category": "総合問題"
    },
    {
        "id": 186,
        "question": "問6. 以下の文はどのような処理を行うか。正しいものを選べ。\n\nString[] names = new String[3];",
        "options": [
            "String型の値を3個まで保存できる配列を生成し、変数namesに代入する。",
            "String型の値を4個まで保存できる配列を生成し、変数namesに代入する。",
            "変数namesにString型の文字列「3」を代入する。",
            "String型の変数を3つ宣言する。"
        ],
        "answer": 0,
        "explanation": "String[] names = new String[3];\n  → 要素数3のString型配列を生成。添字は0,1,2の3つ。\n\n・2番：4個までは誤りです。new String[3]は要素数3（添字0〜2）です。\n・3番：文字列「3」を代入するわけではありません。\n・4番：変数を3つ宣言するわけではなく、1つの配列オブジェクトを生成します。",
        "category": "総合問題"
    },
    {
        "id": 187,
        "question": "【分岐】に関する問題\n\n問7. 以下のif文で「合格」と表示されるために変数scoreに代入すべき値として正しいものを選べ。\n\n---Java---\nif (score >= 70) {\nSystem.out.println(\"合格\");\n} else {\nSystem.out.println(\"不合格\");\n}\n----------",
        "options": [
            "65",
            "69",
            "70",
            "50"
        ],
        "answer": 2,
        "explanation": "if (score >= 70) → scoreが70以上なら「合格」と表示\n  70以上：60❌ 69❌ 70✅\n\n・1番：65は70未満なので「不合格」になります。\n・2番：69は70未満なので「不合格」になります。\n・4番：50は70未満なので「不合格」になります。\n条件式が「>= 70」（70以上）なので、ちょうど70も合格です。",
        "category": "総合問題"
    },
    {
        "id": 188,
        "question": "問8. switch文でbreak文を省略した場合の動作として正しいものを選べ。",
        "options": [
            "そのcase文だけが実行され、次のcase文には進まない。",
            "一致したcaseから始まり、次のbreakまたはswitch文の末尾まで処理が続く。",
            "コンパイルエラーが発生する。",
            "全てのcase文が最初から順番に実行される。"
        ],
        "answer": 1,
        "explanation": "switch文でbreak文を省略すると「フォールスルー（fall-through）」が発生します。\n一致したcaseから処理が開始し、次のbreakが出るまで下のcaseの処理も連続して実行されます。\n\n・1番：break文がある場合の動作です。\n・3番：break省略はコンパイルエラーにはなりません。\n・4番：全caseが実行されるのではなく、「一致したcase以降」が実行されます。",
        "category": "総合問題"
    },
    {
        "id": 189,
        "question": "【繰り返し】に関する問題\n\n問9. 以下のfor文が繰り返す回数として正しいものを選べ。\n\n---Java---\nfor (int i = 0; i < 5; i++) {\nSystem.out.println(i);\n}\n----------",
        "options": [
            "4回",
            "5回",
            "6回",
            "1回"
        ],
        "answer": 1,
        "explanation": "for (int i = 0; i < 5; i++)\n  i=0, 1, 2, 3, 4 → 条件 i<5 を満たす間繰り返す\n  → 合計5回実行（0, 1, 2, 3, 4 を出力）\n\n・1番：4回はi=0〜3の4回と誤解した場合です。\n・3番：i<5なのでi=5では実行されません（6回は誤り）。\n・4番：iは毎回1増えるため無限ループにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 190,
        "question": "問10. 以下のwhile文の実行結果として正しいものを選べ。\n\n---Java---\nint i = 1;\nwhile (i <= 3) {\nSystem.out.println(i);\ni++;\n}\n----------",
        "options": [
            "1, 2 が順に表示される",
            "1, 2, 3 が順に表示される",
            "1, 2, 3, 4 が順に表示される",
            "無限ループになる"
        ],
        "answer": 1,
        "explanation": "int i = 1;\n  while (i <= 3) → iが3以下の間繰り返す\n  i=1: 1を出力 → i=2\n  i=2: 2を出力 → i=3\n  i=3: 3を出力 → i=4\n  i=4: 条件4<=3 が偽 → ループ終了\n\n・1番（誤り選択肢）：1, 2のみは i<=2 の条件の場合です。\n・3番：4が表示されるのはi<=4の条件の場合です。\n・4番：i++でiが増えているため無限ループにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 191,
        "question": "【クラス】に関する問題\n\n問11. 以下のクラスのフィールドに直接値を代入する記述として正しいものを選べ。\nただし、Bookクラスにはtitle（String型）フィールドがあり、変数bにオブジェクトが代入されているとする。",
        "options": [
            "b->title = \"Java入門\";",
            "b::title = \"Java入門\";",
            "b.title = \"Java入門\";",
            "b[title] = \"Java入門\";"
        ],
        "answer": 2,
        "explanation": "オブジェクトのフィールドにアクセスするには「.（ドット）」演算子を使います。\n  変数名.フィールド名 = 値;\n  b.title = \"Java入門\";\n\n・1番：b->titleはC/C++のポインタ記法です。Javaでは使いません。\n・2番：b::titleはJavaに存在しない記法です。\n・4番：b[title]は配列のアクセス記法です。フィールドには使いません。",
        "category": "総合問題"
    },
    {
        "id": 192,
        "question": "【メソッド】に関する問題\n\n問12. メソッドの戻り値の説明として正しいものを選べ。",
        "options": [
            "戻り値はメソッド内で発生したエラーを呼び出し元に通知するために使用する。",
            "戻り値はメソッドを呼び出した側に処理結果を返すために使用する。",
            "戻り値はメソッドに値を渡すために使用する。",
            "戻り値の型は必ずvoidと記述しなければならない。"
        ],
        "answer": 1,
        "explanation": "メソッドの戻り値（return値）は、メソッドの処理結果を呼び出し元に渡す仕組みです。\n  int result = add(3, 5);  // add()の戻り値8がresultに入る\n\n・1番：エラー情報を渡すのは例外（Exception）の役割です。\n・3番：引数は「渡す」ためのもの。戻り値はそれとは逆方向（返す）です。\n・4番：voidは戻り値が「なし」を意味します。voidでないメソッドも存在します。",
        "category": "総合問題"
    },
    {
        "id": 193,
        "question": "【アクセス修飾子】に関する問題\n\n問13. private修飾子が付いたフィールドの説明として正しいものを選べ。",
        "options": [
            "全てのクラスからアクセスできる。",
            "同じパッケージ内のクラスからのみアクセスできる。",
            "そのフィールドが定義されたクラス内からのみアクセスできる。",
            "サブクラスからのみアクセスできる。"
        ],
        "answer": 2,
        "explanation": "アクセス修飾子のまとめ：\n  private   → 同じクラス内のみ\n  (なし)    → 同じパッケージ内\n  protected → 同パッケージ＋サブクラス\n  public    → すべてのクラス\n\n・1番：publicの説明です。\n・2番：パッケージプライベート（修飾子なし）の説明です。\n・4番：protectedの一部の説明です（サブクラスも含む）。",
        "category": "総合問題"
    },
    {
        "id": 194,
        "question": "問14. getterメソッドの書き方として正しいものを選べ。\nただし、フィールドは private int age; とする。",
        "options": [
            "public void getAge() { age = value; }",
            "public int getAge() { return age; }",
            "public int setAge() { return age; }",
            "public void getAge() { return age; }"
        ],
        "answer": 1,
        "explanation": "getterメソッドの役割はprivateフィールドの値を外部に返すことです。\n  public 戻り値の型 getフィールド名() { return フィールド名; }\n  public int getAge() { return age; }\n\n・1番：age = value; は代入処理で、setterの書き方です。\n・3番：setAge()という名前でreturnするのは命名規則上の誤りです。\n・4番：return ageがあるのに戻り値型がvoidは矛盾でコンパイルエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 195,
        "question": "【オーバーロード】に関する問題\n\n問15. オーバーロードできないメソッドの組み合わせはどれか。",
        "options": [
            "void print(int n) と void print(double d)",
            "void print(String s) と void print(int n)",
            "void print(int n) と int print(int n)",
            "void print(int n, String s) と void print(String s, int n)"
        ],
        "answer": 2,
        "explanation": "オーバーロードの条件：「引数の型または数が異なること」\n戻り値の型だけが違うメソッドはオーバーロードできません。\n\n  void print(int n) と int print(int n)\n  → 引数が同じ(int n)で戻り値だけ違う → オーバーロード不可\n\n・1番：引数の型が違う（int vs double）→ オーバーロード可\n・2番：引数の型が違う（String vs int）→ オーバーロード可\n・4番：引数の数が違う（1個 vs 2個）→ オーバーロード可",
        "category": "総合問題"
    },
    {
        "id": 196,
        "question": "問16. オーバーロードに関する説明として正しいものを選べ。",
        "options": [
            "同じクラス内に同じ名前・同じ引数のメソッドを複数定義できること。",
            "同じクラス内に同じ名前で引数の型や数が異なるメソッドを複数定義できること。",
            "異なるクラス間で同じ名前のメソッドを定義できること。",
            "親クラスのメソッドを子クラスで再定義できること。"
        ],
        "answer": 1,
        "explanation": "オーバーロードとは：同じクラス内で、同名で引数が異なるメソッドを複数定義すること。\n  void print(int n)\n  void print(String s)   ← 引数の型が違う → オーバーロード\n\n・1番：同じ引数のメソッドは定義できません（コンパイルエラー）。\n・3番：異なるクラス間の定義はオーバーロードとは呼びません。\n・4番：親クラスのメソッドを子クラスで再定義するのは「オーバーライド」です。",
        "category": "総合問題"
    },
    {
        "id": 197,
        "question": "【コンストラクタ】に関する問題\n\n問17. コンストラクタの定義として間違っているものを選べ。\nただし、クラス名はAnimalとする。",
        "options": [
            "public Animal() { }",
            "public void Animal() { }",
            "public Animal(String name) { }",
            "Animal() { }"
        ],
        "answer": 1,
        "explanation": "コンストラクタの定義ルール：\n  1. クラス名と同じ名前にすること\n  2. 戻り値の型を書かないこと（voidも不可）\n\n  public void Animal() { }\n  → voidが書かれているためコンストラクタではなく通常のメソッドとして扱われます。\n  → 厳密にはコンパイルエラーにはなりませんが、コンストラクタとして機能しません。\n\n・1番：戻り値なし、クラス名一致 → 正しいコンストラクタです。\n・3番：引数あり → 正しいコンストラクタです。\n・4番：アクセス修飾子なし → 有効なコンストラクタです。",
        "category": "総合問題"
    },
    {
        "id": 198,
        "question": "問18. コンストラクタに関する説明として正しいものを選べ。",
        "options": [
            "コンストラクタはオブジェクトが破棄されるときに実行される。",
            "コンストラクタは明示的に呼び出さない限り実行されない。",
            "コンストラクタはオブジェクトが生成されるときに自動的に実行される。",
            "コンストラクタにはstatic修飾子が必須である。"
        ],
        "answer": 2,
        "explanation": "コンストラクタはnew演算子でオブジェクトを生成する際に自動的に呼び出されます。\n  Dog d = new Dog();  // ← ここでコンストラクタが実行される\n\n・1番：オブジェクト破棄時に実行されるのはデストラクタ（Javaにはない）の説明です。\n・2番：明示的に呼び出すのではなく、new時に自動実行されます。\n・4番：コンストラクタにstatic修飾子は付けられません。",
        "category": "総合問題"
    },
    {
        "id": 199,
        "question": "【staticメンバ】に関する問題\n\n問19. static変数に関する説明として正しいものを選べ。",
        "options": [
            "static変数はオブジェクトごとに個別の値を持つ。",
            "static変数はクラス全体で1つの値を共有する。",
            "static変数はprivate修飾子と組み合わせることができない。",
            "static変数はメソッド内にのみ定義できる。"
        ],
        "answer": 1,
        "explanation": "static変数（クラス変数）はクラスに1つだけ存在し、全オブジェクトで共有されます。\n  Counter c1 = new Counter();\n  Counter c2 = new Counter();\n  c1.count++; // count = 1\n  c2.count++; // 同じcount → count = 2\n\n・1番：インスタンス変数（非static）の説明です。\n・3番：static変数はprivateとも組み合わせ可能です。\n・4番：static変数はクラスフィールドとして定義します（メソッド内ではない）。",
        "category": "総合問題"
    },
    {
        "id": 200,
        "question": "問20. staticメソッドから直接アクセスできないものとして正しいものを選べ。",
        "options": [
            "static変数",
            "別のstaticメソッド",
            "インスタンス変数（非static変数）",
            "クラス名.static変数の形での参照"
        ],
        "answer": 2,
        "explanation": "staticメソッドはクラスに属し、オブジェクトなしで呼び出せます。\nそのため、オブジェクトが存在しないと使えないインスタンス変数（非static変数）には\n直接アクセスできません。\n\n  static void show() {\n      System.out.println(value); // ← valueがインスタンス変数なのでエラー\n  }\n\n・1番・2番・4番：staticメンバ同士はアクセス可能です。",
        "category": "総合問題"
    },
    {
        "id": 201,
        "question": "【継承】に関する問題\n\n問21. 継承に関する説明として正しいものを選べ。",
        "options": [
            "サブクラスはスーパークラスのprivateメンバに直接アクセスできる。",
            "サブクラスはスーパークラスのpublicおよびprotectedメンバを引き継ぐ。",
            "Javaでは1つのクラスが複数のクラスを同時に継承できる。",
            "スーパークラスはサブクラスのメソッドを自由に呼び出せる。"
        ],
        "answer": 1,
        "explanation": "継承（extends）により、サブクラスはスーパークラスのメンバを利用できます。\nただし、privateメンバはサブクラスからも直接アクセスできません。\n\n・1番：privateメンバは継承先からも直接アクセス不可です。\n・3番：Javaは単一継承のみ（extendsに書けるクラスは1つだけ）です。\n・4番：スーパークラスはサブクラスの存在を知らないので呼び出せません。",
        "category": "総合問題"
    },
    {
        "id": 202,
        "question": "問22. 継承関係でオブジェクト生成時のコンストラクタの実行順序として正しいものを選べ。",
        "options": [
            "サブクラスのコンストラクタ → スーパークラスのコンストラクタの順に実行される。",
            "スーパークラスのコンストラクタ → サブクラスのコンストラクタの順に実行される。",
            "どちらのコンストラクタが先に実行されるかは不定である。",
            "スーパークラスのコンストラクタのみが実行される。"
        ],
        "answer": 1,
        "explanation": "サブクラスのコンストラクタが呼ばれると、最初に super()（スーパークラスのコンストラクタ）\nが暗黙的に呼び出されます。\n\n  new Dog() を実行すると：\n    1. Animalのコンストラクタが先に実行\n    2. 次にDogのコンストラクタが実行\n\n・1番：逆順です。サブクラスが先ではありません。\n・3番：両方のコンストラクタが実行されます。\n・4番：サブクラスのコンストラクタも実行されます。",
        "category": "総合問題"
    },
    {
        "id": 203,
        "question": "【インターフェイス】に関する問題\n\n問23. インターフェイス内のフィールドに関する説明として正しいものを選べ。",
        "options": [
            "インターフェイス内のフィールドはインスタンス変数として扱われる。",
            "インターフェイス内にはフィールドを定義できない。",
            "インターフェイス内のフィールドはすべて定数（public static final）として扱われる。",
            "インターフェイス内のフィールドはprivateのみ指定できる。"
        ],
        "answer": 2,
        "explanation": "インターフェイスのフィールドは自動的に public static final が付きます。\nつまり、定数（値の変更不可）として扱われます。\n\n  interface Shape {\n      int SIDES = 4;  // 実際は public static final int SIDES = 4;\n  }\n\n・1番：インスタンス変数ではなく定数（定数はクラス変数）として扱われます。\n・2番：定義できないのではなく、定義できますが定数になります。\n・4番：privateは指定できません（public固定）。",
        "category": "総合問題"
    },
    {
        "id": 204,
        "question": "問24. インターフェイスを実装するクラスに関して、コンパイルエラーになるものを選べ。\nただし、インターフェイスPrintableには void print(); が定義されているとする。",
        "options": [
            "class A implements Printable { public void print() { System.out.println(\"A\"); } }",
            "class B implements Printable { }",
            "abstract class C implements Printable { }",
            "class D implements Printable { public void print() { } }"
        ],
        "answer": 1,
        "explanation": "インターフェイスを implements したクラスは、インターフェイスの全抽象メソッドを\n実装（オーバーライド）しなければなりません。\n\n  class B implements Printable { }\n  → print()が実装されていないためコンパイルエラー\n\n・1番・3番・4番：正しい実装またはabstractクラスとして宣言しているため有効です。",
        "category": "総合問題"
    },
    {
        "id": 205,
        "question": "【パッケージ】に関する問題\n\n問25. パッケージ文の書き方として正しいものを選べ。",
        "options": [
            "package文はimport文の後に記述する。",
            "package文はクラス定義のブロック内に記述する。",
            "package文はソースファイルの先頭（import文より前）に記述する。",
            "package文はmain()メソッド内に記述する。"
        ],
        "answer": 2,
        "explanation": "ソースファイルの記述順：\n  1. package文（最初に1行のみ）\n  2. import文\n  3. クラス定義\n\n  package jp.co.sss.app;   // 最初\n  import java.util.ArrayList;  // その次\n  public class Main { }\n\n・1番：import文の後に書くのは誤りです。\n・2番・4番：クラス定義内やmain()内には書けません。",
        "category": "総合問題"
    },
    {
        "id": 206,
        "question": "問26. パッケージ「jp.co.sss.util」にあるクラス「StringUtil」を使用するimport文として正しいものを選べ。",
        "options": [
            "import jp.co.sss.util;",
            "import jp.co.sss.util.*;",
            "import jp.co.sss.util.StringUtil;",
            "include jp.co.sss.util.StringUtil;"
        ],
        "answer": 2,
        "explanation": "特定のクラス1つをインポートする場合は完全クラス名を指定します。\n  import パッケージ名.クラス名;\n  import jp.co.sss.util.StringUtil;\n\n・1番：クラス名が含まれていません（パッケージのみ）。\n・2番：jp.co.sss.util.*はパッケージ内の全クラスをインポートします（1クラスではない）。\n・4番：includeはJavaの文法ではありません（C/C++の記法）。",
        "category": "総合問題"
    },
    {
        "id": 207,
        "question": "【例外】に関する問題\n\n問27. チェック例外が発生する可能性があるコードを書く際に、コンパイルエラーが出ないようにする方法として正しいものを選べ。",
        "options": [
            "例外が発生するコードをif文で囲む。",
            "try-catch文で例外をキャッチするか、throwsでメソッドに例外を宣言する。",
            "例外が発生する行にコメントを付ける。",
            "変数名を変更することで例外を回避できる。"
        ],
        "answer": 1,
        "explanation": "チェック例外（IOException等）は、必ずどちらかの対処が必要です。\n\n  方法A：try-catch で囲む\n    try { br.readLine(); } catch(IOException e) { ... }\n\n  方法B：メソッドにthrowsを宣言する\n    void readData() throws IOException { br.readLine(); }\n\n・1番：if文は例外処理の仕組みではありません。\n・3番：コメントは実行時の例外に影響しません。\n・4番：変数名の変更は例外の発生とは無関係です。",
        "category": "総合問題"
    },
    {
        "id": 208,
        "question": "問28. 以下の文はどのような処理を行うか。正しいものを選べ。\n\nthrow new IllegalArgumentException(\"無効な引数です\");",
        "options": [
            "IllegalArgumentExceptionクラスを新しく定義する。",
            "IllegalArgumentExceptionをキャッチして処理する。",
            "IllegalArgumentExceptionのオブジェクトを生成し、例外として発生させる。",
            "「無効な引数です」という文字列を出力する。"
        ],
        "answer": 2,
        "explanation": "throw文は例外を意図的に発生させる（スローする）ための文です。\n  throw new IllegalArgumentException(\"無効な引数です\");\n  → new で例外オブジェクトを生成\n  → throw で例外として発生させる\n\n・1番：クラスを定義するのはclassキーワードです。\n・2番：例外をキャッチするのはcatch文です。\n・4番：メッセージを出力するだけの処理ではありません。",
        "category": "総合問題"
    },
    {
        "id": 209,
        "question": "【コレクションフレームワーク】に関する問題\n\n問29. ArrayListに関する説明として正しいものを選べ。",
        "options": [
            "ArrayListは宣言時に要素数を指定しなければならない。",
            "ArrayListの添字は1から始まる。",
            "ArrayListには要素を後から追加・削除できる。",
            "ArrayListに格納できる要素数は10個が上限である。"
        ],
        "answer": 2,
        "explanation": "ArrayListは動的配列で、要素数を後から変更できます。\n  list.add(\"要素\");    // 末尾に追加\n  list.remove(0);      // インデックス0の要素を削除\n\n・1番：ArrayListは要素数を事前に指定する必要はありません。\n・2番：ArrayListのインデックスは0から始まります。\n・4番：ArrayListに要素数の上限はありません（メモリの許す限り追加可）。",
        "category": "総合問題"
    },
    {
        "id": 210,
        "question": "問30. HashMapの正しい宣言・生成方法を選べ。",
        "options": [
            "HashMap map = new HashMap(String, Integer);",
            "HashMap<String, Integer> map = new HashMap<>();",
            "HashMap<String, Integer> map = HashMap();",
            "new HashMap<String, Integer> map = new HashMap<>();"
        ],
        "answer": 1,
        "explanation": "HashMapの正しい宣言と生成：\n  HashMap<キーの型, 値の型> 変数名 = new HashMap<>();\n\n  HashMap<String, Integer> map = new HashMap<>();\n\n・1番：new HashMap(String, Integer)は存在しない記法です。\n・3番：new HashMap()が必要ですが、()が不要な記法になっています。\n・4番：宣言と生成の順序が間違っています。",
        "category": "総合問題"
    },
    {
        "id": 211,
        "question": "【変数】に関する問題\n\n問1. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = \"100\";\nint n = 50;\nSystem.out.println(s + n);\n----------",
        "options": [
            "150",
            "10050",
            "コンパイルエラー",
            "100 50"
        ],
        "answer": 1,
        "explanation": "String s = \"100\";\n  int n = 50;\n  System.out.println(s + n);\n\nJavaの+演算子は左から右に評価されます。\n  \"100\" + 50 → 文字列 \"100\" に数値50を連結 → \"10050\"\n\n・1番：150はint型同士の足し算の結果ですが、sはString型のため算術加算にはなりません。\n・3番：String + int の演算はコンパイルエラーになりません（文字列連結として扱われます）。\n・4番：スペース区切りにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 212,
        "question": "問2. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint x = 10;\nint y = x;\ny = 99;\nSystem.out.println(x);\n----------",
        "options": [
            "99",
            "10",
            "0",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "int x = 10;\n  int y = x;  // xの「値（10）」がyにコピーされる\n  y = 99;     // yを変更してもxには影響しない\n  System.out.println(x);  // 10\n\nint型などの基本型（プリミティブ型）は値そのものがコピーされます。\nyを変更してもxは別の変数なので変わりません。\n\n・1番：yに99を代入しましたが、xは独立した変数なので変わりません。\n・3番：int型の初期値は0ですが、xには10が代入済みです。",
        "category": "総合問題"
    },
    {
        "id": 213,
        "question": "【演算子】に関する問題\n\n問3. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nSystem.out.println(3 + 4 + \"合計\");\nSystem.out.println(\"合計\" + 3 + 4);\n----------",
        "options": [
            "7合計 / 合計7",
            "7合計 / 合計34",
            "34合計 / 合計34",
            "34合計 / 合計7"
        ],
        "answer": 1,
        "explanation": "System.out.println(3 + 4 + \"合計\");\n  → 3 + 4 = 7（数値計算が先）→ 7 + \"合計\" = \"7合計\"\n\n  System.out.println(\"合計\" + 3 + 4);\n  → \"合計\" + 3 = \"合計3\"（文字列連結）→ \"合計3\" + 4 = \"合計34\"\n\n+演算子は左から右に評価され、文字列が登場した時点から以降は文字列連結になります。\n\n・1番：2行目が「合計7」になるのは、3+4が先に計算される場合ですが、左から順に評価するため合計34が正解です。\n・3番：1行目が「34合計」になるのは文字列連結の誤解です。3+4が先に計算されます。",
        "category": "総合問題"
    },
    {
        "id": 214,
        "question": "問4. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint a = 7;\ndouble b = a / 2;\nSystem.out.println(b);\n----------",
        "options": [
            "3.5",
            "3.0",
            "4.0",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "int a = 7;\n  double b = a / 2;  // a(7)とリテラル2はどちらもint型\n\nint型同士の除算は整数除算になります。\n  7 / 2 = 3（小数点以下切り捨て） → double b = 3 → 3.0\n\n・1番：3.5は 7.0 / 2.0（double同士）または (double)a / 2 の場合の結果です。\n・3番：切り上げにはなりません。Javaの整数除算は常に切り捨てです。",
        "category": "総合問題"
    },
    {
        "id": 215,
        "question": "【配列】に関する問題\n\n問5. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint[] nums = {10, 20, 30, 40};\nSystem.out.println(nums[nums.length - 1]);\n----------",
        "options": [
            "30",
            "40",
            "3",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "int[] nums = {10, 20, 30, 40};\n  nums.length = 4（要素数）\n  nums.length - 1 = 3（最後の添字）\n  nums[3] = 40\n\nnums.length は「要素数」を返します。最後の添字は nums.length - 1 です。\n\n・1番：30はnums[2]の値です。nums.length-1はlengthそのものではありません。\n・3番：3はlengthの値（nums.lengthの計算結果）ですが、これは添字であり出力されるのは40です。",
        "category": "総合問題"
    },
    {
        "id": 216,
        "question": "問6. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint[] nums = {5, 10, 15};\nnums[0] = 100;\nSystem.out.println(nums[0] + nums[1]);\n----------",
        "options": [
            "15",
            "110",
            "115",
            "105"
        ],
        "answer": 1,
        "explanation": "int[] nums = {5, 10, 15};\n  nums[0] = 100;       // 5 → 100 に変更\n  System.out.println(nums[0] + nums[1]);  // 100 + 10 = 110\n\n配列の要素は後から変更できます。nums[0]が100に変わることを正確に追う必要があります。\n\n・1番：15は変更前のnums[0](5)+nums[1](10)の場合です。\n・3番：115はnums[0](100)+nums[2](15)の場合です。\n・4番：105はnums[0](100)+nums[2](5)の誤解の場合です。",
        "category": "総合問題"
    },
    {
        "id": 217,
        "question": "【分岐】に関する問題\n\n問7. 以下のコードで「B評価」と表示されるために変数scoreに代入すべき値として正しいものを選べ。\n\n---Java---\nif (score >= 80) {\nSystem.out.println(\"A評価\");\n} else if (score >= 60) {\nSystem.out.println(\"B評価\");\n} else {\nSystem.out.println(\"C評価\");\n}\n----------",
        "options": [
            "85",
            "70",
            "55",
            "80"
        ],
        "answer": 1,
        "explanation": "if (score >= 80) → A評価（80以上）\n  else if (score >= 60) → B評価（60以上80未満）\n\n  score = 70 → 70 >= 80 は偽 → 70 >= 60 は真 → B評価\n\n・1番：85は80以上なので「A評価」になります。\n・3番：55は60未満なので「C評価」になります。\n・4番：80は80以上なので「A評価」になります（>=80の条件に合致）。",
        "category": "総合問題"
    },
    {
        "id": 218,
        "question": "問8. 以下のswitch文の実行結果として正しいものを選べ。\nただし、変数dayには2が代入されているとする。\n\n---Java---\nswitch (day) {\ncase 1:\nSystem.out.println(\"月曜\");\ncase 2:\nSystem.out.println(\"火曜\");\ncase 3:\nSystem.out.println(\"水曜\");\nbreak;\ncase 4:\nSystem.out.println(\"木曜\");\n}\n----------",
        "options": [
            "火曜",
            "火曜、水曜",
            "月曜、火曜、水曜",
            "火曜、水曜、木曜"
        ],
        "answer": 1,
        "explanation": "day = 2 → case 2に一致\n  case 2: System.out.println(\"火曜\"); → 火曜を出力\n  break文がないため次のcase 3へフォールスルー\n  case 3: System.out.println(\"水曜\"); → 水曜を出力\n  break; → ここで終了\n\n・1番：break文がないためcase 3にも進みます。\n・3番：case 1はday=2と一致しないため実行されません。\n・4番：case 4はbreak後なので実行されません。",
        "category": "総合問題"
    },
    {
        "id": 219,
        "question": "【繰り返し】に関する問題\n\n問9. 以下のfor文の実行結果として正しいものを選べ。\n\n---Java---\nfor (int i = 2; i <= 8; i += 2) {\nSystem.out.print(i + \" \");\n}\n----------",
        "options": [
            "2 4 6 8",
            "2 4 6",
            "0 2 4 6 8",
            "2 4 6 8 10"
        ],
        "answer": 0,
        "explanation": "for (int i = 2; i <= 8; i += 2)\n  i=2: 2 出力、i+=2 → i=4\n  i=4: 4 出力、i+=2 → i=6\n  i=6: 6 出力、i+=2 → i=8\n  i=8: 8 出力、i+=2 → i=10\n  i=10: 10 <= 8 は偽 → ループ終了\n\n・2番：6で終わるのはi<=6の条件の場合です。\n・3番：0から始まるのはi=0からの場合です。\n・4番：10はi=10のときi<=8の条件を満たさないため出力されません。",
        "category": "総合問題"
    },
    {
        "id": 220,
        "question": "問10. 以下のwhile文の実行結果として正しいものを選べ。\n\n---Java---\nint count = 10;\nwhile (count > 0) {\ncount -= 3;\n}\nSystem.out.println(count);\n----------",
        "options": [
            "1",
            "-2",
            "0",
            "-1"
        ],
        "answer": 1,
        "explanation": "count = 10\n  1回目: 10 > 0 → count = 10 - 3 = 7\n  2回目: 7 > 0  → count = 7 - 3 = 4\n  3回目: 4 > 0  → count = 4 - 3 = 1\n  4回目: 1 > 0  → count = 1 - 3 = -2\n  5回目: -2 > 0 は偽 → ループ終了\n  出力: -2\n\n・1番：1はループ前の最後の正の値ですが、さらに-3されます。\n・3番：0ちょうどにはなりません（3の倍数で0になる場合のみ）。\n・4番：-1にはなりません（10から3を引いていくと7→4→1→-2になります）。",
        "category": "総合問題"
    },
    {
        "id": 221,
        "question": "【クラス】に関する問題\n\n問11. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Car {\nString color = \"赤\";\n}\n\n// mainメソッド内\nCar c = new Car();\nc.color = \"青\";\nSystem.out.println(c.color);\n----------",
        "options": [
            "赤",
            "青",
            "null",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "Car c = new Car();  // color = \"赤\"\n  c.color = \"青\";     // フィールドを\"青\"に変更\n  System.out.println(c.color);  // 青を出力\n\n・1番：「赤」は初期値ですが、c.color = \"青\" で上書きされます。\n・3番：nullはString型の初期値ですが、\"赤\"で初期化されています。\n・4番：publicフィールドへの直接アクセスはコンパイルエラーになりません。",
        "category": "総合問題"
    },
    {
        "id": 222,
        "question": "【メソッド】に関する問題\n\n問12. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic int multiply(int a, int b) {\nreturn a * b;\n}\n\n// mainメソッド内\nint result = multiply(4, 5);\nSystem.out.println(result + 10);\n----------",
        "options": [
            "20",
            "30",
            "4510",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "multiply(4, 5) → 4 * 5 = 20 を返す\n  int result = 20;\n  result + 10 = 30\n  System.out.println(30);\n\n・1番：20はmultiply()の戻り値ですが、+10がされていません。\n・3番：4510は文字列連結の誤解です（result と 10 はどちらもint型）。\n・4番：int型同士の演算はコンパイルエラーになりません。",
        "category": "総合問題"
    },
    {
        "id": 223,
        "question": "【アクセス修飾子】に関する問題\n\n問13. 以下のコードでコンパイルエラーが発生する箇所として正しいものを選べ。\n\n---Java---\nclass Person {\nprivate String name;\n}\n\nclass Main {\npublic static void main(String[] args) {\nPerson p = new Person();\np.name = \"太郎\";  // ← A\n}\n}\n----------",
        "options": [
            "class Person { の行",
            "private String name; の行",
            "p.name = \"太郎\"; の行（A）",
            "エラーは発生しない"
        ],
        "answer": 2,
        "explanation": "class Person { private String name; }\n  → nameはprivateのため、Personクラス外からアクセス不可\n\n  class Main { ... p.name = \"太郎\"; }\n  → MainクラスからPersonのprivateフィールドへアクセス → コンパイルエラー\n\n・1番：Person型の変数宣言はエラーになりません。\n・2番：privateフィールドの定義自体はエラーになりません。\n・4番：エラーは発生します。",
        "category": "総合問題"
    },
    {
        "id": 224,
        "question": "問14. 以下のsetterメソッドの実装として正しいものを選べ。\nただし、フィールドは private String name; とする。",
        "options": [
            "public String setName(String n) { name = n; }",
            "public void setName(String n) { name = n; }",
            "public void setName() { return name; }",
            "private void setName(String n) { name = n; }"
        ],
        "answer": 1,
        "explanation": "setterメソッドの構造：\n  public void setフィールド名(型 引数) { フィールド名 = 引数; }\n  public void setName(String n) { name = n; }\n\n・1番：String型を返す（戻り値型がString）はgetterの誤りです。setterはvoidです。\n・3番：return nameはgetterの処理です。setterはフィールドへ代入します。\n・4番：privateにすると外部から呼び出せず、setterの意味がなくなります。",
        "category": "総合問題"
    },
    {
        "id": 225,
        "question": "【オーバーロード】に関する問題\n\n問15. 以下のメソッド定義のうち、オーバーロードの組み合わせとして成立しないものを選べ。",
        "options": [
            "void calc(int a) と void calc(double a)",
            "void calc(int a, String b) と void calc(String a, int b)",
            "void calc(int a) と int calc(int a)",
            "void calc(int a) と void calc(int a, int b)"
        ],
        "answer": 2,
        "explanation": "オーバーロードは「引数の型または数が異なること」が条件です。\n戻り値の型だけが違うメソッドはオーバーロードとして認識されません。\n\n  void calc(int a) と int calc(int a)\n  → 引数が同じ(int a) → オーバーロード不可（コンパイルエラー）\n\n・1番：引数の型が違う（int vs double）→ オーバーロード可\n・2番：引数の順序が違う（int,String vs String,int）→ オーバーロード可\n・4番：引数の数が違う（1個 vs 2個）→ オーバーロード可",
        "category": "総合問題"
    },
    {
        "id": 226,
        "question": "問16. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Calc {\nint add(int a) { return a + 1; }\nint add(int a, int b) { return a + b; }\n}\n\n// mainメソッド内\nCalc c = new Calc();\nSystem.out.println(c.add(5));\nSystem.out.println(c.add(3, 4));\n----------",
        "options": [
            "5と7が順に表示される",
            "6と7が順に表示される",
            "5と3が順に表示される",
            "6と34が順に表示される"
        ],
        "answer": 1,
        "explanation": "c.add(5)    → add(int a) が呼ばれる → 5 + 1 = 6\n  c.add(3, 4) → add(int a, int b) が呼ばれる → 3 + 4 = 7\n\nJavaは引数の数・型によって自動的に適切なオーバーロードメソッドを選びます。\n\n・1番：5と7の誤りは add(5) の結果を+1しないことで起こります。\n・3番：5と3の誤りは計算していない場合です。\n・4番：6と34は数値を文字列連結した場合の誤解です。",
        "category": "総合問題"
    },
    {
        "id": 228,
        "question": "問18. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Dog {\nString name;\nDog(String n) {\nname = n;\nSystem.out.println(name + \"が生まれました\");\n}\n}\n\n// mainメソッド内\nDog d1 = new Dog(\"ポチ\");\nDog d2 = new Dog(\"コロ\");\n----------",
        "options": [
            "何も表示されない",
            "ポチが生まれました / コロが生まれました の順に表示される",
            "コロが生まれました / ポチが生まれました の順に表示される",
            "ポチが生まれました のみ表示される"
        ],
        "answer": 1,
        "explanation": "Dog d1 = new Dog(\"ポチ\"); → コンストラクタ実行 → \"ポチが生まれました\"\n  Dog d2 = new Dog(\"コロ\"); → コンストラクタ実行 → \"コロが生まれました\"\n\nnewのたびにコンストラクタが実行され、生成順に出力されます。\n\n・1番：コンストラクタ内にprintln()があるため、出力は必ず発生します。\n・3番：d1より前にd2が生成されることはありません（記述順通りです）。\n・4番：d2のコンストラクタも実行されるため、コロも表示されます。",
        "category": "総合問題"
    },
    {
        "id": 229,
        "question": "【staticメンバ】に関する問題\n\n問19. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Counter {\nstatic int count = 0;\n}\n\n// mainメソッド内\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nc1.count++;\nc2.count++;\nSystem.out.println(Counter.count);\n----------",
        "options": [
            "0",
            "1",
            "2",
            "コンパイルエラー"
        ],
        "answer": 2,
        "explanation": "static int count = 0; // クラス全体で共有される1つの変数\n\n  Counter c1 = new Counter();\n  Counter c2 = new Counter();\n  c1.count++;  // count = 1（共有されているため同じ変数）\n  c2.count++;  // count = 2（c1とc2は同じstatic変数を参照）\n  System.out.println(Counter.count); // 2\n\nstatic変数はオブジェクトごとではなく、クラスで1つだけ存在します。\n\n・1番：初期値の0のままでは++処理がないことになります。\n・2番：c1またはc2の片方しかカウントしていない場合の誤りです。\n・4番：static変数をインスタンスから参照してもコンパイルエラーにはなりません。",
        "category": "総合問題"
    },
    {
        "id": 230,
        "question": "問20. 以下のコードでコンパイルエラーになる行として正しいものを選べ。\n\n---Java---\nclass MyClass {\nint value = 10;           // A\nstatic void show() {\nSystem.out.println(value); // B\n}\n}\n----------",
        "options": [
            "A行（int value = 10;）",
            "static void show() {",
            "B行（System.out.println(value);）",
            "エラーは発生しない"
        ],
        "answer": 2,
        "explanation": "class MyClass {\n      int value = 10;           // インスタンス変数\n      static void show() {\n          System.out.println(value); // ← エラー\n      }\n  }\n\nstaticメソッドはオブジェクトなしで呼び出せます。\nしかし、インスタンス変数(value)はオブジェクトが必要なため、\nstaticメソッド内から直接アクセスすることはできません。\n\n・1番：インスタンス変数の定義自体はエラーになりません。\n・2番：staticメソッドの定義自体はエラーになりません。\n・4番：エラーは発生します。",
        "category": "総合問題"
    },
    {
        "id": 231,
        "question": "【継承】に関する問題\n\n問21. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Animal {\nvoid speak() { System.out.println(\"...\"); }\n}\nclass Cat extends Animal {\nvoid speak() { System.out.println(\"ニャー\"); }\n}\n\n// mainメソッド内\nAnimal a = new Cat();\na.speak();\n----------",
        "options": [
            "...",
            "ニャー",
            "コンパイルエラー",
            "...とニャーが両方表示される"
        ],
        "answer": 1,
        "explanation": "Animal a = new Cat(); // 変数の型はAnimal、実体はCat\n  a.speak();            // 実体のCatのspeak()が呼ばれる\n\nこれを「ポリモーフィズム（多態性）」と言います。\nオーバーライドされたメソッドは、参照型ではなく実際のオブジェクトの型で決まります。\n\n・1番：「...」はAnimalのspeak()ですが、実体はCatなのでCatのspeak()が優先されます。\n・3番：コンパイルエラーにはなりません（AnimalはCatの親クラスなので代入可能）。\n・4番：両方が表示されるのはsuper.speak()を呼んでいる場合だけです。",
        "category": "総合問題"
    },
    {
        "id": 232,
        "question": "問22. 以下のコードのコンストラクタ実行順序として正しいものを選べ。\n\n---Java---\nclass Animal {\nAnimal() { System.out.println(\"Animalコンストラクタ\"); }\n}\nclass Dog extends Animal {\nDog() { System.out.println(\"Dogコンストラクタ\"); }\n}\n\n// mainメソッド内\nDog d = new Dog();\n----------",
        "options": [
            "Dogコンストラクタ → Animalコンストラクタ の順に表示される",
            "Animalコンストラクタ → Dogコンストラクタ の順に表示される",
            "Animalコンストラクタ のみ表示される",
            "Dogコンストラクタ のみ表示される"
        ],
        "answer": 1,
        "explanation": "new Dog() を実行すると：\n    1. DogコンストラクタがまずAnimalのsuper()を暗黙的に呼び出す\n    2. \"Animalコンストラクタ\"が出力される\n    3. 次にDogコンストラクタ本体が実行される\n    4. \"Dogコンストラクタ\"が出力される\n\n・1番：逆順です。スーパークラスが先に実行されます。\n・3番：Dogコンストラクタも必ず実行されます。\n・4番：Animalコンストラクタも必ず実行されます。",
        "category": "総合問題"
    },
    {
        "id": 233,
        "question": "【インターフェイス】に関する問題\n\n問23. 以下のコードでコンパイルエラーになるものを選べ。\n\n---Java---\ninterface Shape {\nint SIDES = 4;    // A\nvoid draw();      // B\n}\n----------\n\nA行のSIDESに別の値を代入しようとした場合の記述として",
        "options": [
            "SIDES = 6; は可能",
            "Shape.SIDES = 6; は可能",
            "SIDES = 6; はコンパイルエラーになる（定数のため変更不可）",
            "インターフェイスにフィールドは定義できないためA行自体がエラー"
        ],
        "answer": 2,
        "explanation": "インターフェイスのフィールドは自動的に public static final が付きます。\nfinalが付いているため、一度初期化された後は値を変更できません。\n\n  interface Shape {\n      int SIDES = 4;  // = public static final int SIDES = 4;\n  }\n  SIDES = 6;  // コンパイルエラー（finalフィールドへの再代入）\n\n・1番：SIDES = 6 は直接代入できず、コンパイルエラーになります。\n・2番：Shape.SIDES = 6 もfinalのため変更不可です。\n・4番：インターフェイスにフィールドは定義できます（定数として）。",
        "category": "総合問題"
    },
    {
        "id": 234,
        "question": "問24. 以下のコードでコンパイルエラーになる実装クラスを選べ。\nただし、インターフェイスPrintableには void print(); が定義されているとする。",
        "options": [
            "class A implements Printable { public void print() { System.out.println(\"A\"); } }",
            "class B implements Printable { void print() { System.out.println(\"B\"); } }",
            "class C implements Printable { public void print() { } }",
            "abstract class D implements Printable { }"
        ],
        "answer": 1,
        "explanation": "インターフェイスのメソッドは暗黙的にpublicになります。\n実装クラスでオーバーライドする際、スーパー（インターフェイス）より\nアクセス制限を狭めることはできません。\n\n  interface Printable { void print(); }  // 実際はpublic void print()\n  class B { void print() { ... } }       // packageプライベート → アクセス制限が狭まる → エラー\n\n・1番：publicでオーバーライド → 問題なし\n・3番：メソッド本体が空でも実装として有効\n・4番：abstractクラスはインターフェイスのメソッドを実装しなくても可",
        "category": "総合問題"
    },
    {
        "id": 235,
        "question": "【パッケージ】に関する問題\n\n問25. 以下のコードでコンパイルエラーになるパッケージ文の書き方を選べ。\n\n---Java---\nimport java.util.ArrayList;\npackage jp.co.sss.app;   // ← この位置に記述\n\npublic class Main { }\n----------",
        "options": [
            "package文はどこに書いても問題ない",
            "package文はimport文より後に記述してはならないためエラーになる",
            "package文はクラス内に記述しなければならない",
            "パッケージ名に「.」は使用できない"
        ],
        "answer": 1,
        "explanation": "ソースファイルの正しい記述順序：\n  1. package文（ファイル先頭、1行のみ）\n  2. import文\n  3. クラス定義\n\n  import java.util.ArrayList;\n  package jp.co.sss.app;   // ← import文の後 → コンパイルエラー\n\n・1番：package文の位置には厳格なルールがあります。\n・3番：package文はクラス内ではなく、ファイルの最初に記述します。\n・4番：「.」は階層の区切りに使用します。使用可能です。",
        "category": "総合問題"
    },
    {
        "id": 236,
        "question": "問26. パッケージ「jp.co.sss.model.entity」の下にあるクラス「UserEntity」を1クラスだけインポートするimport文として正しいものを選べ。",
        "options": [
            "import jp.co.sss.model.entity.*;",
            "import jp.co.sss.model.entity;",
            "import jp.co.sss.model.entity.UserEntity;",
            "include jp.co.sss.model.entity.UserEntity;"
        ],
        "answer": 2,
        "explanation": "特定クラス1つをインポートする書き方：\n  import 完全パッケージ名.クラス名;\n  import jp.co.sss.model.entity.UserEntity;\n\n・1番：ワイルドカード（*）はパッケージ内の全クラスをインポートします（特定クラスのみではない）。\n・2番：クラス名がなく、パッケージ名のみです。\n・4番：includeはJavaに存在しません。",
        "category": "総合問題"
    },
    {
        "id": 237,
        "question": "【例外】に関する問題\n\n問27. 以下のコードでコンパイルエラーが出ないようにする修正として正しいものを選べ。\nただし、br.readLine()はIOExceptionをスローする可能性があるとする。\n\n---Java---\nBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\nString line = br.readLine();\n----------",
        "options": [
            "if文でnullチェックを行う",
            "try-catch(IOException e)でreadLine()を囲む、またはメソッドにthrows IOExceptionを宣言する",
            "lineの型をObjectに変更する",
            "System.out.println()で出力する"
        ],
        "answer": 1,
        "explanation": "IOExceptionはチェック例外です。チェック例外はコンパイラが処理を強制します。\n\n  方法A：try-catch\n    try { String line = br.readLine(); } catch(IOException e) { ... }\n\n  方法B：throws宣言\n    void method() throws IOException { String line = br.readLine(); }\n\n・1番：nullチェックのifは例外処理ではありません。\n・3番：変数の型変更は例外の発生とは無関係です。\n・4番：println()を追加しても例外処理にはなりません。",
        "category": "総合問題"
    },
    {
        "id": 238,
        "question": "問28. 以下のコードの動作として正しいものを選べ。\n\n---Java---\ntry {\nint result = 10 / 0;\n} catch (ArithmeticException e) {\nSystem.out.println(\"エラー：\" + e.getMessage());\n}\n----------",
        "options": [
            "「エラー：/ by zero」と表示される",
            "プログラムが強制終了する",
            "resultに0が代入される",
            "コンパイルエラーになる"
        ],
        "answer": 0,
        "explanation": "try {\n      int result = 10 / 0;  // 0除算 → ArithmeticException発生\n  } catch (ArithmeticException e) {\n      System.out.println(\"エラー：\" + e.getMessage());\n  }\n\n10 / 0 でArithmeticExceptionが発生し、catchブロックで捕捉されます。\ne.getMessage()は例外のメッセージ「/ by zero」を返します。\n\n・2番：try-catchで例外が捕捉されるため、プログラムは終了しません。\n・3番：0除算の結果は0にはなりません（例外が発生します）。\n・4番：0除算の構文はコンパイルエラーではなく実行時エラーです。",
        "category": "総合問題"
    },
    {
        "id": 239,
        "question": "【コレクションフレームワーク】に関する問題\n\n問29. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nimport java.util.ArrayList;\n\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.add(\"Python\");\nlist.add(\"Java\");\nSystem.out.println(list.size());\nSystem.out.println(list.get(1));\n----------",
        "options": [
            "2 / Java",
            "3 / Python",
            "2 / Python",
            "3 / Java"
        ],
        "answer": 1,
        "explanation": "list.add(\"Java\");    // [Java]         size=1\n  list.add(\"Python\");  // [Java, Python]  size=2\n  list.add(\"Java\");    // [Java, Python, Java] size=3  ← 重複OK\n  list.size() → 3\n  list.get(1) → \"Python\"（インデックス1 = 2番目の要素）\n\nArrayListは重複した値を追加できます。インデックスは0から始まります。\n\n・1番：2/Javaはlist.size()が2またはget(1)がJavaの場合の誤りです。\n・3番：2/Pythonはlist.size()を2と誤解した場合です。\n・4番：3/Javaはget(1)をget(0)または重複のないHashSetと混同した場合です。",
        "category": "総合問題"
    },
    {
        "id": 240,
        "question": "問30. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nimport java.util.HashMap;\n\nHashMap<String, Integer> map = new HashMap<>();\nmap.put(\"apple\", 100);\nmap.put(\"banana\", 200);\nmap.put(\"apple\", 300);\nSystem.out.println(map.get(\"apple\"));\nSystem.out.println(map.size());\n----------",
        "options": [
            "100 / 2",
            "300 / 2",
            "100 / 3",
            "300 / 3"
        ],
        "answer": 1,
        "explanation": "map.put(\"apple\", 100);   // {\"apple\":100}\n  map.put(\"banana\", 200);  // {\"apple\":100, \"banana\":200}\n  map.put(\"apple\", 300);   // 同じキー\"apple\"で再put → {\"apple\":300, \"banana\":200}\n\nHashMapは同じキーでput()すると値が上書きされます（追加ではない）。\n  map.get(\"apple\") → 300\n  map.size() → 2（appleとbananaの2つ）\n\n・1番：100はappleの初期値ですが、300で上書きされています。\n・3番：100/3はappleが上書きされず3エントリになると誤解した場合です。\n・4番：300/3はappleが上書きにより3エントリになると誤解した場合です。",
        "category": "総合問題"
    },
    {
        "id": 241,
        "question": "【変数】に関する問題\n\n問1. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nString s1 = \"Hello\";\nString s2 = 100 + 20 + \"World\";\nSystem.out.println(s2);\n}\n}\n----------",
        "options": [
            "Hello120World",
            "World12010",
            "120World",
            "100World"
        ],
        "answer": 2,
        "explanation": "Javaでは演算子は左から右へ評価されます。\n  100 + 20 + \"World\"\n  → まず 100 + 20 が整数の足し算 → 120\n  → 次に 120 + \"World\" が文字列連結 → \"120World\"\n\n【ひっかけのポイント】\n文字列が右側にある場合、左側の整数同士の計算が先に行われる点に注意。\n\"World\" + 100 + 20 の場合は \"World10020\" になります。",
        "category": "総合問題"
    },
    {
        "id": 242,
        "question": "【変数】に関する問題\n\n問2. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\ndouble d = 7 / 2;\nSystem.out.println(d);\n}\n}\n----------",
        "options": [
            "3.5",
            "3.0",
            "4.0",
            "コンパイルエラーになる"
        ],
        "answer": 1,
        "explanation": "7 / 2 は両方 int 型なので、結果は整数の 3（小数点以下切り捨て）になります。\nその後、int の 3 を double 型の変数 d に代入すると自動変換されて 3.0 になります。\n\n  double d = 7 / 2;\n  → 7 / 2 = 3（int同士の整数除算）\n  → d = 3.0（intからdoubleへの自動変換）\n\n【ひっかけのポイント】\n「double型の変数に代入するから 3.5 になる」と思いがちですが、\n代入される前に右辺の計算が完了してしまいます。\n小数点を得るには (double)7 / 2 や 7.0 / 2 のようにする必要があります。",
        "category": "総合問題"
    },
    {
        "id": 243,
        "question": "【演算子】に関する問題\n\n問3. 以下のコードを実行したとき、コンソールに出力される内容として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nSystem.out.println(\"答え：\" + 3 + 5);\n}\n}\n----------",
        "options": [
            "答え：8",
            "答え：35",
            "8",
            "35"
        ],
        "answer": 1,
        "explanation": "\"答え：\" + 3 + 5 は左から評価されます。\n  → \"答え：\" + 3 → \"答え：3\"（文字列連結）\n  → \"答え：3\" + 5 → \"答え：35\"（文字列連結）\n\n【ひっかけのポイント】\n「3 + 5 = 8 が先に計算される」と思うのは誤り。\n+ 演算子は左から右へ順番に評価されるため、\n文字列が最初に現れた時点でその後はすべて文字列連結として扱われます。\n計算を先に行いたい場合は「\"答え：\" + (3 + 5)」と括弧でくくります。",
        "category": "総合問題"
    },
    {
        "id": 244,
        "question": "【演算子】に関する問題\n\n問4. 以下のコードを実行したとき、変数resultに格納される値として正しいものを選べ。\nただし、変数aには10が、変数bには3が代入されているとする。\n\n---Java---\nint a = 10;\nint b = 3;\nint result = (int)((double)a / b);\n----------",
        "options": [
            "3",
            "3.333...",
            "4",
            "コンパイルエラーになる"
        ],
        "answer": 0,
        "explanation": "(int)((double)a / b)\n  → (double)10 / 3 = 3.333...（doubleにキャストしてから割り算）\n  → (int)3.333... = 3（intにキャストで小数点以下切り捨て）\n\n計算の順序：\n1. (double)a → 10 を double にキャスト → 10.0\n2. 10.0 / 3 → double同士の割り算 → 3.333...\n3. (int)3.333... → 3（切り捨て）\n\n【ひっかけのポイント】\n「切り捨て」であり「四捨五入」ではない点に注意。\n3.999... でも (int) をつけると 3 になります。",
        "category": "総合問題"
    },
    {
        "id": 245,
        "question": "【配列】に関する問題\n\n問5. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nint[] nums = {10, 20, 30, 40, 50};\nSystem.out.println(nums[nums.length - 1]);\n}\n}\n----------",
        "options": [
            "40",
            "50",
            "5",
            "4"
        ],
        "answer": 1,
        "explanation": "int[] nums = {10, 20, 30, 40, 50};\n  nums.length → 5（要素数）\n  nums.length - 1 → 4（最後の添字）\n  nums[4] → 50\n\n配列の添字は0から始まるため、最後の要素は [length - 1] でアクセスします。\n\n【ひっかけのポイント】\n「nums.length」は5ですが、「nums[5]」はArrayIndexOutOfBoundsExceptionになります。\n最後の要素には nums[nums.length - 1] でアクセスするのが定番パターンです。",
        "category": "総合問題"
    },
    {
        "id": 246,
        "question": "【配列】に関する問題\n\n問6. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nint[] nums = new int[3];\nnums[0] = 5;\nnums[1] = nums[0] * 2;\nnums[2] = nums[1] + nums[0];\nSystem.out.println(nums[2]);\n}\n}\n----------",
        "options": [
            "10",
            "15",
            "20",
            "5"
        ],
        "answer": 1,
        "explanation": "実行順序を追うと：\n  nums[0] = 5\n  nums[1] = nums[0] * 2 = 5 * 2 = 10\n  nums[2] = nums[1] + nums[0] = 10 + 5 = 15\n\nSystem.out.println(nums[2]) → 15 が出力されます。\n\n【ひっかけのポイント】\nnums[2] = nums[1] + nums[0] の時点で nums[0] は 5、nums[1] は 10 であることを\n順番通りに追うことが重要です。「nums[0] * 2 + nums[0]」とも同義です。",
        "category": "総合問題"
    },
    {
        "id": 247,
        "question": "【分岐】に関する問題\n\n問7. 以下のコードの実行結果として正しいものを選べ。\nただし、変数scoreには75が代入されているとする。\n\n---Java---\nint score = 75;\nif (score >= 90) {\nSystem.out.println(\"優\");\n} else if (score >= 70) {\nSystem.out.println(\"良\");\n} else if (score >= 60) {\nSystem.out.println(\"可\");\n} else {\nSystem.out.println(\"不可\");\n}\n----------",
        "options": [
            "優",
            "良",
            "可",
            "不可"
        ],
        "answer": 1,
        "explanation": "score = 75 の場合：\n  score >= 90 → 75 >= 90 → false（スキップ）\n  score >= 70 → 75 >= 70 → true（「良」を出力して終了）\n\n最初に true になった条件のブロックのみ実行され、\nそれ以降の else if・else は実行されません。\n\n【ひっかけのポイント】\nscore >= 60 も true ですが、すでに score >= 70 で条件が満たされているため\n実行されません。if-else if は「最初に true になった1つだけ実行」です。",
        "category": "総合問題"
    },
    {
        "id": 248,
        "question": "【分岐】に関する問題\n\n問8. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nint x = 2;\nswitch (x) {\ncase 1:\nSystem.out.println(\"one\");\ncase 2:\nSystem.out.println(\"two\");\ncase 3:\nSystem.out.println(\"three\");\nbreak;\ncase 4:\nSystem.out.println(\"four\");\n}\n}\n}\n----------",
        "options": [
            "two",
            "two three",
            "one two three",
            "two three four"
        ],
        "answer": 1,
        "explanation": "x = 2 なので case 2: にマッチします。\n  case 2: → \"two\" を出力\n  （break なし → fall-through）\n  case 3: → \"three\" を出力\n  （break あり → switch文を抜ける）\n\nbreak を省略すると、次の case に処理が「落ちて」続けて実行されます（fall-through）。\n\n【ひっかけのポイント】\ncase 4: の \"four\" は出力されません。case 3 の break で止まります。\n「case 2 にマッチしたから two だけ出力される」と思うのは誤りです。",
        "category": "総合問題"
    },
    {
        "id": 249,
        "question": "【繰り返し】に関する問題\n\n問9. 以下の2つのfor文のうち、より多く繰り返すものとして正しいものを選べ。\n\nA: for (int i = 0; i < 5; i++)\nB: for (int i = 1; i <= 5; i++)",
        "options": [
            "Aの方が多い（6回）",
            "Bの方が多い（6回）",
            "AもBも同じ（5回）",
            "AもBも同じ（4回）"
        ],
        "answer": 2,
        "explanation": "A: for (int i = 0; i < 5; i++)\n  → i = 0, 1, 2, 3, 4（5回繰り返す）\n\nB: for (int i = 1; i <= 5; i++)\n  → i = 1, 2, 3, 4, 5（5回繰り返す）\n\nどちらも5回繰り返します。\n\n【ひっかけのポイント】\n「i < 5 と i <= 5 は違う」ことは正しいですが、\n開始値も異なる（0 と 1）ため、結果的に同じ回数になります。\ni=0 から始めて i<5 は「0以上5未満」= 5回。\ni=1 から始めて i<=5 は「1以上5以下」= 5回。",
        "category": "総合問題"
    },
    {
        "id": 250,
        "question": "【繰り返し】に関する問題\n\n問10. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nint i = 1;\nint sum = 0;\nwhile (i <= 5) {\nsum += i;\ni++;\n}\nSystem.out.println(sum);\n}\n}\n----------",
        "options": [
            "10",
            "15",
            "20",
            "5"
        ],
        "answer": 1,
        "explanation": "1 + 2 + 3 + 4 + 5 = 15\n\nwhile ループの実行追跡：\n  i=1: sum = 0 + 1 = 1\n  i=2: sum = 1 + 2 = 3\n  i=3: sum = 3 + 3 = 6\n  i=4: sum = 6 + 4 = 10\n  i=5: sum = 10 + 5 = 15\n  i=6: 6 <= 5 → false → ループ終了\n\n【ひっかけのポイント】\n「i <= 5」なので i=5 のときも実行されます（5回実行）。\n「i < 5」と混同しないよう注意してください。",
        "category": "総合問題"
    },
    {
        "id": 251,
        "question": "【クラス】に関する問題\n\n問11. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Car {\nString color = \"white\";\nint speed = 0;\n}\n\npublic class Main {\npublic static void main(String[] args) {\nCar car = new Car();\ncar.color = \"red\";\nSystem.out.println(car.color);\n}\n}\n----------",
        "options": [
            "white",
            "red",
            "0",
            "コンパイルエラーになる"
        ],
        "answer": 1,
        "explanation": "Car car = new Car();       → Carオブジェクト生成。color = \"white\"\n  car.color = \"red\";         → フィールドcolorに \"red\" を直接代入\n  System.out.println(car.color); → \"red\" が出力される\n\n【ひっかけのポイント】\n「new Car() した直後はコンストラクタで設定された \"white\" では？」と思うかもしれませんが、\nその後に car.color = \"red\" で上書きしているため \"red\" になります。\n処理の順番をしっかり追うことが大切です。",
        "category": "総合問題"
    },
    {
        "id": 252,
        "question": "【メソッド】に関する問題\n\n問12. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\nstatic int add(int a, int b) {\nreturn a + b;\n}\n\npublic static void main(String[] args) {\nint result = add(3, 4);\nSystem.out.println(result * 2);\n}\n}\n----------",
        "options": [
            "7",
            "12",
            "14",
            "コンパイルエラーになる"
        ],
        "answer": 2,
        "explanation": "add(3, 4) → 3 + 4 = 7（int型で返す）\n  result = 7\n  result * 2 = 7 * 2 = 14\n\n【ひっかけのポイント】\nメソッドの戻り値を変数に受け取り、さらにその変数を使って計算していることに注目。\n「メソッドを呼んだ結果の 7 をそのまま出力する」と思うと 7 と答えてしまいます。\nprintln の中で「result * 2」しているので 14 になります。",
        "category": "総合問題"
    },
    {
        "id": 253,
        "question": "【アクセス修飾子】に関する問題\n\n問13. 以下のコードについて、コンパイルエラーが発生する箇所として正しいものを選べ。\n\n---Java---\n// Personクラス（別ファイル）\npublic class Person {\nprivate String name = \"Taro\";\npublic int age = 20;\n}\n\n// Mainクラス\npublic class Main {\npublic static void main(String[] args) {\nPerson p = new Person();\nSystem.out.println(p.age);    // 行A\nSystem.out.println(p.name);   // 行B\n}\n}\n----------",
        "options": [
            "行Aでエラーが発生する",
            "行Bでエラーが発生する",
            "行Aと行Bの両方でエラーが発生する",
            "エラーは発生しない"
        ],
        "answer": 1,
        "explanation": "p.age  → age は public なので別クラスからアクセス可能（行Aはエラーなし）\n  p.name → name は private なので別クラスからアクセス不可（行Bでコンパイルエラー）\n\nアクセス修飾子の原則：\n  public    → どこからでもアクセス可\n  private   → 同じクラス内からのみアクセス可\n  protected → 同じパッケージ内 or サブクラスからアクセス可\n\n【ひっかけのポイント】\nprivate フィールドには getter/setter を通じてアクセスするのが正しい方法です。\n直接 p.name と書くとコンパイルエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 254,
        "question": "【アクセス修飾子】に関する問題\n\n問14. 以下のgetterとsetterのコードとして正しいものを選べ。\nただし、フィールドは「private String name;」とする。",
        "options": [
            "public String getName() { return name; }\npublic void setName(String name) { this.name = name; }",
            "public void getName() { return name; }\npublic String setName(String name) { this.name = name; }",
            "private String getName() { return name; }\nprivate void setName(String name) { this.name = name; }",
            "public String getName(String name) { return name; }\npublic void setName() { this.name = name; }"
        ],
        "answer": 0,
        "explanation": "正しい getter/setter の形式：\n  getter: 戻り値の型 getフィールド名() { return フィールド; }\n  setter: void setフィールド名(型 引数) { this.フィールド = 引数; }\n\n各選択肢の誤り：\n  2番: getter の戻り値型が void（returnできない）、setter の戻り値型が String（不正）\n  3番: getter/setter が private（外部からアクセスできない）\n  4番: getter に引数がある（getterは引数なし）、setter に引数がない\n\n【ポイント】\nthis.name = name; の this は「このオブジェクトのフィールド」を指します。\n引数名とフィールド名が同じ場合に this で区別します。---\n\n【オーバーロード】に関する問題\n\n問15. 以下のクラスに定義されているメソッドのうち、オーバーロードが成立していないものを含む組み合わせはどれか。\n\n---Java---\npublic class Calc {\n    public int sum(int a, int b) { return a + b; }\n    // 以下のメソッドを追加した場合\n}\n----------\n\n1. public double sum(double a, double b) { return a + b; }\n2. public int sum(int a, int b, int c) { return a + b + c; }\n3. public int sum(int x, int y) { return x + y; }\n4. public String sum(String a, String b) { return a + b; }\n\n正解：3番\n\n【解説】\nオーバーロードが成立するには「引数の型・数・順序のいずれかが異なる」必要があります。\n  1番: sum(double, double) → 引数の型が異なる → 成立\n  2番: sum(int, int, int) → 引数の数が異なる → 成立\n  3番: sum(int x, int y) → 引数の型も数も同じ（名前だけ異なる） → 不成立\n  4番: sum(String, String) → 引数の型が異なる → 成立\n\n【ひっかけのポイント】\n引数の「変数名」が違うだけでは、オーバーロードになりません。\nコンパイラは変数名ではなく「型・数・順序」でメソッドを区別します。",
        "category": "総合問題"
    },
    {
        "id": 255,
        "question": "【オーバーロード】に関する問題\n\n問16. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\nstatic void show(int n) {\nSystem.out.println(\"int: \" + n);\n}\nstatic void show(double d) {\nSystem.out.println(\"double: \" + d);\n}\nstatic void show(String s) {\nSystem.out.println(\"String: \" + s);\n}\n\npublic static void main(String[] args) {\nshow(3.14);\n}\n}\n----------",
        "options": [
            "int: 3",
            "int: 3.14",
            "double: 3.14",
            "String: 3.14"
        ],
        "answer": 2,
        "explanation": "show(3.14) → 3.14 は double 型リテラル\n  → show(double d) が呼ばれる\n  → \"double: 3.14\" が出力される\n\n【ひっかけのポイント】\n3.14 は double 型として扱われます。\nint型の 3 ではないので show(int n) は呼ばれません。\nJavaでは整数リテラルは int、小数リテラルは double がデフォルトです。",
        "category": "総合問題"
    },
    {
        "id": 256,
        "question": "【コンストラクタ】に関する問題\n\n問17. 以下のコンストラクタの定義として誤っているものを選べ。",
        "options": [
            "public Dog() { }",
            "public Dog(String name) { this.name = name; }",
            "public void Dog() { }",
            "public Dog(int age) { this.age = age; }"
        ],
        "answer": 2,
        "explanation": "コンストラクタの特徴：\n  ・クラス名と同じ名前でなければならない\n  ・戻り値の型を書いてはいけない（void も書かない）\n  ・アクセス修飾子は書ける\n\n選択肢3番は「void」が付いているため、コンストラクタではなく通常のメソッドとして扱われます。\nコンパイルエラーにはなりませんが、コンストラクタとしては機能しません。\n\n【ひっかけのポイント】\nvoid を付けるとメソッド定義になってしまいます。\nコンストラクタは「戻り値なし」であり、「void なし」です。",
        "category": "総合問題"
    },
    {
        "id": 257,
        "question": "【コンストラクタ】に関する問題\n\n問18. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Counter {\nint count;\nCounter() {\ncount = 10;\n}\n}\n\npublic class Main {\npublic static void main(String[] args) {\nCounter c = new Counter();\nSystem.out.println(c.count);\n}\n}\n----------",
        "options": [
            "0",
            "10",
            "null",
            "コンパイルエラーになる"
        ],
        "answer": 1,
        "explanation": "Counter c = new Counter();\n  → オブジェクト生成時にコンストラクタが実行される\n  → count = 10 が実行される\n  System.out.println(c.count) → 10 が出力される\n\n【ひっかけのポイント】\nint 型フィールドのデフォルト値は 0 ですが、\nコンストラクタで count = 10 と設定しているため 10 になります。\nコンストラクタはオブジェクト生成時に自動的に実行されます。",
        "category": "総合問題"
    },
    {
        "id": 258,
        "question": "【staticメンバ】に関する問題\n\n問19. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Counter {\nstatic int count = 0;\n\nCounter() {\ncount++;\n}\n}\n\npublic class Main {\npublic static void main(String[] args) {\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nCounter c3 = new Counter();\nSystem.out.println(Counter.count);\n}\n}\n----------",
        "options": [
            "0",
            "1",
            "3",
            "コンパイルエラーになる"
        ],
        "answer": 2,
        "explanation": "static 変数 count はクラス全体で1つだけ存在します。\n  new Counter() → コンストラクタで count++ → count = 1\n  new Counter() → コンストラクタで count++ → count = 2\n  new Counter() → コンストラクタで count++ → count = 3\n  Counter.count → 3 が出力される\n\n【ひっかけのポイント】\nインスタンス変数ならオブジェクトごとに独立しますが、\nstatic 変数はすべてのオブジェクトで共有されます。\nそのため、何回 new してもすべてのカウントが積み上がります。",
        "category": "総合問題"
    },
    {
        "id": 259,
        "question": "【staticメンバ】に関する問題\n\n問20. 以下のコードについて、コンパイルエラーが発生する箇所として正しいものを選べ。\n\n---Java---\npublic class Sample {\nint instanceVar = 5;\nstatic int staticVar = 10;\n\nstatic void show() {\nSystem.out.println(staticVar);   // 行A\nSystem.out.println(instanceVar); // 行B\n}\n}\n----------",
        "options": [
            "行Aでエラーが発生する",
            "行Bでエラーが発生する",
            "行Aと行Bの両方でエラーが発生する",
            "エラーは発生しない"
        ],
        "answer": 1,
        "explanation": "行A: System.out.println(staticVar);\n    → static変数への参照 → staticメソッドからアクセス可能 → エラーなし\n\n  行B: System.out.println(instanceVar);\n    → インスタンス変数への参照 → staticメソッドからは直接アクセス不可\n    → コンパイルエラー\n\n【理由】\nstatic メソッドはオブジェクトが存在しなくても呼び出せます。\nしかしインスタンス変数はオブジェクトが存在して初めて使えるため、\nstatic メソッドからは「どのオブジェクトの変数か」が特定できず、アクセスできません。",
        "category": "総合問題"
    },
    {
        "id": 260,
        "question": "【継承】に関する問題\n\n問21. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Animal {\npublic void speak() {\nSystem.out.println(\"...\");\n}\n}\n\npublic class Dog extends Animal {\n@Override\npublic void speak() {\nSystem.out.println(\"Woof!\");\n}\n}\n\npublic class Main {\npublic static void main(String[] args) {\nAnimal a = new Dog();\na.speak();\n}\n}\n----------",
        "options": [
            "...",
            "Woof!",
            "...Woof!",
            "コンパイルエラーになる"
        ],
        "answer": 1,
        "explanation": "Animal a = new Dog();\n  → 変数の型は Animal だが、実際のオブジェクトは Dog\n  a.speak();\n  → 実際のオブジェクト（Dog）の speak() が実行される\n  → \"Woof!\" が出力される\n\nこれをポリモーフィズム（多態性）といいます。\n変数の型がスーパークラスであっても、実際に生成されたオブジェクトのメソッドが呼ばれます。\n\n【ひっかけのポイント】\n「Animal型の変数だから Animal の speak() が呼ばれる」と思うのは誤りです。\nJavaは実行時に実際のオブジェクトの型を確認して、適切なメソッドを呼び出します。",
        "category": "総合問題"
    },
    {
        "id": 261,
        "question": "【継承】に関する問題\n\n問22. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Parent {\nParent() {\nSystem.out.println(\"Parent\");\n}\n}\n\npublic class Child extends Parent {\nChild() {\nSystem.out.println(\"Child\");\n}\n}\n\npublic class Main {\npublic static void main(String[] args) {\nChild c = new Child();\n}\n}\n----------",
        "options": [
            "Child",
            "Parent",
            "Parent Child",
            "Child Parent"
        ],
        "answer": 2,
        "explanation": "Child c = new Child();\n  → Child コンストラクタが実行される前に、暗黙的に super() が呼ばれる\n  → Parent コンストラクタ実行 → \"Parent\" が出力される\n  → Child コンストラクタの残り実行 → \"Child\" が出力される\n\n継承関係でのコンストラクタ実行順序：\n  スーパークラスのコンストラクタ → サブクラスのコンストラクタ\n\n【ひっかけのポイント】\n「Child を生成するのだから Child が先に出力される」と思いがちですが、\nJavaでは必ず親（スーパークラス）のコンストラクタが先に実行されます。\nChild コンストラクタの1行目には暗黙的に super(); が挿入されています。",
        "category": "総合問題"
    },
    {
        "id": 262,
        "question": "【インターフェイス】に関する問題\n\n問23. 以下のインターフェイスの定義に関して、コンパイルエラーになるものを選べ。\n\n---Java---\npublic interface Shape {\n// （A）の場所に書くフィールド定義\n}\n----------",
        "options": [
            "int SIDES = 4;",
            "public static final double PI = 3.14;",
            "private int area = 0;",
            "String name = \"shape\";"
        ],
        "answer": 2,
        "explanation": "インターフェイスのフィールドは、暗黙的にすべて\n  public static final（= 定数）\nとして扱われます。\n\n  1番: int SIDES = 4; → public static final int SIDES = 4; と同義 → 合法\n  2番: public static final double PI = 3.14; → 明示的に書いているが合法\n  3番: private int area = 0; → インターフェイスで private は使用不可 → コンパイルエラー\n  4番: String name = \"shape\"; → public static final と同義 → 合法\n\n【ひっかけのポイント】\nインターフェイスのフィールドは必ず public static final です。\nprivate を付けると定数の共有という役割に矛盾するためエラーになります。",
        "category": "総合問題"
    },
    {
        "id": 263,
        "question": "【インターフェイス】に関する問題\n\n問24. 以下のコードについて、コンパイルエラーが発生するものを選べ。\n\n---Java---\npublic interface Printable {\nvoid print();\n}\n\n// 以下の4つのクラス定義のうち、コンパイルエラーになるものを選べ\n----------",
        "options": [
            "public class Doc implements Printable {\npublic void print() { System.out.println(\"doc\"); }\n}",
            "public class Photo implements Printable {\npublic void print() { System.out.println(\"photo\"); }\n}",
            "public class Report implements Printable { }",
            "public abstract class Form implements Printable { }"
        ],
        "answer": 2,
        "explanation": "インターフェイスの抽象メソッドを実装するクラスは、\n全ての抽象メソッドをオーバーライドする義務があります。\n\n  1番: print() を実装している → 合法\n  2番: print() を実装している → 合法\n  3番: print() を実装していない（abstract 宣言もない） → コンパイルエラー\n  4番: abstract クラスとして宣言 → 未実装のまま継承できる → 合法\n\n【ひっかけのポイント】\nabstract クラス（選択肢4）は抽象クラスなので、\nインターフェイスの抽象メソッドを実装しなくても合法です。\nただし、その abstract クラスを継承した具象クラスが実装しなければなりません。",
        "category": "総合問題"
    },
    {
        "id": 264,
        "question": "【パッケージ】に関する問題\n\n問25. 以下のクラスがパッケージ「com.example」に属する場合、ファイルの先頭に記述すべき文として正しいものを選べ。",
        "options": [
            "import com.example;",
            "package com.example;",
            "import com.example.Main;",
            "package Main.com.example;"
        ],
        "answer": 1,
        "explanation": "パッケージを宣言する文法：\n  package パッケージ名;\n\npackage 文はソースファイルの先頭（import より前）に記述します。\n\n各選択肢の誤り：\n  1番: import は「使う側」が書く文であり、パッケージ宣言ではない\n  3番: import com.example.Main; → 自クラス名まで含めた import 文（意味が異なる）\n  4番: クラス名を含めた文法は不正\n\n【ひっかけのポイント】\npackage と import の違いを混同しないこと。\n  package → このクラスが属するパッケージを宣言する\n  import  → 他のパッケージのクラスを使用可能にする",
        "category": "総合問題"
    },
    {
        "id": 265,
        "question": "【パッケージ】に関する問題\n\n問26. パッケージ「jp.co.sample.util」にある「StringUtil」クラスをimportする文として正しいものを選べ。",
        "options": [
            "import jp.co.sample.util.*;",
            "import StringUtil from jp.co.sample.util;",
            "package jp.co.sample.util.StringUtil;",
            "using jp.co.sample.util.StringUtil;"
        ],
        "answer": 0,
        "explanation": "パッケージ内のクラスをインポートする方法：\n  特定クラスを指定: import jp.co.sample.util.StringUtil;\n  パッケージ全体を指定: import jp.co.sample.util.*;（ワイルドカード）\n\nどちらも正しいですが、選択肢1のワイルドカード形式が正解です。\n\n各選択肢の誤り：\n  2番: from 構文は JavaScript の文法（Java では使えない）\n  3番: package 文はインポートではなくパッケージ宣言\n  4番: using 構文は C# の文法（Java では使えない）",
        "category": "総合問題"
    },
    {
        "id": 266,
        "question": "【例外】に関する問題\n\n問27. 以下のコードについて、コンパイルエラーが出ないようにするための修正として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\nString line = br.readLine(); // readLine()はIOExceptionをスロー\n}\n}\n----------",
        "options": [
            "mainメソッドの宣言を「public static void main(String[] args) throws IOException」に変更する",
            "mainメソッドの宣言を「public static void main(String[] args) throws Exception」に変更する",
            "1と2のどちらかを行うか、try-catchブロックでIOExceptionを捕捉する",
            "何も変更しなくてよい。IOExceptionは非チェック例外なので処理不要"
        ],
        "answer": 2,
        "explanation": "IOException は「チェック例外」であり、必ず処理が必要です。\n処理方法は2通りあります：\n\n方法①: try-catch でキャッチする\n  try {\n      String line = br.readLine();\n  } catch (IOException e) {\n      // 処理\n  }\n\n方法②: throws で呼び出し元に委ねる\n  public static void main(String[] args) throws IOException {\n\n選択肢3は「どちらか」または「try-catch」と書いており、最も正確です。\n\n【ひっかけのポイント】\nIOException は RuntimeException のサブクラスではないため、\n「非チェック例外」ではありません。必ず処理が必要です。",
        "category": "総合問題"
    },
    {
        "id": 267,
        "question": "【例外】に関する問題\n\n問28. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\npublic class Main {\npublic static void main(String[] args) {\ntry {\nint[] arr = new int[3];\narr[5] = 10;\nSystem.out.println(\"try完了\");\n} catch (ArrayIndexOutOfBoundsException e) {\nSystem.out.println(\"例外発生\");\n} finally {\nSystem.out.println(\"finally実行\");\n}\n}\n}\n----------",
        "options": [
            "try完了",
            "例外発生",
            "例外発生 finally実行",
            "finally実行"
        ],
        "answer": 2,
        "explanation": "arr[5] = 10;\n  → arr のサイズは 3（arr[0]〜arr[2]）なので arr[5] は範囲外\n  → ArrayIndexOutOfBoundsException が発生\n  → try ブロックを抜けて catch ブロックへ\n  → \"例外発生\" が出力される\n  → finally ブロックは必ず実行される\n  → \"finally実行\" が出力される\n\nfinally ブロックは、例外が発生してもしなくても必ず実行されます。\n\n【ひっかけのポイント】\n\"try完了\" は例外が発生したため出力されません。\nfinally は「後片付け」のために使われ、例外の有無に関わらず実行されます。",
        "category": "総合問題"
    },
    {
        "id": 268,
        "question": "【コレクションフレームワーク】に関する問題\n\n問29. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\npublic static void main(String[] args) {\nList<String> list = new ArrayList<>();\nlist.add(\"Apple\");\nlist.add(\"Banana\");\nlist.add(\"Cherry\");\nlist.remove(0);\nSystem.out.println(list.get(0));\n}\n}\n----------",
        "options": [
            "Apple",
            "Banana",
            "Cherry",
            "null"
        ],
        "answer": 1,
        "explanation": "初期状態：\n  インデックス: 0→\"Apple\"、1→\"Banana\"、2→\"Cherry\"\n\nlist.remove(0) → インデックス0の \"Apple\" を削除\n削除後：\n  インデックス: 0→\"Banana\"、1→\"Cherry\"\n\nlist.get(0) → \"Banana\" が出力される\n\n【ひっかけのポイント】\nArrayList の remove(int index) はインデックスで削除します。\n削除後、残った要素のインデックスは前詰めで詰め直されます。\n「\"Apple\" を削除したから get(0) は null」ではありません。",
        "category": "総合問題"
    },
    {
        "id": 269,
        "question": "【コレクションフレームワーク】に関する問題\n\n問30. 以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\npublic static void main(String[] args) {\nMap<String, Integer> map = new HashMap<>();\nmap.put(\"A\", 1);\nmap.put(\"B\", 2);\nmap.put(\"A\", 99);\nSystem.out.println(map.get(\"A\"));\n}\n}\n----------",
        "options": [
            "1",
            "2",
            "99",
            "[1, 99]"
        ],
        "answer": 2,
        "explanation": "map.put(\"A\", 1);   → キー \"A\" に値 1 を登録\n  map.put(\"B\", 2);   → キー \"B\" に値 2 を登録\n  map.put(\"A\", 99);  → キー \"A\" は既に存在するため、値が 99 に上書きされる\n  map.get(\"A\")       → 99 が出力される\n\nHashMap は同じキーで put() すると、既存の値が上書きされます。\n\n【ひっかけのポイント】\n「\"A\" に 1 と 99 の両方が入る」という誤解に注意。\nHashMap のキーは一意であり、同じキーで put() すると値が更新されます。\n[1, 99] のようにリストになることはありません。",
        "category": "総合問題"
    },
    {
        "id": 270,
        "question": "【拡張for文（for-each）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint[] nums = {10, 20, 30};\nfor (int n : nums) {\nSystem.out.print(n + \" \");\n}",
        "options": [
            "10",
            "10 20 30",
            "0 1 2",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "拡張for文（for-each文）は配列やコレクションの各要素を\n先頭から順番に取り出してループします。\n\n  for (要素の型 変数名 : 配列名) { ... }\n\n・nums には {10, 20, 30} が入っているため、n に 10, 20, 30 の順で\n  値が入り、それぞれ print で出力されます。\n・System.out.print は改行しないため「10 20 30 」と1行で表示されます。\n\n・選択肢1: 10のみでは不十分。3要素すべて処理されます。\n・選択肢2: 正解。\n・選択肢3: nums[0]～nums[2] ではなく、値そのものが出力されます。\n・選択肢4: 正しい構文のためコンパイルエラーはありません。",
        "category": "総合問題"
    },
    {
        "id": 271,
        "question": "【拡張for文（要素の変更）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\nn = n * 10;\n}\nSystem.out.println(nums[0]);",
        "options": [
            "10",
            "1",
            "0",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "拡張for文の変数 n は、配列の要素のコピーを受け取ります。\nn に代入しても配列 nums の中身は変わりません。\n\n---Java---\nfor (int n : nums) {\n    n = n * 10;   // nums[0] 自体は変わらない！\n}\n----------\n\nそのため、nums[0] の値は最初に代入された 1 のままです。\n\n【ポイント】\n  配列の要素を変更したい場合は通常のfor文を使う。\n  for (int i = 0; i < nums.length; i++) { nums[i] = nums[i] * 10; }",
        "category": "総合問題"
    },
    {
        "id": 272,
        "question": "【多次元配列（宣言と初期化）】\n2行3列の二次元配列を宣言・初期化する記述として正しいものを選べ。",
        "options": [
            "int[] matrix = new int[2][3];",
            "int[][] matrix = new int[2][3];",
            "int matrix[2][3] = new int[][];",
            "int[2][3] matrix = new int[][];"
        ],
        "answer": 1,
        "explanation": "二次元配列の宣言は型の後に [][] を付けます。\n\n  int[][] 変数名 = new int[行数][列数];\n\n・選択肢1: int[] は一次元配列の宣言であり、new int[2][3] との型が一致しません（コンパイルエラー）。\n・選択肢2: 正解。int[][] matrix = new int[2][3]; が正しい。\n・選択肢3・4: 型と変数名の記述順序や括弧の使い方が誤りです。\n\n【ポイント】\n  int[][] array = new int[行][列];\n  要素数: 行数 × 列数",
        "category": "総合問題"
    },
    {
        "id": 273,
        "question": "【多次元配列（要素へのアクセス）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint[][] grid = {{1, 2, 3}, {4, 5, 6}};\nSystem.out.println(grid[1][2]);",
        "options": [
            "3",
            "5",
            "6",
            "コンパイルエラー"
        ],
        "answer": 2,
        "explanation": "grid[1][2] は「1行目（0始まり）の2列目（0始まり）」の値を指します。\n\n  {{1, 2, 3},   ← grid[0][0]=1, grid[0][1]=2, grid[0][2]=3\n   {4, 5, 6}}   ← grid[1][0]=4, grid[1][1]=5, grid[1][2]=6\n\ngrid[1][2] = 6\n\n・選択肢1: grid[0][2] の値（3）です。\n・選択肢2: grid[1][1] の値（5）です。\n・選択肢3: 正解。grid[1][2] = 6。\n・選択肢4: 正しいアクセスのためコンパイルエラーはありません。",
        "category": "総合問題"
    },
    {
        "id": 274,
        "question": "【do-while文】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint i = 5;\ndo {\nSystem.out.println(i);\ni++;\n} while (i < 5);",
        "options": [
            "何も表示されない",
            "5",
            "5 6",
            "無限ループになる"
        ],
        "answer": 1,
        "explanation": "do-while 文は「先に処理を実行してから条件を評価」します。\n\n  int i = 5;\n  do {\n      System.out.println(i);  // ← 先に実行（i=5 を表示）\n      i++;                     // i が 6 になる\n  } while (i < 5);             // 6 < 5 は false → ループ終了\n\n条件が最初から false でも1回は実行されるため、「5」が1回表示されます。\n\n・選択肢1: do-while は1回必ず実行されるため誤りです。\n・選択肢2: 正解。「5」が1回表示される。\n・選択肢3: ループは1回で終了するため、6は表示されません。\n・選択肢4: 6 < 5 は false なので無限ループになりません。",
        "category": "総合問題"
    },
    {
        "id": 275,
        "question": "【do-while文 と while文の違い】\ndo-while文の特徴として正しいものを選べ。",
        "options": [
            "条件がfalseでも必ず1回はループ内の処理が実行される。",
            "条件がfalseの場合、ループ内の処理は1度も実行されない。",
            "do-while文はwhileキーワードを使用しない。",
            "do-while文ではbreak文が使用できない。"
        ],
        "answer": 0,
        "explanation": "while文とdo-while文の違い:\n\n  while文:     条件を評価 → 真なら実行（最初から偽なら0回）\n  do-while文:  実行 → 条件を評価（必ず最低1回実行される）\n\n・選択肢1: 正解。条件が最初からfalseでも必ず1回ループ内処理が実行されます。\n・選択肢2: while文の特徴であり、do-while の特徴ではありません。\n・選択肢3: do-while文も while キーワードを末尾で使用します。\n・選択肢4: do-while文でも break 文は使用可能です。",
        "category": "総合問題"
    },
    {
        "id": 276,
        "question": "【三項演算子】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint score = 75;\nString result = (score >= 60) ? \"合格\" : \"不合格\";\nSystem.out.println(result);",
        "options": [
            "合格",
            "不合格",
            "true",
            "コンパイルエラー"
        ],
        "answer": 0,
        "explanation": "三項演算子の構文:\n\n  条件式 ? 真のときの値 : 偽のときの値\n\n  score = 75 → 75 >= 60 は true → \"合格\" が代入される\n\n・選択肢1: 正解。score(75) >= 60 は true なので「合格」が表示される。\n・選択肢2: 条件が false のときの値。score >= 60 は true なので誤り。\n・選択肢3: true/false はboolean値であり、三項演算子の結果は文字列です。\n・選択肢4: 正しい構文のためコンパイルエラーはありません。\n\n【ポイント】\n  三項演算子は if-else 文の短縮形として使える。\n  String result = score >= 60 ? \"合格\" : \"不合格\";\n  ↓ 同義\n  if (score >= 60) { result = \"合格\"; } else { result = \"不合格\"; }",
        "category": "総合問題"
    },
    {
        "id": 277,
        "question": "【三項演算子（ネスト）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nint x = 10;\nString msg = (x > 0) ? \"正\" : (x < 0) ? \"負\" : \"ゼロ\";\nSystem.out.println(msg);",
        "options": [
            "負",
            "ゼロ",
            "正",
            "コンパイルエラー"
        ],
        "answer": 2,
        "explanation": "三項演算子はネスト（入れ子）にできます。\n\n  x = 10\n  (x > 0) → true → \"正\" が返る\n\n  (x > 0) ? \"正\" : (x < 0) ? \"負\" : \"ゼロ\"\n  → 最初の条件 (10 > 0) が true なので \"正\" が確定。\n\n・選択肢1: x < 0 のときに返る値です。\n・選択肢2: x == 0 のときに返る値です。\n・選択肢3: 正解。x > 0 なので \"正\"。\n・選択肢4: 正しい構文のためコンパイルエラーはありません。",
        "category": "総合問題"
    },
    {
        "id": 278,
        "question": "【Stringクラス（lengthメソッド）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = \"Hello\";\nSystem.out.println(s.length());",
        "options": [
            "4",
            "5",
            "6",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "String の length() メソッドは文字列の文字数（長さ）を返します。\n\"Hello\" は H, e, l, l, o の5文字なので length() は 5 を返します。\n\n・選択肢1: 4 は \"Hell\" の文字数です。インデックスと混同しないように注意。\n・選択肢2: 正解。\"Hello\" の文字数は 5。\n・選択肢3: 6 は誤りです。\n・選択肢4: 正しいメソッドのためコンパイルエラーはありません。\n\n【ポイント】\n  配列の要素数は array.length（フィールド）\n  文字列の文字数は string.length()（メソッド・括弧あり）",
        "category": "総合問題"
    },
    {
        "id": 279,
        "question": "【Stringクラス（substringメソッド）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = \"Java Programming\";\nSystem.out.println(s.substring(0, 4));",
        "options": [
            "Java",
            "Jav",
            "ava",
            "Java P"
        ],
        "answer": 0,
        "explanation": "substring(開始インデックス, 終了インデックス) は\n開始インデックス以上、終了インデックス未満の部分文字列を返します。\n\n  \"Java Programming\"\n   0123456789...\n\n  substring(0, 4) → インデックス0から3まで → \"Java\"\n\n・選択肢1: 正解。\"Java\" が返ります。\n・選択肢2: \"Jav\" は substring(0, 3) の結果です。\n・選択肢3: \"ava\" は substring(1, 4) の結果です。\n・選択肢4: \"Java P\" は substring(0, 6) の結果です。\n\n【ポイント】\n  substring(a, b) → インデックス a 以上 b 未満（b は含まない）",
        "category": "総合問題"
    },
    {
        "id": 280,
        "question": "【Stringクラス（equalsメソッド）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString a = \"Hello\";\nString b = \"hello\";\nSystem.out.println(a.equals(b));\nSystem.out.println(a.equalsIgnoreCase(b));",
        "options": [
            "true / true",
            "false / true",
            "false / false",
            "true / false"
        ],
        "answer": 1,
        "explanation": "・equals(str) : 大文字・小文字を区別して比較します。\n・equalsIgnoreCase(str) : 大文字・小文字を区別せずに比較します。\n\n  \"Hello\".equals(\"hello\")           → false（大文字・小文字が異なる）\n  \"Hello\".equalsIgnoreCase(\"hello\") → true（大文字・小文字を無視）\n\n・選択肢1: equals は大文字・小文字を区別するため false です。\n・選択肢2: 正解。false / true。\n・選択肢3: equalsIgnoreCase は大文字・小文字を無視するため true です。\n・選択肢4: equalsIgnoreCase で false になることはありません。\n\n【ポイント】\n  文字列の比較は必ず equals() を使う（== は参照比較のため使わない）。",
        "category": "総合問題"
    },
    {
        "id": 281,
        "question": "【Stringクラス（==による比較の注意）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s1 = new String(\"Java\");\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);\nSystem.out.println(s1.equals(s2));",
        "options": [
            "true / true",
            "false / false",
            "false / true",
            "true / false"
        ],
        "answer": 2,
        "explanation": "== はオブジェクトの参照（メモリアドレス）を比較します。\nnew String() でそれぞれ別のオブジェクトを作ると、\n中身が同じでも別の参照になるため == は false になります。\n\n  s1 == s2 → false（異なるオブジェクト）\n  s1.equals(s2) → true（中身が同じ \"Java\"）\n\n・選択肢1: == が true になるのはリテラルの文字列プールを使う場合。\n・選択肢2: equals は内容を比較するため true になります。\n・選択肢3: 正解。false / true。\n・選択肢4: equals が false になることはありません。\n\n【ポイント】\n  String の比較には必ず equals() を使う！\n  == は参照の比較であり、内容の比較ではない。",
        "category": "総合問題"
    },
    {
        "id": 282,
        "question": "【ラッパークラス（Integer.parseInt）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = \"42\";\nint n = Integer.parseInt(s);\nSystem.out.println(n + 8);",
        "options": [
            "428",
            "50",
            "コンパイルエラー",
            "実行時エラー"
        ],
        "answer": 1,
        "explanation": "Integer.parseInt(文字列) は文字列を int 型の数値に変換します。\n\n  String s = \"42\";\n  int n = Integer.parseInt(s);  // n = 42（数値）\n  System.out.println(n + 8);   // 42 + 8 = 50\n\n・選択肢1: 428 は文字列の連結です。n は int型なので数値の足し算になります。\n・選択肢2: 正解。42 + 8 = 50。\n・選択肢3: Integer.parseInt は正しいメソッドです。\n・選択肢4: \"42\" は数値に変換できる文字列のため実行時エラーは発生しません。\n\n【ポイント】\n  数値に変換できない文字列（\"abc\"など）を parseInt するとNumberFormatException が発生します。",
        "category": "総合問題"
    },
    {
        "id": 283,
        "question": "【ラッパークラス（オートボクシング）】\n以下のコードの説明として正しいものを選べ。\n\n---Java---\nInteger a = 100;\nint b = a;\nSystem.out.println(b);",
        "options": [
            "コンパイルエラーが発生する。Integer型はint型に代入できない。",
            "オートボクシング／アンボクシングにより自動的に変換され、100が表示される。",
            "実行時例外（NullPointerException）が発生する。",
            "0が表示される。"
        ],
        "answer": 1,
        "explanation": "オートボクシング（Auto Boxing）とは、プリミティブ型とラッパークラス型を\n自動的に変換する仕組みです。\n\n  Integer a = 100;   // int → Integer に自動変換（ボクシング）\n  int b = a;         // Integer → int に自動変換（アンボクシング）\n\n・選択肢1: Java 5以降はオートボクシングにより自動変換されるためエラーなし。\n・選択肢2: 正解。自動変換されて 100 が表示される。\n・選択肢3: null ではないため NullPointerException は発生しません。\n・選択肢4: 0 ではなく 100 が表示されます。\n\n【ポイント】\n  ボクシング  : プリミティブ → ラッパークラス（例: int → Integer）\n  アンボクシング: ラッパークラス → プリミティブ（例: Integer → int）",
        "category": "総合問題"
    },
    {
        "id": 284,
        "question": "【抽象クラス（abstract）の宣言】\n抽象クラスの説明として正しいものを選べ。",
        "options": [
            "抽象クラスはnewキーワードで直接インスタンスを生成できる。",
            "抽象クラスはabstractメソッドを必ず1つ以上含まなければならない。",
            "抽象クラスはabstractキーワードを使って宣言し、直接インスタンス化できない。",
            "抽象クラスを継承したサブクラスは、抽象メソッドをオーバーライドしなくてよい。"
        ],
        "answer": 2,
        "explanation": "抽象クラスの特徴:\n・abstract キーワードで宣言する\n・直接インスタンス化できない（new できない）\n・抽象メソッド（abstract void メソッド名();）を含めることができる\n・抽象メソッドがなくても abstract クラスにはできる\n\n・選択肢1: 抽象クラスは new でインスタンス化できません。\n・選択肢2: 抽象メソッドが1つも無い abstract クラスも作れます。\n・選択肢3: 正解。abstract キーワードで宣言し、直接インスタンス化できない。\n・選択肢4: 抽象クラスを継承した具象クラスは抽象メソッドを必ずオーバーライドしなければなりません（しなければコンパイルエラー）。",
        "category": "総合問題"
    },
    {
        "id": 285,
        "question": "【抽象クラス（抽象メソッドのオーバーライド）】\n以下のコードでコンパイルエラーが発生するクラスを選べ。\n\n---Java---\nabstract class Shape {\nabstract void draw();\n}",
        "options": [
            "class Circle extends Shape { public void draw() { System.out.println(\"○\"); } }",
            "class Triangle extends Shape { }",
            "abstract class Square extends Shape { }",
            "class Star extends Shape { public void draw() { } }"
        ],
        "answer": 1,
        "explanation": "抽象クラスを継承した具象クラス（abstractではないクラス）は、\n親クラスのすべての抽象メソッドをオーバーライドしなければなりません。\n\n・選択肢1: draw() を正しく実装しているためエラーなし。\n・選択肢2: 正解。draw() を実装していないためコンパイルエラー。\n・選択肢3: abstract クラスが abstract クラスを継承する場合、\n  抽象メソッドの実装は不要です。エラーなし。\n・選択肢4: 空のメソッドでも実装とみなされるためエラーなし。",
        "category": "総合問題"
    },
    {
        "id": 286,
        "question": "【finalキーワード（変数）】\n以下のコードでコンパイルエラーになる行として正しいものを選べ。\n\n---Java---\nfinal int MAX = 100;  // A\nMAX = 200;            // B\nSystem.out.println(MAX);",
        "options": [
            "A行（final int MAX = 100;）",
            "B行（MAX = 200;）",
            "A行とB行の両方",
            "エラーは発生しない"
        ],
        "answer": 1,
        "explanation": "final 変数は一度値が代入されると変更できません（定数）。\n\n  final int MAX = 100;  // ← 初期化（OK）\n  MAX = 200;            // ← 再代入（コンパイルエラー！）\n\n・選択肢1: 初期化はOKです。\n・選択肢2: 正解。final 変数への再代入はコンパイルエラー。\n・選択肢3: A行はエラーになりません。\n・選択肢4: B行はエラーになります。\n\n【ポイント】\n  final 変数 = 定数（一度代入したら変更不可）\n  命名規約: 定数は全て大文字（例: MAX_VALUE, PI）",
        "category": "総合問題"
    },
    {
        "id": 287,
        "question": "【finalキーワード（メソッドとクラス）】\nfinalキーワードの説明として正しいものを選べ。",
        "options": [
            "finalが付いたクラスはサブクラスを持つことができる。",
            "finalが付いたメソッドはサブクラスでオーバーライドできない。",
            "finalが付いた変数には何度でも値を再代入できる。",
            "finalが付いたクラスはインターフェイスを実装できない。"
        ],
        "answer": 1,
        "explanation": "final キーワードの用途:\n\n  final 変数  → 再代入不可（定数）\n  final メソッド → サブクラスでオーバーライド不可\n  final クラス → 継承不可（サブクラスを作れない）\n\n・選択肢1: final クラスはサブクラス（継承）を持てません。\n・選択肢2: 正解。final メソッドはオーバーライドできません。\n・選択肢3: final 変数への再代入はできません。\n・選択肢4: final クラスでもインターフェイスの実装は可能です\n  （例：String クラスは final ですが Serializable 等を実装しています）。",
        "category": "総合問題"
    },
    {
        "id": 288,
        "question": "【instanceofキーワード】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Animal { }\nclass Dog extends Animal { }\n\n// mainメソッド内\nDog d = new Dog();\nSystem.out.println(d instanceof Dog);\nSystem.out.println(d instanceof Animal);",
        "options": [
            "true / false",
            "false / true",
            "true / true",
            "false / false"
        ],
        "answer": 2,
        "explanation": "instanceof 演算子はオブジェクトが特定の型のインスタンスかどうかを判定します。\n\n  Dog d = new Dog();\n\n  d instanceof Dog    → Dog のインスタンスか？ → true\n  d instanceof Animal → Animal のインスタンスか？ → true\n  （Dog は Animal を継承しているため、Animal のインスタンスでもある）\n\n・選択肢1: instanceof Animal は継承関係により true になります。\n・選択肢2: instanceof Dog は true です。\n・選択肢3: 正解。どちらも true。\n・選択肢4: どちらも false になることはありません。\n\n【ポイント】\n  サブクラスのインスタンスはスーパークラスの instanceof でも true になる。",
        "category": "総合問題"
    },
    {
        "id": 289,
        "question": "【instanceofキーワード（nullの場合）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = null;\nSystem.out.println(s instanceof String);",
        "options": [
            "true",
            "false",
            "コンパイルエラー",
            "実行時例外（NullPointerException）が発生する"
        ],
        "answer": 1,
        "explanation": "null に対して instanceof を使うと、型に関わらず false を返します。\nNullPointerException は発生しません。\n\n  String s = null;\n  s instanceof String → false\n\n・選択肢1: null は何の型のインスタンスでもないため true にはなりません。\n・選択肢2: 正解。null instanceof 型 は常に false。\n・選択肢3: コンパイルエラーは発生しません。\n・選択肢4: instanceof は null でも例外を発生させません。\n\n【ポイント】\n  null instanceof 任意の型 → 常に false（例外なし）",
        "category": "総合問題"
    },
    {
        "id": 290,
        "question": "【superキーワード（スーパークラスのメソッド呼び出し）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Animal {\nvoid speak() { System.out.println(\"...\"); }\n}\nclass Dog extends Animal {\nvoid speak() {\nsuper.speak();\nSystem.out.println(\"ワン\");\n}\n}\n\n// mainメソッド内\nDog d = new Dog();\nd.speak();",
        "options": [
            "ワン",
            "...",
            "...\nワン",
            "ワン\n..."
        ],
        "answer": 2,
        "explanation": "super.メソッド名() でスーパークラスのメソッドを呼び出せます。\n\n  Dog.speak() の中で:\n    1. super.speak() → Animal.speak() が実行 → \"...\" が表示\n    2. System.out.println(\"ワン\") → \"ワン\" が表示\n\nよって表示順は「...」→「ワン」。\n\n・選択肢1: \"ワン\"だけでは super.speak() の出力が抜けています。\n・選択肢2: \"...\"だけではその後の \"ワン\" が抜けています。\n・選択肢3: 正解。\"...\" → \"ワン\" の順。\n・選択肢4: super.speak() を先に呼んでいるため逆順にはなりません。",
        "category": "総合問題"
    },
    {
        "id": 291,
        "question": "【superキーワード（コンストラクタ）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nclass Vehicle {\nVehicle(String type) {\nSystem.out.println(\"乗り物: \" + type);\n}\n}\nclass Car extends Vehicle {\nCar() {\nsuper(\"自動車\");\nSystem.out.println(\"Carコンストラクタ\");\n}\n}\n\n// mainメソッド内\nCar c = new Car();",
        "options": [
            "Carコンストラクタ",
            "乗り物: 自動車",
            "乗り物: 自動車\nCarコンストラクタ",
            "コンパイルエラー"
        ],
        "answer": 2,
        "explanation": "super(引数) はスーパークラスのコンストラクタを呼び出します。\n必ずサブクラスのコンストラクタの最初の文として記述します。\n\n  Car() の実行順:\n    1. super(\"自動車\") → Vehicle(\"自動車\") が実行 → \"乗り物: 自動車\" 表示\n    2. System.out.println(\"Carコンストラクタ\") → \"Carコンストラクタ\" 表示\n\n・選択肢1: \"Carコンストラクタ\" だけでは Vehicle の出力が抜けています。\n・選択肢2: \"乗り物: 自動車\" だけでは Car の出力が抜けています。\n・選択肢3: 正解。\"乗り物: 自動車\" → \"Carコンストラクタ\" の順。\n・選択肢4: super() は正しい使い方のためコンパイルエラーはありません。",
        "category": "総合問題"
    },
    {
        "id": 292,
        "question": "【Stringクラス（containsメソッド）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = \"Hello World\";\nSystem.out.println(s.contains(\"World\"));\nSystem.out.println(s.contains(\"world\"));",
        "options": [
            "true / true",
            "true / false",
            "false / true",
            "false / false"
        ],
        "answer": 1,
        "explanation": "contains(CharSequence) メソッドは指定した文字列が含まれているか\n大文字・小文字を区別して判定します。\n\n  \"Hello World\".contains(\"World\") → true（含まれる）\n  \"Hello World\".contains(\"world\") → false（大文字・小文字が異なる）\n\n・選択肢1: contains は大文字・小文字を区別するため \"world\" は false です。\n・選択肢2: 正解。true / false。\n・選択肢3・4: \"World\" は含まれるため必ず true です。\n\n【ポイント】\n  大文字・小文字を無視して検索したい場合は\n  s.toLowerCase().contains(\"world\") のように変換してから使う。",
        "category": "総合問題"
    },
    {
        "id": 293,
        "question": "【Stringクラス（replaceメソッド）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nString s = \"Java is fun\";\nString result = s.replace(\"fun\", \"great\");\nSystem.out.println(result);\nSystem.out.println(s);",
        "options": [
            "Java is great / Java is great",
            "Java is great / Java is fun",
            "Java is fun / Java is great",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "replace(置換前, 置換後) は置換した新しいStringを返します。\n元の文字列 s は変更されません（Stringは不変オブジェクト）。\n\n  String s = \"Java is fun\";\n  String result = s.replace(\"fun\", \"great\");\n  // result → \"Java is great\"\n  // s      → \"Java is fun\"（変わらない）\n\n・選択肢1: s は変更されないため誤りです。\n・選択肢2: 正解。result が変更後、s は元のまま。\n・選択肢3: result と s の内容が逆です。\n・選択肢4: 正しいメソッドのためコンパイルエラーはありません。\n\n【ポイント】\n  Stringは不変（immutable）オブジェクト。\n  文字列を「変更」するメソッドは常に新しいStringを返す。",
        "category": "総合問題"
    },
    {
        "id": 294,
        "question": "【ラッパークラス（Integer.toString / String.valueOf）】\nint型の変数numの値を文字列に変換する方法として\n誤っているものを選べ。\n\n---Java---\nint num = 42;",
        "options": [
            "String s = Integer.toString(num);",
            "String s = String.valueOf(num);",
            "String s = \"\" + num;",
            "String s = (String) num;"
        ],
        "answer": 3,
        "explanation": "int 型を String に変換する主な方法:\n\n  ① Integer.toString(num)  → Integerクラスのstaticメソッド\n  ② String.valueOf(num)    → Stringクラスのstaticメソッド\n  ③ \"\" + num              → 空文字列との連結による暗黙変換\n\n・選択肢1〜3: すべて正しい変換方法です。\n・選択肢4: 正解（誤り）。(String) num はキャスト演算子ですが、\n  int は String のサブクラスではないためキャストはできません。\n  コンパイルエラーが発生します。\n\n【ポイント】\n  int → String の変換:\n    String.valueOf(n)     … 推奨（null安全）\n    Integer.toString(n)   … 同様\n    \"\" + n                … 簡便だが可読性が下がる場合あり\n    (String) n            … 不可（コンパイルエラー）",
        "category": "総合問題"
    },
    {
        "id": 295,
        "question": "【StringBuilderクラス（appendメソッド）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nStringBuilder sb = new StringBuilder(\"Hello\");\nsb.append(\" World\");\nsb.append(\"!\");\nSystem.out.println(sb.toString());",
        "options": [
            "Hello",
            "Hello World",
            "Hello World!",
            "コンパイルエラー"
        ],
        "answer": 2,
        "explanation": "StringBuilder は文字列を効率よく組み立てるためのクラスです。\nappend() メソッドで末尾に文字列を追加し、toString() で String に変換します。\n\n  StringBuilder sb = new StringBuilder(\"Hello\");\n  sb.append(\" World\");  // → \"Hello World\"\n  sb.append(\"!\");       // → \"Hello World!\"\n  sb.toString()         // → \"Hello World!\"\n\n・選択肢1: \"Hello\" のみでは append の結果が反映されていません。\n・選択肢2: \"Hello World\" は1回目の append のみの結果です。\n・選択肢3: 正解。2回の append の結果 \"Hello World!\" が表示されます。\n・選択肢4: StringBuilder は java.lang パッケージのためimport不要です。",
        "category": "総合問題"
    },
    {
        "id": 296,
        "question": "【StringBuilderクラス（String との違い）】\nStringBuilderクラスの説明として正しいものを選べ。",
        "options": [
            "StringBuilderはStringと同様に不変（immutable）オブジェクトである。",
            "StringBuilderは文字列を変更するたびに新しいオブジェクトを生成する。",
            "StringBuilderは可変（mutable）オブジェクトであり、文字列の変更が効率的にできる。",
            "StringBuilderはimport文なしでは使用できない。"
        ],
        "answer": 2,
        "explanation": "String と StringBuilder の最大の違いは「不変か可変か」です。\n\n  String（不変・immutable）:\n    ・メソッドを呼ぶたびに新しいオブジェクトが生成される\n    ・ループ内で文字列連結を繰り返すと大量のオブジェクトが作られ非効率\n\n  StringBuilder（可変・mutable）:\n    ・同じオブジェクトの内部バッファを書き換えるため効率的\n    ・ループ内での文字列組み立てに向いている\n\n・選択肢1: String が不変。StringBuilder は可変です。説明が逆。\n・選択肢2: 新しいオブジェクトを生成するのは String の特性です。\n・選択肢3: 正解。StringBuilder は可変で文字列変更が効率的です。\n・選択肢4: StringBuilder は java.lang に含まれるためimport不要です。\n\n【ポイント】\n  ループで文字列を大量に結合する場合は StringBuilder を使う。\n  String で += を繰り返すと性能が悪くなる。",
        "category": "総合問題"
    },
    {
        "id": 297,
        "question": "【Enumの宣言と使い方】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nenum Season { SPRING, SUMMER, AUTUMN, WINTER }\n\n// mainメソッド内\nSeason s = Season.AUTUMN;\nSystem.out.println(s);\nSystem.out.println(s.ordinal());",
        "options": [
            "AUTUMN / 1",
            "AUTUMN / 2",
            "2 / AUTUMN",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "enum（列挙型）は定数の集合を定義する型です。\n\n  enum Season { SPRING, SUMMER, AUTUMN, WINTER }\n  // 順番: 0番=SPRING, 1番=SUMMER, 2番=AUTUMN, 3番=WINTER\n\n  Season.AUTUMN.ordinal() → 2（0始まりのインデックス）\n  System.out.println(s)   → \"AUTUMN\"（enum の名前が文字列として出力される）\n\n・選択肢1: AUTUMN の ordinal は 2 であり 1 ではありません。\n・選択肢2: 正解。AUTUMN / 2。\n・選択肢3: 数値が先に出力されることはありません。\n・選択肢4: 正しい構文のためコンパイルエラーはありません。\n\n【ポイント】\n  ordinal() → enumの宣言順インデックス（0始まり）\n  name()    → enumの定数名（文字列）\n  toString()→ name() と同じ（デフォルト動作）",
        "category": "総合問題"
    },
    {
        "id": 298,
        "question": "【Enumとswitch文】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nenum Day { MON, TUE, WED }\n\n// mainメソッド内\nDay d = Day.WED;\nswitch (d) {\ncase MON:\nSystem.out.println(\"月曜日\");\nbreak;\ncase WED:\nSystem.out.println(\"水曜日\");\nbreak;\ndefault:\nSystem.out.println(\"その他\");\n}",
        "options": [
            "月曜日",
            "水曜日",
            "その他",
            "コンパイルエラー"
        ],
        "answer": 1,
        "explanation": "switch 文で enum を使う場合、case には「enum名なし」で定数名だけを記述します。\n\n  Day d = Day.WED;\n  switch (d) {\n      case WED: → d が WED なのでこの case にマッチ\n  }\n\n・選択肢1: d は WED なので MON の case は実行されません。\n・選択肢2: 正解。WED にマッチして「水曜日」が表示されます。\n・選択肢3: WED に一致するため default は実行されません。\n・選択肢4: enum の switch 文は正しい構文です。\n\n【ポイント】\n  switch で enum を使う場合は case に「enum名.」は不要。\n  case MON: ← OK  / case Day.MON: ← コンパイルエラー",
        "category": "総合問題"
    },
    {
        "id": 299,
        "question": "【可変長引数（varargs）】\n以下のメソッドの説明として正しいものを選べ。\n\n---Java---\npublic int sum(int... nums) {\nint total = 0;\nfor (int n : nums) {\ntotal += n;\n}\nreturn total;\n}",
        "options": [
            "このメソッドはint型の引数を必ず3つ渡さなければならない。",
            "このメソッドは引数なしで呼び出すとコンパイルエラーになる。",
            "このメソッドはint型の引数を0個以上の任意の数で呼び出せる。",
            "可変長引数（...）はJavaには存在しない構文である。"
        ],
        "answer": 2,
        "explanation": "可変長引数（varargs）は「...」で表記し、メソッドに任意の個数の引数を渡せます。\nメソッド内では配列として扱われます。\n\n  sum()           → nums = {} （0要素）\n  sum(1, 2)       → nums = {1, 2}\n  sum(1, 2, 3, 4) → nums = {1, 2, 3, 4}\n\n・選択肢1: 引数の個数は任意です。3つに固定されません。\n・選択肢2: 引数なし（0個）でも正常に動作します。total = 0 が返ります。\n・選択肢3: 正解。0個以上の任意の数で呼び出せます。\n・選択肢4: 可変長引数はJavaの正式な構文です（Java 5以降）。\n\n【ポイント】\n  可変長引数は必ずメソッドの最後の引数にする。\n  void method(String s, int... nums) ← OK\n  void method(int... nums, String s) ← コンパイルエラー",
        "category": "総合問題"
    },
    {
        "id": 300,
        "question": "【ジェネリクス（型パラメータの役割）】\n以下のコードの説明として正しいものを選べ。\n\n---Java---\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.add(100);    // ← A",
        "options": [
            "A行でコンパイルエラーが発生する。",
            "A行は正常に実行され、listに\"Java\"と100が格納される。",
            "A行で実行時例外が発生する。",
            "ジェネリクスを指定すると要素を追加できなくなる。"
        ],
        "answer": 0,
        "explanation": "ジェネリクス（型パラメータ）は「このコレクションに入れられる型」を\nコンパイル時に制限します。\n\n  ArrayList<String> list = new ArrayList<>();\n  list.add(\"Java\");  // OK（String型）\n  list.add(100);     // コンパイルエラー（int/Integer型はString型ではない）\n\n・選択肢1: 正解。A行でコンパイルエラーが発生します。\n・選択肢2: ジェネリクスにより型チェックが行われるためエラーになります。\n・選択肢3: エラーはコンパイル時に発生します（実行時ではありません）。\n・選択肢4: ジェネリクスは要素の追加を禁止しません。正しい型なら追加できます。\n\n【ポイント】\n  ジェネリクスにより「型安全性」がコンパイル時に保証されます。\n  実行時のキャストエラーを防ぐ重要な機能です。",
        "category": "総合問題"
    },
    {
        "id": 301,
        "question": "【ジェネリクス（キャストが不要な理由）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Hello\");\nString s = list.get(0);\nSystem.out.println(s.length());",
        "options": [
            "コンパイルエラーが発生する。キャストが必要。",
            "実行時にClassCastExceptionが発生する。",
            "5",
            "コンパイルエラーが発生する。list.get()はObject型を返す。"
        ],
        "answer": 2,
        "explanation": "ジェネリクスを使用すると、get() の戻り値が指定した型で返されるため\n明示的なキャストが不要になります。\n\n  ArrayList<String> list = new ArrayList<>();\n  list.add(\"Hello\");\n  String s = list.get(0);    // キャスト不要で String として取得\n  s.length()                 // \"Hello\" の文字数 = 5\n\n・選択肢1: ジェネリクスにより String 型で返されるため、キャスト不要です。\n・選択肢2: 型が一致しているため ClassCastException は発生しません。\n・選択肢3: 正解。\"Hello\".length() = 5 が表示されます。\n・選択肢4: ジェネリクスあり → String 型で返る（Object 型にはなりません）。\n\n【ポイント】\n  ジェネリクスなし: Object o = list.get(0); String s = (String) o;（キャスト必要）\n  ジェネリクスあり: String s = list.get(0);（キャスト不要）",
        "category": "総合問題"
    },
    {
        "id": 302,
        "question": "【try-with-resources】\ntry-with-resources構文の説明として正しいものを選べ。",
        "options": [
            "finally ブロックの代わりであり、例外のキャッチには使用できない。",
            "try()の括弧内で宣言したリソースは、tryブロック終了後に\n自動的にclose()メソッドが呼ばれる。",
            "try-with-resourcesを使うと、catchブロックは省略できない。",
            "try-with-resourcesはAutoCloseableを実装していないクラスでも使用できる。"
        ],
        "answer": 1,
        "explanation": "try-with-resources 構文は、リソース（ファイルや接続など）を\ntry ブロック終了時に自動的にクローズする仕組みです。\n\n  try (BufferedReader br = new BufferedReader(...)) {\n      // 処理\n  } catch (IOException e) {\n      // 例外処理\n  }\n  // ← try ブロック終了時に自動で br.close() が呼ばれる\n\n・選択肢1: try-with-resources に catch を追加することも可能です。\n・選択肢2: 正解。try 終了後に自動でclose()が呼ばれます。\n・選択肢3: catch は省略できます（throws で例外を宣言している場合など）。\n・選択肢4: AutoCloseable（またはCloseable）を実装していないクラスは\n  try-with-resources で使えません。\n\n【ポイント】\n  AutoCloseable インターフェイスを実装しているクラスのみ\n  try-with-resources で使用可能。代表例: InputStream, Connection など。",
        "category": "総合問題"
    },
    {
        "id": 303,
        "question": "【ArrayListのメソッド（remove / contains）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nimport java.util.ArrayList;\n\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.add(\"Python\");\nlist.add(\"Ruby\");\nlist.remove(\"Python\");\nSystem.out.println(list.contains(\"Python\"));\nSystem.out.println(list.size());",
        "options": [
            "true / 3",
            "false / 2",
            "true / 2",
            "false / 3"
        ],
        "answer": 1,
        "explanation": "ArrayList の主なメソッド:\n  add(要素)         → 末尾に追加\n  remove(要素)      → 指定した値の要素を削除（最初に見つかった1件）\n  contains(要素)    → 要素が含まれるか（boolean）\n  size()            → 現在の要素数\n\n操作の流れ:\n  list = [\"Java\", \"Python\", \"Ruby\"]\n  list.remove(\"Python\") → [\"Java\", \"Ruby\"]（\"Python\" が削除される）\n  list.contains(\"Python\") → false（削除済みのため存在しない）\n  list.size() → 2\n\n・選択肢1: contains は false、size は 2 のため誤りです。\n・選択肢2: 正解。false / 2。\n・選択肢3: contains(\"Python\") は false です。\n・選択肢4: size は 2（削除後）なので 3 は誤りです。",
        "category": "総合問題"
    },
    {
        "id": 304,
        "question": "【HashMapのメソッド（containsKey / keySet）】\n以下のコードの実行結果として正しいものを選べ。\n\n---Java---\nimport java.util.HashMap;\n\nHashMap<String, Integer> map = new HashMap<>();\nmap.put(\"apple\", 100);\nmap.put(\"banana\", 200);\nSystem.out.println(map.containsKey(\"apple\"));\nSystem.out.println(map.containsKey(\"grape\"));\nSystem.out.println(map.size());",
        "options": [
            "true / true / 2",
            "true / false / 2",
            "false / true / 2",
            "true / false / 3"
        ],
        "answer": 1,
        "explanation": "HashMap の主なメソッド:\n  put(key, value)     → キーと値を追加（キーが重複する場合は上書き）\n  get(key)            → キーに対応する値を取得\n  containsKey(key)    → キーが存在するか（boolean）\n  containsValue(value)→ 値が存在するか（boolean）\n  size()              → エントリ数\n\n操作の流れ:\n  map = {\"apple\": 100, \"banana\": 200}\n  map.containsKey(\"apple\") → true（存在する）\n  map.containsKey(\"grape\") → false（存在しない）\n  map.size() → 2（エントリは2件）\n\n・選択肢1: \"grape\" は存在しないため 2つ目は false です。\n・選択肢2: 正解。true / false / 2。\n・選択肢3: \"apple\" は存在するため1つ目は true です。\n・選択肢4: エントリ数は 2 なので size は 3 ではありません。\n\n【ポイント】\n  containsKey(key)   → キーの存在確認\n  containsValue(val) → 値の存在確認\n  keySet()           → 全キーの Set を取得\n  values()           → 全値の Collection を取得",
        "category": "総合問題"
    },
    {
        "id": 305,
        "question": "【リポジトリの使い方】\nSpring Data JPAにおけるリポジトリの使い方として正しいものを選べ。",
        "options": [
            "インターフェースに JpaRepository を継承させることで、基本的なCRUD操作が利用できる。",
            "リポジトリはクラスとして定義し、@Repository アノテーションを付けて使用する。",
            "リポジトリを利用するには、自分でSQL文をメソッド内に記述する必要がある。",
            "JpaRepository を継承すると、メソッドをすべて手動でオーバーライドしなければならない。"
        ],
        "answer": 0,
        "explanation": "Spring Data JPAでは、インターフェースに JpaRepository<エンティティ型, ID型> を継承させるだけで、findAll・findById・save・deleteなどの基本的なCRUD操作が自動的に利用できます。クラスではなくインターフェースとして定義し、SQL文の記述も不要です。",
        "category": "Spring"
    },
    {
        "id": 306,
        "question": "【全件検索処理】\n以下のコードの説明として正しいものを選べ。\n\n---java---\nList<Item> items = itemRepository.findAll();\nmodel.addAttribute(\"items\", items);",
        "options": [
            "全件取得した結果をリクエストスコープに保存し、ビューから参照できるようにする。",
            "全件取得した結果をセッションスコープに保存し、複数リクエストをまたいで保持する。",
            "findAll() の結果を直接レスポンスとして返し、ビューには渡さない。",
            "model.addAttribute はデータベースに新しいレコードを追加するメソッドである。"
        ],
        "answer": 0,
        "explanation": "findAll() でDBから全件取得したリストを、model.addAttribute(\"items\", items) でリクエストスコープのModelに追加します。これによりThymeleafなどのビューテンプレートから \"items\" という名前でデータを参照できます。セッションスコープには保存されません。",
        "category": "Spring"
    },
    {
        "id": 307,
        "question": "【JpaRepositoryの主キー検索メソッド】\nJpaRepository において、主キー（ID）で1件のレコードを検索する際に使用するメソッドとして正しいものを選べ。",
        "options": [
            "findById(id) を使用し、結果は Optional 型で返される。",
            "findAll(id) を使用し、結果はリスト型で返される。",
            "findByPrimaryKey(id) を使用し、結果はエンティティ型で直接返される。",
            "getById(id) を使用し、存在しない場合は null が返される。"
        ],
        "answer": 0,
        "explanation": "JpaRepository の主キー検索には findById(id) を使用します。戻り値は Optional<T> 型であり、レコードが存在する場合は Optional.of(entity)、存在しない場合は Optional.empty() が返されます。findAll は全件取得用、findByPrimaryKey は存在しないメソッドです。",
        "category": "Spring"
    },
    {
        "id": 308,
        "question": "【saveメソッドの使い方】\nJpaRepository の save メソッドの使い方として正しいものを選べ。",
        "options": [
            "新規登録と更新の両方に使用でき、IDが未設定なら INSERT、設定済みなら UPDATE が行われる。",
            "save メソッドは新規登録専用であり、更新には別途 update メソッドを使用する必要がある。",
            "save メソッドを呼び出すと、即座にデータベースへ反映され、戻り値は常に void である。",
            "save メソッドはIDを持つエンティティにのみ使用でき、新規登録には使用できない。"
        ],
        "answer": 0,
        "explanation": "JpaRepository の save(entity) メソッドは新規登録と更新の両方に対応しています。エンティティのIDが null（未設定）の場合は INSERT、IDが既に設定済みの場合は UPDATE が自動的に判断されて実行されます。戻り値は保存されたエンティティ（T型）であり void ではありません。",
        "category": "Spring"
    },
    {
        "id": 309,
        "question": "【7章 外部参照】\n@ManyToOneアノテーションの意味として正しいものを選べ。",
        "options": [
            "エンティティ間の1対1の関連を定義する。",
            "エンティティ間の1対多の関連を定義する。",
            "エンティティ間の多対1の関連を定義する。",
            "エンティティ間の多対多の関連を定義する。"
        ],
        "answer": 2,
        "explanation": "@ManyToOneアノテーションは、エンティティ間の「多対1」の関連を定義するために使用します。（例：複数の社員（Many）が1つの部署（One）に所属する関連）",
        "category": "Spring"
    },
    {
        "id": 310,
        "question": "【7章 外部参照】\n@JoinColumnアノテーションの機能として正しいものを選べ。",
        "options": [
            "エンティティの主キーとなる列を指定する。",
            "外部キーとして利用される列を指定する。",
            "結合対象となる別のテーブル名を指定する。",
            "関連を持たない独立した列を新たに定義する。"
        ],
        "answer": 1,
        "explanation": "@JoinColumnアノテーションは、関連するエンティティを結合する際に、外部キー（Foreign Key）として使用される列を指定するために使用します。",
        "category": "Spring"
    },
    {
        "id": 311,
        "question": "【8章 JPQL】\nJPQLを使用するメリットとして正しいものを選べ。",
        "options": [
            "エンティティクラスを定義せずに、データベースのテーブルを直接操作できる。",
            "特定のデータベース製品に依存した独自の関数を制限なく使用できる。",
            "データベースの種類に依存せず、エンティティを対象としてクエリを記述できる。",
            "実行時にSQLの処理速度を自動的に計測して最適化を行うことができる。"
        ],
        "answer": 2,
        "explanation": "JPQL（Java Persistence Query Language）は、データベースの特定のテーブルや列ではなく、Javaのエンティティクラスやそのフィールドを対象として記述するクエリ言語です。そのため、特定のデータベース製品の種類に依存しないクエリを記述できるメリットがあります。",
        "category": "Spring"
    },
    {
        "id": 312,
        "question": "【8章 JPQL】\nJPQLの記述方法として誤っているものを選べ。",
        "options": [
            "FROM句にはデータベースのテーブル名ではなく、エンティティクラス名を指定する。",
            "検索対象のデータを抽出するため、SELECT句にはデータベースの列名を指定する。",
            "クエリ内に記述するエンティティ名やフィールド名は大文字と小文字が区別される。",
            "SELECTやFROMなどのJPQLのキーワード自体は大文字と小文字が区別されない。"
        ],
        "answer": 1,
        "explanation": "JPQLではデータベースのテーブルや列名を直接指定しません。SELECT句には、エンティティクラスのフィールド名や、エンティティ全体を表す別名（識別変数）を指定します。そのため、データベースの列名を指定するという説明は誤りです。",
        "category": "Spring"
    },
    {
        "id": 313,
        "question": "【8章 JPQL】\n@NamedQueryアノテーションを使用してクエリ（JPQL）を事前定義する場所として正しいものを選べ。",
        "options": [
            "エンティティクラス",
            "リポジトリインターフェース",
            "サービスクラス",
            "コントローラクラス"
        ],
        "answer": 0,
        "explanation": "@NamedQueryアノテーションは、エンティティクラス（@Entityが付与されたクラス）のクラス宣言部などに付与して、静的なクエリ（JPQL）を事前に定義するために使用します。",
        "category": "Spring"
    },
    {
        "id": 314,
        "question": "【8章 JPQL】\n@Queryアノテーションを使用してメソッドに直接クエリ（JPQL）を定義する場所として正しいものを選べ。",
        "options": [
            "エンティティクラス",
            "リポジトリインターフェース",
            "サービスクラス",
            "コントローラクラス"
        ],
        "answer": 1,
        "explanation": "@Queryアノテーションは、リポジトリインターフェースのメソッドに付与して、そのメソッドが実行されたときに実行するクエリ（JPQLやSQL）を直接定義するために使用します。",
        "category": "Spring"
    },
    {
        "id": 315,
        "question": "【一章】\n静的ページと動的ページについて、以下の空欄（A）・（B）に入る組み合わせとして正しいものを選べ。\n「（A）ページとは、サーバー上に保存されたHTMLファイルをそのまま返すページのことである。一方、（B）ページとは、アクセスのたびにプログラムが実行され、内容が変化するページのことである。」",
        "options": [
            "A：動的　／　B：静的",
            "A：静的　／　B：動的",
            "A：静的　／　B：静的",
            "A：動的　／　B：動的"
        ],
        "answer": 1,
        "explanation": "静的ページ（Static）はサーバー上にあるHTMLファイルをそのまま返し、動的ページ（Dynamic）はアクセス時にプログラムが処理を行ってその都度異なる内容を生成します。",
        "category": "Spring"
    },
    {
        "id": 316,
        "question": "【一章】\nHTTPにおけるリクエストとレスポンスの説明として正しいものを選べ。",
        "options": [
            "クライアントがサーバーへデータを送ることをレスポンス、サーバーが結果を返すことをリクエストという。",
            "リクエストはサーバーからクライアントへ送られ、レスポンスはクライアントからサーバーへ送られる。",
            "リクエストはクライアントからサーバーへ送られ、レスポンスはサーバーからクライアントへ返される。",
            "リクエストとレスポンスは同一の通信であり、方向による区別はない。"
        ],
        "answer": 2,
        "explanation": "Webの通信は、クライアント（ブラウザ）からサーバーに対して要求を送る「リクエスト」と、サーバーがその結果を返す「レスポンス」という一連のやり取りで構成されます。",
        "category": "Spring"
    },
    {
        "id": 317,
        "question": "【一章】\nコンテキストパスについて正しいものを選べ。",
        "options": [
            "コンテキストパスとは、URLの中でファイル名の部分のみを指す文字列である。",
            "コンテキストパスとは、Webアプリケーションを識別するためにURLの先頭に付与されるパスのことである。",
            "コンテキストパスはサーバーごとに1つだけ存在し、すべてのアプリケーションで共有される。",
            "コンテキストパスは、ドメイン名（ホスト名）と同じ意味で使われる用語である。"
        ],
        "answer": 1,
        "explanation": "コンテキストパスは、1つのサーバー上で動いている複数のWebアプリケーションを識別するため、URLのルートの直後に付与されるアプリケーション固有のパスです。",
        "category": "Spring"
    },
    {
        "id": 318,
        "question": "【一章】\nSpring FrameworkのWebアプリとDIについて、以下の空欄（A）・（B）に入る組み合わせとして正しいものを選べ。\n「Spring Frameworkは、（A）という仕組みにより、クラスが必要とする依存オブジェクトを外部から自動的に注入する。また、Webアプリ開発では（B）というモジュールが中心的な役割を担う。」",
        "options": [
            "A：DI（依存性の注入）　／　B：Spring MVC",
            "A：MVC（モデルビューコントローラ）　／　B：Spring DI",
            "A：DI（依存性の注入）　／　B：Spring JDBC",
            "A：AOP（アスペクト指向）　／　B：Spring MVC"
        ],
        "answer": 0,
        "explanation": "Springの最大の特徴であるDI（Dependency Injection：依存性の注入）により、オブジェクト間の依存関係が自動的に解決されます。Webアプリ開発ではSpring MVCが使われます。",
        "category": "Spring"
    },
    {
        "id": 319,
        "question": "【二章】\n@Controller が付与されたクラスの特徴として正しいものを選べ。",
        "options": [
            "データベースへのアクセスを担当するクラスであることを示す。",
            "そのクラスがHTTPリクエストを受け付けるコントローラーであることをSpringに認識させる。",
            "クラスをシングルトンとして生成することを禁止するアノテーションである。",
            "HTMLテンプレートを直接定義するためのクラスであることを示す。"
        ],
        "answer": 1,
        "explanation": "クラスに@Controllerアノテーションを付与することで、Springはそのクラスが画面遷移を伴うHTTPリクエストを受け付けるコントローラーであると認識します。",
        "category": "Spring"
    },
    {
        "id": 320,
        "question": "【二章】\n@RequestMapping が付与されたメソッドの特徴として正しいものを選べ。",
        "options": [
            "そのメソッドは、対応するURLへのリクエストが来たときに自動的に呼び出される。",
            "そのメソッドは、アプリケーション起動時に一度だけ自動的に実行される。",
            "そのメソッドは、他のクラスからは呼び出せなくなる。",
            "そのメソッドは、戻り値を必ずvoidにしなければならない。"
        ],
        "answer": 0,
        "explanation": "@RequestMapping（または@GetMapping, @PostMappingなど）を付与することで、指定したURLに対するリクエストが来た際に、そのメソッドが自動的に実行されるようマッピングされます。",
        "category": "Spring"
    },
    {
        "id": 321,
        "question": "【二章】\n@RequestMapping が付与されたメソッドの戻り値として正しいものを選べ。",
        "options": [
            "戻り値は必ずint型でなければならない。",
            "戻り値にはリダイレクト先URLのみが指定でき、テンプレート名は返せない。",
            "戻り値のString値が、遷移先のビュー（テンプレート）名として使用される。",
            "戻り値はHTTPステータスコードを表す数値でなければならない。"
        ],
        "answer": 2,
        "explanation": "コントローラのメソッドがString型の戻り値を返す場合、その文字列は「遷移先の画面（ビュー・テンプレート）の名前」として扱われ、対応するHTMLファイルが表示されます。",
        "category": "Spring"
    },
    {
        "id": 322,
        "question": "【三章】\n絶対パスの説明として正しいものを選べ。",
        "options": [
            "現在のファイルの位置を基準として記述するパスのことである。",
            "「../」などの相対記法を使い、階層をさかのぼって指定するパスのことである。",
            "ルートディレクトリやドメインを起点とし、完全な経路で指定するパスのことである。",
            "ファイル名のみで構成され、ディレクトリ情報を含まないパスのことである。"
        ],
        "answer": 2,
        "explanation": "絶対パスはルートディレクトリ（「/」）やURLのドメイン名から始まる完全な経路指定のことです。逆に現在の位置を基準とするものは相対パスと呼ばれます。",
        "category": "Spring"
    },
    {
        "id": 323,
        "question": "【三章】\nフォワードの説明として正しいものを選べ。",
        "options": [
            "サーバー内部で別のリソースへ処理を引き継ぐため、クライアント側のURLは変化しない。",
            "ブラウザに新しいURLへアクセスするよう指示するため、URLバーの表示が変わる。",
            "フォワードを行うと、リクエストに保持していたデータは必ず破棄される。",
            "フォワードはクライアントとサーバー間で2回の通信が発生する。"
        ],
        "answer": 0,
        "explanation": "フォワードは、サーバー内部で処理を別の画面（テンプレート）に引き継ぐ方式です。クライアントとサーバー間の通信は1回のみで完結するため、ブラウザのURLバーは変化しません。",
        "category": "Spring"
    },
    {
        "id": 324,
        "question": "【三章】\nリダイレクトの説明として正しいものを選べ。",
        "options": [
            "サーバー内部で処理を転送するため、ブラウザのURLバーは変化しない。",
            "サーバーがブラウザに対して別のURLへ再度リクエストするよう指示し、URLバーの表示が変わる。",
            "リダイレクト後も元のリクエストスコープのデータはそのまま引き継がれる。",
            "リダイレクトはサーバー内部の処理であり、クライアントには通知されない。"
        ],
        "answer": 1,
        "explanation": "リダイレクトは、サーバーがブラウザに対して「別のURLへ再リクエストして」と指示を返す方式です。通信が2回発生し、ブラウザのURLバーが新しいURLに変わります。",
        "category": "Spring"
    },
    {
        "id": 337,
        "question": "【全件検索処理】\n以下のコードの説明として正しいものを選べ。\n---java---\nList<Item> items = itemRepository.findAll();\nmodel.addAttribute(\"items\", items);",
        "options": [
            "全件取得した結果をリクエストスコープに保存し、ビューから参照できるようにする。",
            "全件取得した結果をセッションスコープに保存し、複数リクエストをまたいで保持する。",
            "findAll() の結果を直接レスポンスとして返し、ビューには渡さない。",
            "model.addAttribute はデータベースに新しいレコードを追加するメソッドである。"
        ],
        "answer": 0,
        "explanation": "findAll() でDBから全件取得したリストを、model.addAttribute(\"items\", items) でリクエストスコープのModelに追加します。これによりThymeleafなどのビューテンプレートから \"items\" という名前でデータを参照できます。セッションスコープには保存されません。",
        "category": "Spring"
    },
    {
        "id": 346,
        "question": "【9章 入力チェック】\nSpring Frameworkにおける入力チェックに関する説明として、正しいものを選べ。",
        "options": [
            "画面側のHTMLタグに専用の属性を記述するだけで、サーバー側のコントローラでも自動的に入力チェックが行われる。",
            "フォームクラスのフィールドにアノテーションを付与し、コントローラの引数でチェックを有効化する。",
            "コントローラのメソッド内で、すべての入力値に対して手動でif文を用いたチェック処理を記述する必要がある。",
            "専用のXMLファイルに入力規則を記述し、それをSpringが読み込むことでアプリケーション全体のチェックを行う。"
        ],
        "answer": 1,
        "explanation": "フォームクラスのフィールドに@NotBlankなどのアノテーションを付与し、コントローラの引数で@Validatedを付与することで自動的な入力チェックが有効になります。",
        "category": "Spring"
    },
    {
        "id": 347,
        "question": "【9章 入力チェック】\n入力チェックを行うコントローラのメソッドの引数に付与するアノテーションの説明として、誤っているものを選べ。",
        "options": [
            "@Validatedを付与したフォームクラスの引数に対して、定義された入力チェックが実行される。",
            "エラー結果を受け取るBindingResult型の引数は、入力チェック対象の引数の直後に宣言しなければならない。",
            "@ModelAttributeを付与した引数に対して入力チェックを行う場合、自動的にチェックされるため@Validatedの付与は省略できる。",
            "@ModelAttributeは、リクエストパラメータをオブジェクトに格納し、Modelに自動追加する役割を持つ。"
        ],
        "answer": 2,
        "explanation": "@ModelAttributeを付与しただけでは入力チェックは実行されません。入力チェックを行うには@Validatedを付与する必要があります。",
        "category": "Spring"
    },
    {
        "id": 348,
        "question": "【9章 入力チェック】\nThymeleafを用いたth:errors属性の処理として、正しいものを選べ。",
        "options": [
            "指定したフィールドでエラーが発生した場合、そのHTML要素のテキストとしてエラーメッセージが出力される。",
            "指定したフィールドでエラーが発生した場合、ブラウザのポップアップダイアログとしてエラーメッセージが表示される。",
            "フォーム内のすべての入力エラーメッセージを自動収集し、画面の最上部にまとめて出力するための属性である。",
            "エラーメッセージのテキストではなく、エラーが発生した入力項目の背景色を自動的に赤色に変更する属性である。"
        ],
        "answer": 0,
        "explanation": "Thymeleafのth:errors属性は、指定したフィールド（プロパティ）にエラーがある場合、そのHTML要素のテキストとしてエラーメッセージを出力します。",
        "category": "Spring"
    },
    {
        "id": 349,
        "question": "【10章 メッセージ出力】\nメッセージリソース（プロパティファイル）における、キーと値の記述形式として正しいものを選べ。",
        "options": [
            "キーと値をコロン（:）で区切って記述し、行の末尾にセミコロン（;）を付ける。",
            "キーと値をイコール（=）で区切って記述し、1行につき1つのメッセージを定義する。",
            "キーと値をカンマ（,）で区切り、全体を波括弧（{}）で囲んで記述する。",
            "キーと値をハイフン（-）で繋いで記述し、ダブルクォーテーション（\"\"）で囲む。"
        ],
        "answer": 1,
        "explanation": "プロパティファイルでは「キー=値」の形式で記述し、1行につき1つのメッセージを定義します。",
        "category": "Spring"
    },
    {
        "id": 350,
        "question": "【10章 メッセージ出力】\nValidationMessages.propertiesの説明として正しいものを選べ。",
        "options": [
            "画面に表示するすべてのメッセージ（ラベルや見出しなど）を管理するための、Springの標準ファイルである。",
            "サーバーのポート番号やコンテキストパスなど、アプリケーションの起動設定を記述するためのファイルである。",
            "Bean Validation（@NotBlankなど）の標準エラーメッセージを上書きし、カスタマイズするためのファイルである。",
            "コントローラの処理内で発生した例外のスタックトレースをログとして出力するための設定ファイルである。"
        ],
        "answer": 2,
        "explanation": "ValidationMessages.propertiesは、Bean Validation（@NotBlankなど）の標準エラーメッセージをカスタマイズするためのファイルです。",
        "category": "Spring"
    },
    {
        "id": 351,
        "question": "【10章 メッセージ出力】\nmessages.propertiesの説明として正しいものを選べ。",
        "options": [
            "Bean Validationのアノテーション専用のファイルであり、画面のラベルなどは記述できない。",
            "アプリケーションで共通利用する画面のラベルや独自メッセージなどを一元管理するためのファイルである。",
            "Thymeleafのテンプレートファイルの出力先ディレクトリを指定するための設定ファイルである。",
            "DIコンテナに登録するBean（コンポーネント）の依存関係を定義するためのファイルである。"
        ],
        "answer": 1,
        "explanation": "messages.propertiesは、アプリケーション内で共通利用する画面のラベルや独自のメッセージなどを一元管理するためのファイルです。",
        "category": "Spring"
    },
    {
        "id": 352,
        "question": "【10章 メッセージ出力】\nmessages.propertiesに記述したメッセージをThymeleafで出力するときの記述（メッセージ式）として正しいものを選べ。",
        "options": [
            "${メッセージリソースのキー}",
            "*{メッセージリソースのキー}",
            "#{メッセージリソースのキー}",
            "@{メッセージリソースのキー}"
        ],
        "answer": 2,
        "explanation": "Thymeleafでmessages.propertiesなどのメッセージリソースから値を取得して表示する場合は、#{キー}のメッセージ式（シャープ記号）を使用します。",
        "category": "Spring"
    },
    {
        "id": 353,
        "question": "【11章 フィルタ】\n独自に作成したフィルタクラスをSpringのDIコンテナに登録するための@Componentを付与する場所として正しいものを選べ。",
        "options": [
            "フィルタ処理を実行するdoFilterメソッドの宣言の直前",
            "フィルタクラス内の、DIコンテナに登録したいフィールド変数の直前",
            "フィルタクラス自身のクラス宣言（classキーワード）の直前",
            "フィルタクラスが実装しているFilterインターフェースの宣言の直前"
        ],
        "answer": 2,
        "explanation": "SpringのDIコンテナにコンポーネントとして登録するためには、クラスの宣言の直前に@Componentアノテーションを付与します。",
        "category": "Spring"
    },
    {
        "id": 354,
        "question": "【11章 フィルタ】\n複数のフィルタの実行順序を設定クラスで制御する方法について、正しいものを選べ。",
        "options": [
            "各フィルタクラス内に@Orderアノテーションを記述するだけで、設定クラスを使わずに完全な順序制御ができる。",
            "FilterRegistrationBeanを用いてBeanを定義し、そのsetOrderメソッドに数値を指定して順序を設定する。",
            "設定クラス内でフィルタをインスタンス化した順序（上から下に書いた順番）に従って、自動的に実行順序が決定される。",
            "フィルタクラスのクラス名のアルファベット順に基づいて実行されるため、設定クラスで順序を指定することはできない。"
        ],
        "answer": 1,
        "explanation": "複数のフィルタの実行順序を制御する場合は、設定クラス（@Configuration）でFilterRegistrationBeanを使用し、setOrderメソッドに数値を指定して登録します。",
        "category": "Spring"
    },
    {
        "category": "Spring",
        "question": "【Thymeleafの基本とテンプレート】に関する問題\n問1. Thymeleafのテンプレートファイルにおける記述として正しいものを選べ。",
        "options": [
            "HTMLタグの中に専用の属性と式を記述することで、動的なWebページを生成する。",
            "HTMLタグの中に直接Javaのソースコードを記述することで、動的なWebページを生成する。",
            "HTMLタグの中に専用の属性のみを記述し、式は外部のJavaScriptファイルに記述する。",
            "HTMLタグの外部に専用の式を記述し、属性はCSSファイルで定義して読み込ませる。"
        ],
        "answer": 0,
        "explanation": "ThymeleafはHTMLテンプレート内に独自の属性（th:textなど）と式（${...}など）を埋め込むことで、サーバーサイドのデータと連携して動的なWebページを生成します。",
        "id": 404
    },
    {
        "category": "Spring",
        "question": "【th:each属性】に関する問題\n問2. Thymeleafの th:each 属性の機能として正しいものを選べ。",
        "options": [
            "指定したコレクションの要素の数だけ、記述したHTML要素を繰り返し出力する。",
            "指定したコレクションの中から、条件に一致する要素を1つだけ抽出して出力する。",
            "指定した変数の値が空でない場合のみ、記述したHTML要素を画面に出力する。",
            "指定したコレクションの要素を、自動的に五十音順や昇順に並び替えて出力する。"
        ],
        "answer": 0,
        "explanation": "th:eachは指定したリストや配列などのコレクションの要素数分だけ、その要素を含むHTMLタグを繰り返し出力するための属性です。",
        "id": 405
    },
    {
        "category": "Spring",
        "question": "【変数式 ${...}】に関する問題\n問3. Thymeleafの変数式 ${...} を使用した以下の文はどのような処理を行うか。正しいものを選べ。 ただし、コントローラーの処理において、Modelに属性名 \"message\" として文字列が格納されているとする。\n\n---HTML---\n<span th:text=\"${message}\">こんにちは</span>",
        "options": [
            "Modelに格納された \"message\" の値を、spanタグのテキストとして上書き出力する。",
            "Modelに格納された \"message\" の値を、spanタグのclass属性として追加出力する。",
            "「こんにちは」という文字列を、Modelの \"message\" という変数の値として代入する。",
            "「message」という変数名そのものを、spanタグのテキストとして上書き出力する。"
        ],
        "answer": 0,
        "explanation": "th:text属性は、評価された式の値（この場合はModelの\"message\"属性の値）で、タグのボディ部分（「こんにちは」）を上書き出力します。",
        "id": 406
    },
    {
        "category": "Spring",
        "question": "【リンク式 @{...}】に関する問題\n問4. Thymeleafのリンク式 @{...} の説明として正しいものを選べ。",
        "options": [
            "アプリケーションのコンテキストパスを自動的に補完して、リンク先のURLを生成する。",
            "コントローラーから渡されたModelに格納されている、URLの文字列を変数として取得する。",
            "プロパティファイルに定義された、多言語対応のリンク先URLのメッセージを取得する。",
            "選択されたオブジェクトのプロパティを直接取得し、URLのクエリパラメータを生成する。"
        ],
        "answer": 0,
        "explanation": "リンク式 @{...} を使用すると、コンテキストパス（アプリケーションのルートURL）を自動的に補完した上で、安全にリンク先のURLを生成できます。",
        "id": 407
    },
    {
        "id": 408,
        "question": "【@RequestMapping アノテーション】\n以下のコードの説明として正しいものを選べ。\n---Java---\n@Controller\npublic class SampleController {\n@RequestMapping(value = \"/hello\", method = RequestMethod.GET)\npublic String hello() {\nreturn \"hello\";\n}\n}\n----------",
        "options": [
            "GETリクエストで「/hello」にアクセスしたとき、このメソッドが実行される。",
            "POSTリクエストで「/hello」にアクセスしたとき、このメソッドが実行される。",
            "GETリクエストとPOSTリクエストの両方で「/hello」にアクセスしたとき、このメソッドが実行される。",
            "method属性を省略しているため、このメソッドは実行されない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@RequestMappingはコントローラクラスのメソッド（またはクラス）に付与し、指定したURLからのリクエストと処理メソッドを紐づけるためのアノテーションです。",
        "category": "総合問題"
    },
    {
        "id": 409,
        "question": "【application.properties の設定とURL】\n以下の application.properties の設定をもとに、ブラウザからアクセスするURLとして正しいものを選べ。\n---properties---\nserver.port=9090\nserver.servlet.context-path=/myapp\n----------",
        "options": [
            "http://localhost:9090/myapp/hello",
            "http://localhost:8080/myapp/hello",
            "http://localhost:9090/hello",
            "http://localhost:8080/hello"
        ],
        "answer": 0,
        "explanation": "正解の通りです。server.portでポート番号（例:8081）を、server.servlet.context-pathでアプリケーションのルートURL（例:/sample）を設定します。そのためアクセスURLは「http://localhost:8081/sample/...」となります。",
        "category": "総合問題"
    },
    {
        "id": 410,
        "question": "【Thymeleaf の設定】\nThymeleafを使うための設定として誤っているものを選べ。\n---Thymeleaf---\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n<meta charset=\"UTF-8\">\n<title>サンプル</title>\n</head>\n<body>\n<p th:text=\"${message}\">表示エリア</p>\n</body>\n</html>\n----------",
        "options": [
            "xmlns:th=\"http://www.thymeleaf.org\" の宣言が必要である。",
            "th:text=\"${message}\" の記述で、コントローラから渡された値を表示できる。",
            "spring-boot-starter-thymeleaf を依存関係に追加することでThymeleafが利用可能になる。",
            "Thymeleafを使用するには、web.xmlにViewResolverを手動で定義しなければならない。"
        ],
        "answer": 3,
        "explanation": "正解の通りです。Thymeleafを利用するにはHTMLの<html>タグに「xmlns:th=\"http://www.thymeleaf.org\"」を宣言する必要があります。これにより「th:」から始まる専用の属性が使用可能になります。",
        "category": "総合問題"
    },
    {
        "id": 411,
        "question": "【フォーム送信時のURL】\n以下のThymeleafコードで、送信ボタンを押したときに送信されるURLとして正しいものを選べ。\nただし、コンテキストパスは「/shop」、ポート番号は「8080」とする。\n---Thymeleaf---\n<form th:action=\"@{/product/register}\" method=\"post\">\n<input type=\"text\" name=\"productName\">\n<button type=\"submit\">登録</button>\n</form>\n----------",
        "options": [
            "http://localhost:8080/shop/product/register",
            "http://localhost:8080/product/register",
            "http://localhost:8080/shop/register",
            "http://localhost:8080/shop/product/register?method=post"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleafのリンク式「@{/パス}」を使用すると、application.propertiesで設定したコンテキストパス（例:/ecや/shopなど）が自動的にURLの先頭に補完されます。",
        "category": "総合問題"
    },
    {
        "id": 412,
        "question": "【フォームの値を受け取るメソッド定義】\n以下のコードのうち、フォームで入力した値を受け取るメソッドの定義として誤っているものを選べ。\n---Java---\n@Controller\npublic class ProductController {\n@RequestMapping(value = \"/product/register\", method = RequestMethod.POST)\npublic String register(ProductForm form) {\nreturn \"product/complete\";\n}\n}\n----------",
        "options": [
            "@RequestMapping の method 属性に RequestMethod.POST を指定することで、POSTリクエストのみ受け付ける。",
            "引数にフォームクラス（ProductForm）を指定することで、送信された値を自動的に受け取れる。",
            "method = RequestMethod.POST の代わりに @PostMapping を使って記述することもできる。",
            "method 属性を省略すると、GETリクエストのみ受け付けるようになる。"
        ],
        "answer": 3,
        "explanation": "正解の通りです。POSTリクエストを受け取るには、@PostMapping(\"/パス\")、または @RequestMapping(value=\"/パス\", method=RequestMethod.POST) を使用します。",
        "category": "総合問題"
    },
    {
        "id": 413,
        "question": "【フォームクラスの定義】\n以下のHTMLフォームの入力値を受け取るフォームクラスの定義として正しいものを選べ。\n---Thymeleaf---\n<form th:action=\"@{/user/register}\" method=\"post\">\n<input type=\"text\" name=\"userName\">\n<input type=\"text\" name=\"userAge\">\n<button type=\"submit\">登録</button>\n</form>\n----------\n1.\n---Java---\npublic class UserForm {\nprivate String userName;\nprivate int userAge;\n// getter/setter 省略\n}\n----------\n2.\n---Java---\npublic class UserForm {\nprivate String user_name;\nprivate int user_age;\n// getter/setter 省略\n}\n----------\n3.\n---Java---\npublic class UserForm {\npublic String userName;\npublic int userAge;\n// getter/setter 不要\n}\n----------\n4.\n---Java---\npublic class UserForm {\nprivate String name;",
        "options": [
            "private int age;",
            "// getter/setter 省略",
            "}",
            "----------"
        ],
        "answer": 0,
        "explanation": "正解の通りです。HTMLフォームから送信された値を受け取るフォームクラスのフィールド名は、HTML側のname属性と完全に一致している必要があります。また、値をセット・取得するためのgetterとsetterが必須です。",
        "category": "総合問題"
    },
    {
        "id": 414,
        "question": "【セッションスコープを利用するメソッド定義】\n以下のコードの説明として正しいものを選べ。\n---Java---\n@Controller\n@SessionScope\npublic class CartController {\n@Autowired\nprivate CartForm cartForm;\n@GetMapping(\"/cart\")\npublic String showCart(Model model) {\nmodel.addAttribute(\"cartForm\", cartForm);\nreturn \"cart/index\";\n}\n}\n----------",
        "options": [
            "@SessionScope を付与することで、CartController のインスタンスがセッションスコープで管理される。",
            "@SessionScope を付与することで、CartController のインスタンスがアプリケーションスコープで管理される。",
            "@SessionScope はメソッドにのみ付与可能であり、クラスに付与しても効果はない。",
            "@SessionScope を付与すると、ブラウザを閉じるたびに自動的にセッションが削除される。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@SessionScopeをコントローラクラスやBeanに付与することで、そのインスタンスはユーザー（セッション）ごとに個別に管理・保持されるようになります。",
        "category": "総合問題"
    },
    {
        "id": 415,
        "question": "【セッションスコープへの値の保存】\n以下のコードの説明として正しいものを選べ。\n---Java---\n@Controller\npublic class LoginController {\n@PostMapping(\"/login\")\npublic String login(LoginForm form, HttpSession session) {\nsession.setAttribute(\"loginUser\", form.getUserName());\nreturn \"redirect:/top\";\n}\n}\n----------",
        "options": [
            "session.setAttribute(\"loginUser\", ...) により、ユーザー名をセッションスコープに保存している。",
            "session.setAttribute(\"loginUser\", ...) により、ユーザー名をリクエストスコープに保存している。",
            "session.setAttribute の第一引数はクラス名を指定しなければならない。",
            "session.setAttribute で保存した値は、同一リクエスト内でのみ参照可能である。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。セッションスコープに手動で値を保存する場合、メソッドの引数にHttpSessionを受け取り、session.setAttribute(\"キー名\", 値) のように記述して保存します。",
        "category": "総合問題"
    },
    {
        "id": 416,
        "question": "【ThymeleafでセッションスコープのThymeleaf表示】\nセッションスコープに \"loginUser\" というキーで \"田中\" が保存されている場合、Thymeleafで表示するための正しい記述を選べ。\n---Thymeleaf---\n<!-- 正しい記述はどれか？ -->\n----------",
        "options": [
            "<p th:text=\"${session.loginUser}\">表示エリア</p>",
            "<p th:text=\"${loginUser}\">表示エリア</p>",
            "<p th:text=\"*{loginUser}\">表示エリア</p>",
            "<p th:text=\"#{loginUser}\">表示エリア</p>"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleafの変数式内でセッションスコープの値にアクセスするには、「${session.キー名}」のように「session.」をプレフィックスとして付けて参照します。",
        "category": "総合問題"
    },
    {
        "id": 417,
        "question": "【主キー列にシーケンスを利用するエンティティ定義】\n以下のコードの説明として誤っているものを選べ。\n---Java---\n@Entity\n@Table(name = \"products\")\npublic class Product {\n@Id\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"product_seq\")\n@SequenceGenerator(name = \"product_seq\", sequenceName = \"product_id_seq\", allocationSize = 1)\nprivate Integer id;\nprivate String productName;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@Id はこのフィールドが主キーであることを示している。",
            "@GeneratedValue の strategy = GenerationType.SEQUENCE は、シーケンスを使って主キーを自動生成することを示す。",
            "@SequenceGenerator の sequenceName 属性には、データベース上のシーケンス名を指定する。",
            "@SequenceGenerator を使用すると、@Id の指定は不要になる。"
        ],
        "answer": 3,
        "explanation": "正解の通りです。主キー（@Id）をDBのシーケンスで自動生成させるには、@SequenceGeneratorでシーケンス定義の名前（name）とDB上のシーケンス名（sequenceName）を指定し、@GeneratedValueのgenerator属性にそのnameを紐づけます。",
        "category": "総合問題"
    },
    {
        "id": 418,
        "question": "【DBへのエンティティ登録処理】\n以下のコードのうち、DBへの登録処理として不具合の原因とならないものを選べ。\n---Java---\n@Service\npublic class ProductService {\n@Autowired\nprivate ProductRepository productRepository;\npublic void registerProduct(ProductForm form) {\n// (A) エンティティオブジェクトを生成する\nProduct product = new Product();\n// (B) フォームの値をエンティティにセットする\nproduct.setProductName(form.getProductName());\nproduct.setPrice(form.getPrice());\n// (C) IDに固定値をセットしてからsaveを呼ぶ\nproduct.setId(1);\nproductRepository.save(product);\n}\n}\n----------",
        "options": [
            "(A) エンティティのオブジェクトを new で生成している。",
            "(C) IDに固定値「1」を明示的にセットしているため、IDが「1」のレコードが既存の場合は上書きされる。",
            "(C) IDに固定値をセットすると、シーケンスによる自動採番が機能しない。",
            "(C) IDに固定値をセットすると、新規登録か更新かの判定がIDの有無で行われるため、意図しない更新が発生する可能性がある。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Spring Data JPAで新規登録を行う場合、対象となるエンティティクラスをnewで生成し、必要な値をセットしたうえで、リポジトリの save() メソッドに渡します。",
        "category": "総合問題"
    },
    {
        "id": 419,
        "question": "【外部参照元エンティティの定義（@ManyToOne / @JoinColumn）】\n以下のコードの説明として正しいものを選べ。\nただし、Order（注文）エンティティはCustomer（顧客）エンティティを参照するものとする。\n---Java---\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY)\nprivate Integer id;\n@ManyToOne\n@JoinColumn(name = \"customer_id\")\nprivate Customer customer;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@ManyToOne は「注文が多、顧客が1」の関係を表し、1人の顧客が複数の注文を持つことを示す。",
            "@ManyToOne は「注文が1、顧客が多」の関係を表し、1件の注文が複数の顧客に紐づくことを示す。",
            "@JoinColumn(name = \"customer_id\") は、Customerエンティティのクラス名を指定している。",
            "@JoinColumn を省略すると、外部キー列が自動的に削除される。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@ManyToOneは「多対1」の関連を示します。@JoinColumnのname属性には、自身のテーブルが持つ「外部キーの列名（カラム名）」を指定してリレーションを構築します。",
        "category": "総合問題"
    },
    {
        "id": 420,
        "question": "【JPQLの書き方（誤り箇所の特定）】\n以下のJPQLの記述として誤っているものを選べ。",
        "options": [
            "SELECT p FROM Product p WHERE p.price > 1000",
            "SELECT p FROM Product p ORDER BY p.productName ASC",
            "SELECT p FROM products p WHERE p.id = :id",
            "SELECT p FROM Product p WHERE p.category = :category"
        ],
        "answer": 2,
        "explanation": "正解の通りです。JPQLはテーブル名ではなく「エンティティクラス名」、カラム名ではなく「エンティティのフィールド名」を使ってクエリを記述します。FROM句にはエンティティクラス名を正確に記述する必要があります。",
        "category": "総合問題"
    },
    {
        "id": 421,
        "question": "【リポジトリ内でのJPQL定義（@Query）】\nリポジトリ内でJPQLを定義する正しい記述を選べ。\n---Java---\npublic interface ProductRepository extends JpaRepository<Product, Integer> {\n// JPQLをここに定義する\n（　　　　　　　　　）\nList<Product> findByCategoryId(Integer categoryId);\n}\n----------",
        "options": [
            "@Query(\"SELECT p FROM Product p WHERE p.categoryId = :categoryId\")",
            "@NamedQuery(name = \"Product.findByCategoryId\", query = \"SELECT p FROM Product p WHERE p.categoryId = :categoryId\")",
            "@SQL(\"SELECT * FROM products WHERE category_id = :categoryId\")",
            "@QueryMapping(\"SELECT p FROM Product p WHERE p.categoryId = :categoryId\")"
        ],
        "answer": 0,
        "explanation": "正解の通りです。リポジトリのインターフェース内で任意のJPQLを実行したい場合は、対象のメソッドに @Query(\"JPQL文\") アノテーションを付与して記述します。",
        "category": "総合問題"
    },
    {
        "id": 422,
        "question": "【JPQLで特定列だけを取得する書き方】\n以下のJPQLの説明として正しいものを選べ。\n---Java---\n@Query(\"SELECT new com.example.dto.ProductDto(p.id, p.productName) FROM Product p\")\nList<ProductDto> findProductSummary();\n----------",
        "options": [
            "エンティティの特定フィールドだけを取得し、DTOクラスのコンストラクタに渡して結果を生成している。",
            "SELECT句に new を使うと、エンティティ全体が取得されてDTOに変換される。",
            "この記述はエラーになる。JPQLのSELECT句にはエンティティ別名のみ指定できる。",
            "ProductDto のコンストラクタに引数を渡す必要はなく、フィールドは自動的にマッピングされる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。特定のフィールドのみを取得してDTOに格納する場合、JPQLのSELECT句で「SELECT new パッケージ名.DTOクラス名(e.id, e.name) FROM ...」のようにコンストラクタ式を用います。",
        "category": "総合問題"
    },
    {
        "id": 423,
        "question": "【フォームクラスへのバリデーションアノテーション（@NotNull と数値型）】\n以下のコードの説明として正しいものを選べ。\n---Java---\npublic class ItemForm {\n@NotBlank\nprivate String itemName;\n@NotNull\nprivate Integer price;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@NotNull を Integer 型のフィールドに付与すると、フォームから値が送信されなかった場合（null）にエラーが発生する。",
            "@NotNull を Integer 型のフィールドに付与すると、空文字（\"\"）の送信もバリデーションエラーになる。",
            "Integer 型に @NotBlank を付与することで、数値の形式チェックが行える。",
            "@NotNull は String 型専用のアノテーションであり、Integer 型には使用できない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Integer等のオブジェクト型（ラッパークラス）に対して必須入力を課す場合は @NotNull を使用します。送信されなかった場合はnullとなるためこれで検知できます（@NotBlankは文字列専用です）。",
        "category": "総合問題"
    },
    {
        "id": 424,
        "question": "【メッセージリソースの書き方】\nmessages.properties のメッセージ定義の書き方として正しいものを選べ。",
        "options": [
            "error.required=入力必須です。",
            "error.required：\"入力必須です。\"",
            "<message key=\"error.required\">入力必須です。</message>",
            "error.required -> 入力必須です。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。メッセージリソース（propertiesファイル）は「キー名=メッセージ内容」の形式で記述します。動的な値を入れる部分は「{0}」や「{1}」のようなプレースホルダーを使います。",
        "category": "総合問題"
    },
    {
        "id": 425,
        "question": "【入力項目名を埋め込むメッセージリソースの書き方】\nバリデーションエラーメッセージに項目名を埋め込む場合のメッセージリソースの記述として正しいものを選べ。\nただし、「{0}」には項目名が埋め込まれるものとする。\n---properties---\n# ValidationMessages.properties\n（　　　　　　　　　）\n----------",
        "options": [
            "NotBlank.itemForm.itemName={0}は必須入力です。",
            "NotBlank.itemForm.itemName=\"{0}\"は必須入力です。",
            "@NotBlank(message=\"{0}は必須入力です。\")",
            "NotBlank={0}を入力してください。ただしitemNameに限る。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。ValidationMessages.propertiesにおいて「NotBlank={0}は必須入力項目です。」と定義しておくと、{0}の部分にアノテーション側等で指定した項目名（フィールド名など）が自動で埋め込まれます。",
        "category": "総合問題"
    },
    {
        "id": 426,
        "question": "【th:each のステータス変数を利用した書き方】\n以下のコードの説明として正しいものを選べ。\nただし、コントローラから \"itemList\" という名前で List<Item> が渡されているとする。\n---Thymeleaf---\n<tr th:each=\"item, stat : ${itemList}\">\n<td th:text=\"${stat.count}\">1</td>\n<td th:text=\"${item.itemName}\">商品名</td>\n<td th:text=\"${item.price}\">価格</td>\n</tr>\n----------",
        "options": [
            "stat.count は1から始まるループカウンターを表し、1件目は「1」が表示される。",
            "stat.count は0から始まるインデックスを表し、1件目は「0」が表示される。",
            "ステータス変数（stat）は省略不可であり、必ず宣言しなければならない。",
            "th:each で使うコレクションは List 型のみ対応しており、配列は利用できない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。th:eachのステータス変数（例: st）の「index」プロパティは0から始まる現在の反復インデックスを返し、「count」プロパティは1から始まる現在の反復回数を返します。",
        "category": "総合問題"
    },
    {
        "id": 427,
        "question": "【リンク式 @{} でパラメータを含める書き方】\n以下のコードの説明として正しいものを選べ。\nただし、item.id には「5」が格納されているとする。\n---Thymeleaf---\n<a th:href=\"@{/product/detail(id=${item.id})}\">詳細</a>\n----------",
        "options": [
            "生成されるURLは「/product/detail?id=5」となる。",
            "生成されるURLは「/product/detail/5」となる（パス変数として埋め込まれる）。",
            "生成されるURLは「/product/detail(id=5)」となる。",
            "th:href では @{} は使用できず、${} で直接URLを組み立てる必要がある。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。リンク式の中でURLパラメータ（クエリ文字列）を付与する場合は、「@{/path(キー=値)}」のようにカッコ()を使って記述します。これにより /path?キー=値 の形に展開されます。",
        "category": "総合問題"
    },
    {
        "id": 428,
        "question": "【レイアウトテンプレートへの個別画面の埋め込み】\n以下のコードの説明として正しいものを選べ。\n---Thymeleaf（レイアウトテンプレート layout.html）---\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\"\nxmlns:layout=\"http://www.ultraq.net.nz/thymeleaf/layout\"\nlayout:decorate=\"~{layout/layout}\">\n<head>\n<title>サンプル</title>\n</head>\n<body>\n<div layout:fragment=\"content\">\n<p>ここに個別ページのコンテンツが埋め込まれます。</p>\n</div>\n</body>\n</html>\n----------\n---Thymeleaf（個別画面 detail.html）---\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\"\nxmlns:layout=\"http://www.ultraq.net.nz/thymeleaf/layout\"\nlayout:decorate=\"~{layout/layout}\">\n<body>\n<div layout:fragment=\"content\">\n<p th:text=\"${product.name}\">商品名</p>\n</div>\n</body>\n</html>\n----------",
        "options": [
            "個別画面で layout:fragment=\"content\" を宣言したブロックが、レイアウトテンプレートの同名 fragment の箇所に埋め込まれる。",
            "layout:decorate はレイアウトテンプレート側のみに記述し、個別画面側には記述しない。",
            "layout:fragment を使用するには、th:replace によって個別画面全体を置き換える必要がある。",
            "th:fragment と layout:fragment は同一のアノテーションであり、どちらを使っても動作は変わらない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleaf Layout Dialectでは、共通レイアウト側に「layout:fragment=\"名前\"」を定義し、個別画面側では <html> タグ等に「layout:decorate=\"~{レイアウトファイル}\"」を指定することで、フラグメント部分が埋め込まれます。",
        "category": "総合問題"
    },
    {
        "id": 429,
        "question": "【@RequestMapping アノテーション】\n@RequestMapping アノテーションの説明として正しいものを選べ。",
        "options": [
            "コントローラクラスのメソッドに付与することで、指定したURLへのリクエスト時にそのメソッドが実行される。",
            "@RequestMapping はクラスにのみ付与可能であり、メソッドに付与しても効果はない。",
            "@RequestMapping を付与しなくても、すべてのメソッドがURLリクエストに応答する。",
            "@RequestMapping はサービスクラスに付与するアノテーションであり、コントローラクラスには使用できない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@RequestMappingはコントローラクラスのメソッド（またはクラス）に付与し、指定したURLからのリクエストと処理メソッドを紐づけるためのアノテーションです。",
        "category": "総合問題"
    },
    {
        "id": 430,
        "question": "【application.properties のパスとポート番号とURLの関係】\n以下の application.properties の設定として正しい説明を選べ。\n---properties---\nserver.port=8081\nserver.servlet.context-path=/sample\n----------",
        "options": [
            "ブラウザから「/top」にアクセスするには「http://localhost:8081/sample/top」と入力する。",
            "ブラウザから「/top」にアクセスするには「http://localhost:8080/sample/top」と入力する。",
            "ブラウザから「/top」にアクセスするには「http://localhost:8081/top」と入力する。",
            "context-path の設定はURLには影響しないため「http://localhost:8081/top」と「http://localhost:8081/sample/top」はどちらでもアクセスできる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。server.portでポート番号（例:8081）を、server.servlet.context-pathでアプリケーションのルートURL（例:/sample）を設定します。そのためアクセスURLは「http://localhost:8081/sample/...」となります。",
        "category": "総合問題"
    },
    {
        "id": 431,
        "question": "【Thymeleafを使うための設定】\nThymeleafを使うための設定として誤っているものを選べ。",
        "options": [
            "build.gradle または pom.xml に spring-boot-starter-thymeleaf を追加することで利用可能になる。",
            "HTMLファイルの html タグに xmlns:th=\"http://www.thymeleaf.org\" を宣言することで th:〇〇 属性が使えるようになる。",
            "ビューファイルはデフォルトで src/main/resources/templates フォルダに配置する。",
            "Thymeleafを利用するためには、コントローラクラスに @ThymeleafEnabled アノテーションを付与する必要がある。"
        ],
        "answer": 3,
        "explanation": "正解の通りです。Thymeleafを利用するにはHTMLの<html>タグに「xmlns:th=\"http://www.thymeleaf.org\"」を宣言する必要があります。これにより「th:」から始まる専用の属性が使用可能になります。",
        "category": "総合問題"
    },
    {
        "id": 432,
        "question": "【フォームの送信ボタンを押したときのURL】\n以下のThymeleafコードで、送信ボタンを押したときに送信されるURLとして正しいものを選べ。\nただし、コンテキストパスは「/ec」、ポート番号は「8080」とする。\n---Thymeleaf---\n<form th:action=\"@{/cart/add}\" method=\"post\">\n<input type=\"text\" name=\"itemId\">\n<button type=\"submit\">カートに追加</button>\n</form>\n----------",
        "options": [
            "http://localhost:8080/ec/cart/add",
            "http://localhost:8080/cart/add",
            "http://localhost:8080/ec/add",
            "http://localhost:8080/ec/cart/add?method=post"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleafのリンク式「@{/パス}」を使用すると、application.propertiesで設定したコンテキストパス（例:/ecや/shopなど）が自動的にURLの先頭に補完されます。",
        "category": "総合問題"
    },
    {
        "id": 433,
        "question": "【フォームで入力した値を受け取るメソッドの定義】\nフォームで入力した値をPOSTで受け取るメソッドの定義として誤っているものを選べ。",
        "options": [
            "@RequestMapping(value = \"/form/send\", method = RequestMethod.GET) はPOSTリクエストを受け付ける。",
            "@PostMapping(\"/form/send\") はPOSTリクエストを受け付ける正しい記述である。",
            "@RequestMapping(value = \"/form/send\", method = RequestMethod.POST) はPOSTリクエストを受け付ける正しい記述である。",
            "POSTリクエストを受け取るメソッドの引数にフォームクラスを指定すると、送信値が自動でセットされる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。POSTリクエストを受け取るには、@PostMapping(\"/パス\")、または @RequestMapping(value=\"/パス\", method=RequestMethod.POST) を使用します。",
        "category": "総合問題"
    },
    {
        "id": 434,
        "question": "【フォームクラスの定義】\n以下のHTMLフォームの入力値を正しく受け取れるフォームクラスの定義として正しいものを選べ。\n---Thymeleaf---\n<form action=\"/member/register\" method=\"post\">\n<input type=\"text\" name=\"memberName\">\n<input type=\"text\" name=\"memberAge\">\n<button type=\"submit\">登録</button>\n</form>\n----------",
        "options": [
            "フィールド名を memberName・memberAge とし、それぞれに getter/setter を定義したクラスを用意する。",
            "フィールド名は何でもよく、フォームの name 属性との一致は不要である。",
            "フォームクラスには @FormClass アノテーションを付与しなければならない。",
            "フォームクラスのフィールドは public で宣言し、getter/setter は不要である。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。HTMLフォームから送信された値を受け取るフォームクラスのフィールド名は、HTML側のname属性と完全に一致している必要があります。また、値をセット・取得するためのgetterとsetterが必須です。",
        "category": "総合問題"
    },
    {
        "id": 435,
        "question": "【セッションスコープを利用するメソッド定義】\nセッションスコープを利用するメソッド定義の説明として正しいものを選べ。\n---Java---\n@Controller\n@SessionScope\npublic class ShoppingCartController {\n@Autowired\nprivate CartForm cartForm;\n@GetMapping(\"/cart/view\")\npublic String viewCart(Model model) {\nmodel.addAttribute(\"cart\", cartForm);\nreturn \"cart/view\";\n}\n}\n----------",
        "options": [
            "@SessionScope をコントローラクラスに付与することで、このコントローラのインスタンスがセッション単位で管理される。",
            "@SessionScope はメソッドに付与するアノテーションであり、クラスに付与しても効果はない。",
            "@SessionScope を付与したクラスは、すべてのユーザーで同じインスタンスが共有される。",
            "@SessionScope を付与すると、cartForm の値はリクエストのたびにリセットされる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@SessionScopeをコントローラクラスやBeanに付与することで、そのインスタンスはユーザー（セッション）ごとに個別に管理・保持されるようになります。",
        "category": "総合問題"
    },
    {
        "id": 436,
        "question": "【セッションスコープへの値の保存】\nセッションスコープに値を保存する記述として正しいものを選べ。",
        "options": [
            "メソッドの引数に HttpSession を受け取り、session.setAttribute(\"キー名\", 値) で保存する。",
            "メソッドの引数に Model を受け取り、model.addAttribute(\"キー名\", 値) で保存するとセッションスコープに格納される。",
            "セッションスコープへの保存は @SessionAttribute アノテーションをフォームクラスに付与するだけで自動的に行われる。",
            "セッションスコープへの保存は、コントローラのフィールドに値を代入するだけで自動的に行われる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。セッションスコープに手動で値を保存する場合、メソッドの引数にHttpSessionを受け取り、session.setAttribute(\"キー名\", 値) のように記述して保存します。",
        "category": "総合問題"
    },
    {
        "id": 437,
        "question": "【ThymeleafでセッションスコープのThymeleaf表示】\nセッションスコープに \"userId\" キーで「\"U001\"」が保存されている。Thymeleafで表示するための正しい記述を選べ。",
        "options": [
            "<p th:text=\"${session.userId}\">ユーザーID</p>",
            "<p th:text=\"${userId}\">ユーザーID</p>",
            "<p th:text=\"#{userId}\">ユーザーID</p>",
            "<p th:text=\"@{userId}\">ユーザーID</p>"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleafの変数式内でセッションスコープの値にアクセスするには、「${session.キー名}」のように「session.」をプレフィックスとして付けて参照します。",
        "category": "総合問題"
    },
    {
        "id": 438,
        "question": "【主キー列でシーケンスを利用するエンティティの定義】\n以下のエンティティ定義の説明として正しいものを選べ。\n---Java---\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n@Id\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"order_seq\")\n@SequenceGenerator(name = \"order_seq\", sequenceName = \"order_id_seq\", allocationSize = 1)\nprivate Integer id;\nprivate Integer amount;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@SequenceGenerator の sequenceName にはDB上のシーケンス名を指定し、@GeneratedValue の generator には @SequenceGenerator の name を指定する。",
            "@SequenceGenerator の name にはDB上のシーケンス名を指定する。",
            "@GeneratedValue を付与するだけでシーケンスが使用され、@SequenceGenerator は不要である。",
            "@Id を付与したフィールドには @GeneratedValue を付与できない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。主キー（@Id）をDBのシーケンスで自動生成させるには、@SequenceGeneratorでシーケンス定義の名前（name）とDB上のシーケンス名（sequenceName）を指定し、@GeneratedValueのgenerator属性にそのnameを紐づけます。",
        "category": "総合問題"
    },
    {
        "id": 439,
        "question": "【エンティティを利用してDBに登録する処理】\nエンティティを使ってDBに新規登録する処理として、不具合の原因とならない正しい記述を選べ。\n（選択肢のうち3つは不具合の原因であり、1つだけが正しい処理である）",
        "options": [
            "エンティティのオブジェクトを new で生成し、各フィールドに値をセットしてから save() を呼ぶ。",
            "IDフィールドに既存レコードと同じ値を明示的にセットしてから save() を呼ぶ。",
            "エンティティのオブジェクトを生成せずに、フォームクラスのオブジェクトをそのまま save() に渡す。",
            "save() を呼ぶ前に、リポジトリに対して insert() メソッドを呼び出す。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Spring Data JPAで新規登録を行う場合、対象となるエンティティクラスをnewで生成し、必要な値をセットしたうえで、リポジトリの save() メソッドに渡します。",
        "category": "総合問題"
    },
    {
        "id": 440,
        "question": "【外部参照元エンティティの定義（@ManyToOne / @JoinColumn）】\n@ManyToOne と @JoinColumn に関する説明として正しいものを選べ。",
        "options": [
            "@ManyToOne は「多対1」の関係を表し、@JoinColumn の name 属性には外部キー列名を指定する。",
            "@ManyToOne は「1対多」の関係を表し、参照元テーブルに複数の関連レコードを持たせる。",
            "@JoinColumn の name 属性には、参照先テーブルのテーブル名を指定する。",
            "@ManyToOne を付与したフィールドの型は、String 型でなければならない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@ManyToOneは「多対1」の関連を示します。@JoinColumnのname属性には、自身のテーブルが持つ「外部キーの列名（カラム名）」を指定してリレーションを構築します。",
        "category": "総合問題"
    },
    {
        "id": 441,
        "question": "【JPQLの書き方（誤り箇所の特定）】\nJPQLの書き方として誤っているものを選べ。",
        "options": [
            "SELECT e FROM Employee e WHERE e.department = :dept",
            "SELECT e FROM employees e WHERE e.salary > 300000",
            "SELECT e FROM Employee e ORDER BY e.name ASC",
            "SELECT e FROM Employee e WHERE e.id = :id"
        ],
        "answer": 1,
        "explanation": "正解の通りです。JPQLはテーブル名ではなく「エンティティクラス名」、カラム名ではなく「エンティティのフィールド名」を使ってクエリを記述します。FROM句にはエンティティクラス名を正確に記述する必要があります。",
        "category": "総合問題"
    },
    {
        "id": 442,
        "question": "【@Query によるJPQLの定義】\nリポジトリインターフェース内でJPQLを定義する正しい記述を選べ。\n---Java---\npublic interface EmployeeRepository extends JpaRepository<Employee, Integer> {\n（　　　　　　　　　　　　　　　　　　）\nList<Employee> findByDept(String dept);\n}\n----------",
        "options": [
            "@Query(\"SELECT e FROM Employee e WHERE e.department = :dept\")",
            "@JPQL(\"SELECT e FROM Employee e WHERE e.department = :dept\")",
            "@SQL(\"SELECT * FROM employee WHERE department = :dept\")",
            "@NamedQuery(query = \"SELECT e FROM Employee e WHERE e.department = :dept\")"
        ],
        "answer": 0,
        "explanation": "正解の通りです。リポジトリのインターフェース内で任意のJPQLを実行したい場合は、対象のメソッドに @Query(\"JPQL文\") アノテーションを付与して記述します。",
        "category": "総合問題"
    },
    {
        "id": 443,
        "question": "【JPQLで特定の列だけを取得する書き方】\nJPQLで特定のフィールドのみを取得してDTOに格納する場合の正しい記述を選べ。",
        "options": [
            "SELECT new com.example.dto.EmpDto(e.id, e.name) FROM Employee e",
            "SELECT e.id, e.name FROM Employee e",
            "SELECT (e.id, e.name) FROM Employee e",
            "SELECT COLUMNS(id, name) FROM Employee e"
        ],
        "answer": 0,
        "explanation": "正解の通りです。特定のフィールドのみを取得してDTOに格納する場合、JPQLのSELECT句で「SELECT new パッケージ名.DTOクラス名(e.id, e.name) FROM ...」のようにコンストラクタ式を用います。",
        "category": "総合問題"
    },
    {
        "id": 444,
        "question": "【@NotNull と Integer 型のバリデーション】\n以下のフォームクラスの説明として正しいものを選べ。\n---Java---\npublic class OrderForm {\n@NotBlank\nprivate String productName;\n@NotNull\nprivate Integer quantity;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@NotNull を Integer 型に付与すると、フォームから値が送信されなかった（null の）場合にバリデーションエラーになる。",
            "@NotNull を Integer 型に付与すると、空文字の入力もバリデーションエラーになる。",
            "@NotBlank は数値型にも使用でき、Integer 型の quantity に付与するべきである。",
            "Integer 型に @NotNull は付与できない。使用するには long 型に変更する必要がある。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Integer等のオブジェクト型（ラッパークラス）に対して必須入力を課す場合は @NotNull を使用します。送信されなかった場合はnullとなるためこれで検知できます（@NotBlankは文字列専用です）。",
        "category": "総合問題"
    },
    {
        "id": 445,
        "question": "【メッセージリソースの書き方】\nmessages.properties のメッセージリソースの書き方として正しいものを選べ。",
        "options": [
            "greeting.message=こんにちは、{0}さん！",
            "greeting.message : こんにちは、{0}さん！",
            "\"greeting.message\"=\"こんにちは、{0}さん！\"",
            "<message id=\"greeting.message\">こんにちは、{0}さん！</message>"
        ],
        "answer": 0,
        "explanation": "正解の通りです。メッセージリソース（propertiesファイル）は「キー名=メッセージ内容」の形式で記述します。動的な値を入れる部分は「{0}」や「{1}」のようなプレースホルダーを使います。",
        "category": "総合問題"
    },
    {
        "id": 446,
        "question": "【入力項目名を埋め込むメッセージリソースの書き方】\nバリデーションエラーメッセージに項目名「{0}」を埋め込む場合の、ValidationMessages.properties の記述として正しいものを選べ。",
        "options": [
            "NotBlank={0}は必須入力項目です。",
            "NotBlank=必須入力項目です。（{0}に項目名は自動挿入不可）",
            "@NotBlank(label=\"{0}は必須入力項目です。\")",
            "NotBlank -> {0}は必須入力項目です。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。ValidationMessages.propertiesにおいて「NotBlank={0}は必須入力項目です。」と定義しておくと、{0}の部分にアノテーション側等で指定した項目名（フィールド名など）が自動で埋め込まれます。",
        "category": "総合問題"
    },
    {
        "id": 447,
        "question": "【th:each のステータス変数を利用した書き方】\nth:each のステータス変数の説明として正しいものを選べ。\n---Thymeleaf---\n<tr th:each=\"emp, st : ${empList}\">\n<td th:text=\"${st.index}\">0</td>\n<td th:text=\"${emp.name}\">名前</td>\n</tr>\n----------",
        "options": [
            "st.index は0から始まるインデックス番号を表し、1件目は「0」が表示される。",
            "st.index は1から始まるカウンターを表し、1件目は「1」が表示される。",
            "ステータス変数（st）は省略不可であり、必ず宣言しなければ th:each は動作しない。",
            "th:each のステータス変数で使えるのは index のみである。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。th:eachのステータス変数（例: st）の「index」プロパティは0から始まる現在の反復インデックスを返し、「count」プロパティは1から始まる現在の反復回数を返します。",
        "category": "総合問題"
    },
    {
        "id": 448,
        "question": "【リンク式 @{} でパラメータ値を含める書き方】\n以下のリンク式の説明として正しいものを選べ。\nただし、member.id には「10」が格納されているとする。\n---Thymeleaf---\n<a th:href=\"@{/member/edit(id=${member.id})}\">編集</a>\n----------",
        "options": [
            "生成されるURLは「/member/edit?id=10」となる。",
            "生成されるURLは「/member/edit/10」となる（パスに直接埋め込まれる）。",
            "生成されるURLは「/member/edit(id=10)」となる。",
            "@{} 内で ${} は使えないため、このコードはエラーになる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。リンク式の中でURLパラメータ（クエリ文字列）を付与する場合は、「@{/path(キー=値)}」のようにカッコ()を使って記述します。これにより /path?キー=値 の形に展開されます。",
        "category": "総合問題"
    },
    {
        "id": 449,
        "question": "【個別画面をレイアウトテンプレートに埋め込む記述】\nlayout:fragment を使ったレイアウト機能の説明として正しいものを選べ。",
        "options": [
            "レイアウトテンプレートに layout:fragment=\"content\" を定義し、個別画面に layout:decorate でレイアウトを指定することで、個別画面のコンテンツが埋め込まれる。",
            "個別画面に layout:fragment を定義するだけで、自動的にレイアウトテンプレートが読み込まれる。",
            "layout:decorate はレイアウトテンプレートにのみ記述し、個別画面には記述しない。",
            "layout:fragment と th:fragment はどちらを使っても同じ動作になる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleaf Layout Dialectでは、共通レイアウト側に「layout:fragment=\"名前\"」を定義し、個別画面側では <html> タグ等に「layout:decorate=\"~{レイアウトファイル}\"」を指定することで、フラグメント部分が埋め込まれます。",
        "category": "総合問題"
    },
    {
        "id": 450,
        "question": "【@RequestMapping アノテーション】\n以下のコードの説明として誤っているものを選べ。\n---Java---\n@Controller\n@RequestMapping(\"/product\")\npublic class ProductController {\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic String list(Model model) {\nreturn \"product/list\";\n}\n@RequestMapping(value = \"/list\", method = RequestMethod.POST)\npublic String search(ProductSearchForm form, Model model) {\nreturn \"product/list\";\n}\n}\n----------",
        "options": [
            "クラスに付与した @RequestMapping(\"/product\") と、メソッドに付与した @RequestMapping(value = \"/list\") は組み合わせて解釈されるため、実際のURLは「/product/list」になる。",
            "GETリクエストで「/product/list」にアクセスすると list() が実行される。",
            "POSTリクエストで「/product/list」にアクセスすると search() が実行される。",
            "クラスとメソッドの両方に @RequestMapping を付与すると、クラス側の指定は無効になりメソッド側の value のみが有効になる。"
        ],
        "answer": 3,
        "explanation": "正解の通りです。@RequestMappingはコントローラクラスのメソッド（またはクラス）に付与し、指定したURLからのリクエストと処理メソッドを紐づけるためのアノテーションです。",
        "category": "総合問題"
    },
    {
        "id": 451,
        "question": "【application.properties のパスとポート番号とURLの関係】\n以下の application.properties とコントローラコードをもとに、ブラウザから正しくアクセスできるURLを選べ。\n---properties---\nserver.port=9000\nserver.servlet.context-path=/store\n----------\n---Java---\n@Controller\n@RequestMapping(\"/product\")\npublic class ProductController {\n@GetMapping(\"/detail\")\npublic String detail() {\nreturn \"product/detail\";\n}\n}\n----------",
        "options": [
            "http://localhost:9000/store/product/detail",
            "http://localhost:8080/store/product/detail",
            "http://localhost:9000/product/detail",
            "http://localhost:9000/store/detail"
        ],
        "answer": 0,
        "explanation": "正解の通りです。server.portでポート番号（例:8081）を、server.servlet.context-pathでアプリケーションのルートURL（例:/sample）を設定します。そのためアクセスURLは「http://localhost:8081/sample/...」となります。",
        "category": "総合問題"
    },
    {
        "id": 452,
        "question": "【Thymeleafを使うための設定】\n以下のThymeleafテンプレートと設定に関する説明として誤っているものを選べ。\n---Thymeleaf---\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n<meta charset=\"UTF-8\">\n<title th:text=\"${pageTitle}\">タイトル</title>\n</head>\n<body>\n<p th:text=\"${message}\">メッセージ</p>\n</body>\n</html>\n----------\n---properties（application.properties）---\nspring.thymeleaf.cache=false\nspring.thymeleaf.prefix=classpath:/templates/\nspring.thymeleaf.suffix=.html\n----------",
        "options": [
            "spring.thymeleaf.cache=false は開発中にテンプレートの変更をリロードなしで反映させる設定である。",
            "spring.thymeleaf.prefix と spring.thymeleaf.suffix は、コントローラから返すビュー名にプレフィックスとサフィックスを付けてファイルを特定する。",
            "xmlns:th=\"http://www.thymeleaf.org\" の宣言がなくても th:text 属性は正常に機能する。",
            "コントローラから \"pageTitle\" という名前で値を渡すと、title タグの内容がその値で上書きされる。"
        ],
        "answer": 2,
        "explanation": "正解の通りです。Thymeleafを利用するにはHTMLの<html>タグに「xmlns:th=\"http://www.thymeleaf.org\"」を宣言する必要があります。これにより「th:」から始まる専用の属性が使用可能になります。",
        "category": "総合問題"
    },
    {
        "id": 453,
        "question": "【フォームの送信ボタンを押したときのURL】\n以下のコードが実行されたとき、送信ボタンを押した際に送信されるURLとして正しいものを選べ。\nただし、コンテキストパスは「/shop」、item.id には「3」が格納されているとする。\n---Thymeleaf---\n<form th:action=\"@{/order/confirm(itemId=${item.id})}\" method=\"post\">\n<input type=\"text\" name=\"quantity\">\n<button type=\"submit\">注文確認</button>\n</form>\n----------",
        "options": [
            "POST http://localhost:8080/shop/order/confirm?itemId=3",
            "POST http://localhost:8080/order/confirm?itemId=3",
            "POST http://localhost:8080/shop/order/confirm/3",
            "GET  http://localhost:8080/shop/order/confirm?itemId=3"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleafのリンク式「@{/パス}」を使用すると、application.propertiesで設定したコンテキストパス（例:/ecや/shopなど）が自動的にURLの先頭に補完されます。",
        "category": "総合問題"
    },
    {
        "id": 454,
        "question": "【フォームで入力した値を受け取るメソッドの定義】\n以下のコードの説明として誤っているものを選べ。\n---Java---\n@Controller\npublic class ContactController {\n@PostMapping(\"/contact/send\")\npublic String send(@ModelAttribute ContactForm form, Model model) {\nmodel.addAttribute(\"name\", form.getName());\nreturn \"contact/thanks\";\n}\n}\n----------",
        "options": [
            "@ModelAttribute は省略しても、フォームクラスを引数に取ることで送信値は自動的にバインドされる。",
            "@PostMapping は @RequestMapping(method = RequestMethod.POST) と同等の記述である。",
            "@ModelAttribute を付与しているため、form オブジェクトは自動的にセッションスコープに保存される。",
            "model.addAttribute(\"name\", form.getName()) により、フォームに入力された name の値をビューに渡している。"
        ],
        "answer": 2,
        "explanation": "正解の通りです。POSTリクエストを受け取るには、@PostMapping(\"/パス\")、または @RequestMapping(value=\"/パス\", method=RequestMethod.POST) を使用します。",
        "category": "総合問題"
    },
    {
        "id": 455,
        "question": "【フォームクラスの定義】\n以下のコードの説明として正しいものを選べ。\n---Thymeleaf---\n<form th:action=\"@{/review/post}\" method=\"post\">\n<input type=\"text\"   name=\"title\">\n<textarea name=\"body\"></textarea>\n<input type=\"number\" name=\"score\">\n<button type=\"submit\">投稿</button>\n</form>\n----------\n---Java---\npublic class ReviewForm {\nprivate String title;\nprivate String body;\nprivate Integer score;\n// getter/setter 省略\n}\n----------",
        "options": [
            "フォームの name 属性と ReviewForm のフィールド名が一致しているため、Springが自動的に値をバインドする。",
            "textarea の値は String 型では受け取れないため、body フィールドは byte[] 型にする必要がある。",
            "score フィールドは Integer 型ではなく String 型で宣言しなければ数値が正しくバインドされない。",
            "ReviewForm に @FormObject アノテーションを付与しなければ、コントローラの引数として使用できない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。HTMLフォームから送信された値を受け取るフォームクラスのフィールド名は、HTML側のname属性と完全に一致している必要があります。また、値をセット・取得するためのgetterとsetterが必須です。",
        "category": "総合問題"
    },
    {
        "id": 456,
        "question": "【セッションスコープを利用するメソッド定義】\n以下の2つのコードを比較した説明として正しいものを選べ。\n---Java（パターンA）---\n@Controller\n@SessionScope\npublic class CartController {\n@Autowired\nprivate CartForm cartForm;\n}\n----------\n---Java（パターンB）---\n@Controller\npublic class CartController {\n@Autowired\nprivate CartForm cartForm;\n@PostMapping(\"/cart/add\")\npublic String addToCart(CartForm form, HttpSession session) {\nsession.setAttribute(\"cart\", form);\nreturn \"redirect:/cart\";\n}\n}\n----------",
        "options": [
            "パターンAは @SessionScope によってコントローラのインスタンスがセッション管理され、パターンBは HttpSession を使って明示的に値をセッションに格納している。",
            "パターンAとパターンBは同じ動作であり、どちらも HttpSession を使ってセッションに保存している。",
            "パターンAの @SessionScope はメソッドにのみ付与可能であるため、このコードはエラーになる。",
            "パターンBの session.setAttribute は、セッションではなくリクエストスコープに値を保存する。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。@SessionScopeをコントローラクラスやBeanに付与することで、そのインスタンスはユーザー（セッション）ごとに個別に管理・保持されるようになります。",
        "category": "総合問題"
    },
    {
        "id": 457,
        "question": "【セッションスコープへの値の保存】\n以下のコードの説明として誤っているものを選べ。\n---Java---\n@PostMapping(\"/login\")\npublic String login(LoginForm form, HttpSession session, Model model) {\nUserEntity user = userService.findByEmail(form.getEmail());\nsession.setAttribute(\"loginUser\", user);\nmodel.addAttribute(\"message\", \"ログインしました。\");\nreturn \"redirect:/top\";\n}\n----------",
        "options": [
            "session.setAttribute(\"loginUser\", user) によりログインユーザーがセッションスコープに保存され、複数のリクエストをまたいで参照できる。",
            "model.addAttribute(\"message\", \"ログインしました。\") で追加した値は、リダイレクト後のビューにも引き継がれる。",
            "session.setAttribute で保存した値は、ブラウザを閉じるかセッションタイムアウトになるまで保持される。",
            "リダイレクト後のリクエストでは新たなリクエストスコープが生成されるため、model.addAttribute の値はリダイレクト先では参照できない。"
        ],
        "answer": 1,
        "explanation": "正解の通りです。セッションスコープに手動で値を保存する場合、メソッドの引数にHttpSessionを受け取り、session.setAttribute(\"キー名\", 値) のように記述して保存します。",
        "category": "総合問題"
    },
    {
        "id": 458,
        "question": "【ThymeleafでセッションスコープのThymeleaf表示】\n以下のThymeleafコードの説明として正しいものを選べ。\nただし、セッションスコープには \"loginUser\" キーで UserEntity オブジェクトが保存されており、UserEntity には name フィールドがあるとする。\n---Thymeleaf---\n<p th:text=\"${session.loginUser.name}\">ユーザー名</p>\n----------",
        "options": [
            "セッションスコープから loginUser を取り出し、その name フィールドの値を表示している。",
            "${session.loginUser.name} はコントローラの Model に \"session\" というキーで追加された値を参照している。",
            "セッションスコープの値を表示するには #{session.loginUser.name} の記述が正しい。",
            "セッションスコープの値はThymeleafから直接参照できないため、このコードはエラーになる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Thymeleafの変数式内でセッションスコープの値にアクセスするには、「${session.キー名}」のように「session.」をプレフィックスとして付けて参照します。",
        "category": "総合問題"
    },
    {
        "id": 459,
        "question": "【主キー列でシーケンスを利用するエンティティの定義】\n以下のコードの説明として誤っているものを選べ。\n---Java---\n@Entity\n@Table(name = \"invoices\")\npublic class Invoice {\n@Id\n@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = \"invoice_gen\")\n@SequenceGenerator(\nname = \"invoice_gen\",\nsequenceName = \"invoice_id_seq\",\nallocationSize = 1\n)\nprivate Integer id;\nprivate String invoiceNumber;\nprivate Integer totalAmount;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@SequenceGenerator の name 属性（\"invoice_gen\"）は、@GeneratedValue の generator 属性と一致させる必要がある。",
            "@SequenceGenerator の sequenceName 属性（\"invoice_id_seq\"）には、Java側で定義した任意の名前を指定する。",
            "allocationSize = 1 を指定することで、DBのシーケンスが1ずつ採番されることを示している。",
            "@GeneratedValue の strategy = GenerationType.SEQUENCE はシーケンスを使った主キー自動生成を意味する。"
        ],
        "answer": 1,
        "explanation": "正解の通りです。主キー（@Id）をDBのシーケンスで自動生成させるには、@SequenceGeneratorでシーケンス定義の名前（name）とDB上のシーケンス名（sequenceName）を指定し、@GeneratedValueのgenerator属性にそのnameを紐づけます。",
        "category": "総合問題"
    },
    {
        "id": 460,
        "question": "【エンティティを利用してDBに登録する処理】\n以下のコードの説明として不具合の原因とならないものを選べ。\n（3つの選択肢が不具合の原因、1つだけが正しい処理である）\n---Java---\n@Service\npublic class StockService {\n@Autowired\nprivate StockRepository stockRepository;\npublic void register(StockForm form) {\nStock stock = new Stock();           // (A)\nstock.setId(99);                     // (B) 固定IDをセット\nstock.setProductName(form.getProductName());  // (C)\nstock.setQuantity(form.getQuantity());         // (D)\nstockRepository.save(stock);         // (E)\n}\n}\n----------",
        "options": [
            "(A) Stock エンティティのオブジェクトを new で生成している。",
            "(B) IDに固定値「99」をセットすると、既存のIDが99のレコードが上書き（UPDATE）される可能性がある。",
            "(B) IDに固定値をセットすると、シーケンスやIDENTITYによる自動採番が無効になる。",
            "(E) save() を呼ぶ前に IDが設定されているため、新規登録ではなく更新処理として実行される場合がある。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Spring Data JPAで新規登録を行う場合、対象となるエンティティクラスをnewで生成し、必要な値をセットしたうえで、リポジトリの save() メソッドに渡します。",
        "category": "総合問題"
    },
    {
        "id": 461,
        "question": "【外部参照元エンティティの定義（@ManyToOne / @JoinColumn）】\n以下のコードの説明として誤っているものを選べ。\n---Java---\n@Entity\n@Table(name = \"order_items\")\npublic class OrderItem {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY)\nprivate Integer id;\n@ManyToOne\n@JoinColumn(name = \"order_id\")\nprivate Order order;\n@ManyToOne\n@JoinColumn(name = \"product_id\")\nprivate Product product;\nprivate Integer quantity;\n// getter/setter 省略\n}\n----------",
        "options": [
            "OrderItem は Order と Product の両方に対して多対1の関係を持つことができる。",
            "@JoinColumn(name = \"order_id\") は、order_items テーブルの「order_id」列が外部キー列であることを示す。",
            "@ManyToOne を2つ付与しているため、このエンティティはエラーになる。",
            "OrderItem を save() するとき、order と product フィールドにエンティティオブジェクトをセットすることで外部キーが保存される。"
        ],
        "answer": 2,
        "explanation": "正解の通りです。@ManyToOneは「多対1」の関連を示します。@JoinColumnのname属性には、自身のテーブルが持つ「外部キーの列名（カラム名）」を指定してリレーションを構築します。",
        "category": "総合問題"
    },
    {
        "id": 462,
        "question": "【JPQLの書き方（誤り箇所の特定）】\n以下のJPQLの記述として誤っているものを選べ。",
        "options": [
            "SELECT o FROM Order o WHERE o.customer.name = :name",
            "SELECT o FROM Order o JOIN FETCH o.customer WHERE o.id = :id",
            "SELECT o FROM order o WHERE o.totalAmount > 10000",
            "SELECT o FROM Order o WHERE o.status = :status ORDER BY o.createdAt DESC"
        ],
        "answer": 2,
        "explanation": "正解の通りです。JPQLはテーブル名ではなく「エンティティクラス名」、カラム名ではなく「エンティティのフィールド名」を使ってクエリを記述します。FROM句にはエンティティクラス名を正確に記述する必要があります。",
        "category": "総合問題"
    },
    {
        "id": 463,
        "question": "【@Query によるJPQLの定義】\n以下のコードの説明として正しいものを選べ。\n---Java---\npublic interface OrderRepository extends JpaRepository<Order, Integer> {\n@Query(\"SELECT o FROM Order o WHERE o.customer.id = :customerId ORDER BY o.createdAt DESC\")\nList<Order> findByCustomerId(@Param(\"customerId\") Integer customerId);\n}\n----------",
        "options": [
            "@Query の JPQL で「o.customer.id」のようにエンティティのフィールドを連鎖して参照することができる。",
            "@Query で定義したJPQLはテーブル名で記述するため、「FROM Order」は「FROM orders」と書かなければならない。",
            "@Param(\"customerId\") は省略でき、引数名が一致していれば自動的にバインドされる。",
            "@Query はリポジトリインターフェースではなく、エンティティクラスに付与する必要がある。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。リポジトリのインターフェース内で任意のJPQLを実行したい場合は、対象のメソッドに @Query(\"JPQL文\") アノテーションを付与して記述します。",
        "category": "総合問題"
    },
    {
        "id": 464,
        "question": "【JPQLで特定の列だけを取得する書き方】\n以下のコードの説明として誤っているものを選べ。\n---Java---\npublic interface ProductRepository extends JpaRepository<Product, Integer> {\n@Query(\"SELECT new com.example.dto.ProductSummary(p.id, p.name, p.price) FROM Product p WHERE p.categoryId = :categoryId\")\nList<ProductSummary> findSummaryByCategoryId(@Param(\"categoryId\") Integer categoryId);\n}\n----------\n---Java（ProductSummary.java）---\npublic class ProductSummary {\nprivate Integer id;\nprivate String name;\nprivate Integer price;\npublic ProductSummary(Integer id, String name, Integer price) {\nthis.id = id;\nthis.name = name;\nthis.price = price;\n}\n// getter 省略\n}\n----------",
        "options": [
            "JPQL の new 演算子でDTOのコンストラクタを呼び出すことで、特定のフィールドのみをDTOにマッピングできる。",
            "ProductSummary クラスには、JPQL で指定したフィールドの順序と型が一致するコンストラクタが必要である。",
            "@Query に new 演算子を使う場合、DTOクラスのフルパッケージ名（FQCN）を省略してクラス名だけで記述できる。",
            "戻り値型が List<ProductSummary> であるため、複数件取得した結果がリストで返される。"
        ],
        "answer": 2,
        "explanation": "正解の通りです。特定のフィールドのみを取得してDTOに格納する場合、JPQLのSELECT句で「SELECT new パッケージ名.DTOクラス名(e.id, e.name) FROM ...」のようにコンストラクタ式を用います。",
        "category": "総合問題"
    },
    {
        "id": 465,
        "question": "【@NotNull と Integer 型のバリデーション】\n以下のコードの説明として正しいものを選べ。\n---Java---\npublic class PurchaseForm {\n@NotBlank(message = \"商品名を入力してください。\")\nprivate String productName;\n@NotNull(message = \"数量を入力してください。\")\nprivate Integer quantity;\n@Min(value = 1, message = \"数量は1以上を入力してください。\")\nprivate Integer quantity2;\n// getter/setter 省略\n}\n----------",
        "options": [
            "@NotNull は quantity が null（未入力）の場合にエラーになるが、0を入力した場合はエラーにならない。",
            "@NotNull は quantity が null の場合だけでなく、0を入力した場合もエラーになる。",
            "@NotBlank を Integer 型の quantity に付与すると、数値の形式チェックができる。",
            "@Min(value = 1) は @NotNull を含んでいるため、quantity2 が null でもバリデーションエラーにならない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。Integer等のオブジェクト型（ラッパークラス）に対して必須入力を課す場合は @NotNull を使用します。送信されなかった場合はnullとなるためこれで検知できます（@NotBlankは文字列専用です）。",
        "category": "総合問題"
    },
    {
        "id": 466,
        "question": "【メッセージリソースの書き方】\n以下のコードの説明として正しいものを選べ。\n---properties（messages.properties）---\nitem.register.success=商品を登録しました。\nitem.register.error=登録に失敗しました。もう一度お試しください。\n----------\n---Thymeleaf---\n<p th:text=\"#{item.register.success}\">メッセージ</p>\n----------",
        "options": [
            "#{item.register.success} は messages.properties のキー「item.register.success」に対応する値「商品を登録しました。」を表示する。",
            "#{item.register.success} はコントローラから渡された変数「item.register.success」の値を表示する。",
            "messages.properties のキーにドット（.）を含むことはできない。",
            "th:text=\"#{...}\" ではなく th:text=\"${...}\" でなければ messages.properties の値を参照できない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。メッセージリソース（propertiesファイル）は「キー名=メッセージ内容」の形式で記述します。動的な値を入れる部分は「{0}」や「{1}」のようなプレースホルダーを使います。",
        "category": "総合問題"
    },
    {
        "id": 467,
        "question": "【入力項目名を埋め込むメッセージリソースの書き方】\n以下のコードの説明として正しいものを選べ。\n---properties（ValidationMessages.properties）---\nNotBlank.memberForm.memberName={0}は必須入力です。\nNotBlank.memberForm.memberEmail={0}は必須入力です。\n----------\n---Java---\npublic class MemberForm {\n@NotBlank\nprivate String memberName;\n@NotBlank\nprivate String memberEmail;\n// getter/setter 省略\n}\n----------",
        "options": [
            "メッセージキーを「アノテーション名.クラス名.フィールド名」の形式で定義することで、フィールドごとに個別のエラーメッセージを設定できる。",
            "{0} には自動的にフィールド名（memberName など）が埋め込まれる。",
            "{0} にはバリデーションアノテーションのクラス名（NotBlank など）が埋め込まれる。",
            "このメッセージキーはリポジトリクラスに定義しなければ有効にならない。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。ValidationMessages.propertiesにおいて「NotBlank={0}は必須入力項目です。」と定義しておくと、{0}の部分にアノテーション側等で指定した項目名（フィールド名など）が自動で埋め込まれます。",
        "category": "総合問題"
    },
    {
        "id": 468,
        "question": "【th:each のステータス変数】\n以下のコードを実行したときの説明として正しいものを選べ。\nただし、コントローラから \"products\" という名前で3件の Product リストが渡されているとする。\n---Thymeleaf---\n<table>\n<tr th:each=\"p, pStat : ${products}\">\n<td th:text=\"${pStat.count}\">カウント</td>\n<td th:text=\"${pStat.index}\">インデックス</td>\n<td th:text=\"${pStat.last}\">最後</td>\n<td th:text=\"${p.name}\">商品名</td>\n</tr>\n</table>\n----------",
        "options": [
            "1件目の行では pStat.count=1、pStat.index=0、pStat.last=false が出力される。",
            "1件目の行では pStat.count=0、pStat.index=1、pStat.last=false が出力される。",
            "3件目の行では pStat.count=3、pStat.index=3、pStat.last=true が出力される。",
            "pStat.last は最後の要素のとき false を返す。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。th:eachのステータス変数（例: st）の「index」プロパティは0から始まる現在の反復インデックスを返し、「count」プロパティは1から始まる現在の反復回数を返します。",
        "category": "総合問題"
    },
    {
        "id": 469,
        "question": "【リンク式 @{} でパラメータ値を含める書き方】\n以下の2つのリンク式の説明として正しいものを選べ。\nただし、item.id には「7」、item.category には「food」が格納されているとする。\n---Thymeleaf---\n<!-- リンクA -->\n<a th:href=\"@{/item/detail(id=${item.id}, category=${item.category})}\">詳細A</a>\n<!-- リンクB -->\n<a th:href=\"@{/item/{id}/detail(id=${item.id})}\">詳細B</a>\n----------",
        "options": [
            "リンクAは「/item/detail?id=7&category=food」、リンクBは「/item/7/detail」となる。",
            "リンクAは「/item/detail?id=7&category=food」、リンクBは「/item/detail?id=7」となる。",
            "リンクAは「/item/detail(id=7, category=food)」、リンクBは「/item/{id}/detail?id=7」となる。",
            "リンクAとリンクBはどちらも同じURL「/item/detail?id=7&category=food」になる。"
        ],
        "answer": 0,
        "explanation": "正解の通りです。リンク式の中でURLパラメータ（クエリ文字列）を付与する場合は、「@{/path(キー=値)}」のようにカッコ()を使って記述します。これにより /path?キー=値 の形に展開されます。",
        "category": "総合問題"
    },
    {
        "id": 470,
        "question": "【個別画面をレイアウトテンプレートに埋め込む記述】\n以下のコードの説明として誤っているものを選べ。\n---Thymeleaf（レイアウトテンプレート layout/base.html）---\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\"\nxmlns:layout=\"http://www.ultraq.net.nz/thymeleaf/layout\">\n<head>\n<title>共通タイトル</title>\n</head>\n<body>\n<header>共通ヘッダー</header>\n<main layout:fragment=\"content\">\n<p>ここに個別コンテンツが入ります。</p>\n</main>\n<footer>共通フッター</footer>\n</body>\n</html>\n----------\n---Thymeleaf（個別画面 product/list.html）---\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\"\nxmlns:layout=\"http://www.ultraq.net.nz/thymeleaf/layout\"\nlayout:decorate=\"~{layout/base}\">\n<body>\n<div layout:fragment=\"content\">\n<h2>商品一覧</h2>\n<ul>\n<li th:each=\"p : ${products}\" th:text=\"${p.name}\">商品名</li>\n</ul>\n</div>\n</body>\n</html>\n----------",
        "options": [
            "個別画面の layout:decorate=\"~{layout/base}\" により、layout/base.html をレイアウトテンプレートとして使用することを宣言している。",
            "個別画面の layout:fragment=\"content\" ブロックが、レイアウトテンプレートの同名 layout:fragment=\"content\" に差し込まれる。",
            "レイアウトテンプレートに記述した header タグと footer タグは、個別画面をレンダリングしても表示されない。",
            "個別画面に layout:decorate を記述することで、レイアウトテンプレートを使ったレイアウト合成が行われる。"
        ],
        "answer": 2,
        "explanation": "正解の通りです。Thymeleaf Layout Dialectでは、共通レイアウト側に「layout:fragment=\"名前\"」を定義し、個別画面側では <html> タグ等に「layout:decorate=\"~{レイアウトファイル}\"」を指定することで、フラグメント部分が埋め込まれます。",
        "category": "総合問題"
    }
];

/**
 * 日ごとのクイズセット
 */
const dailySets = [
    {
        "date": "4/15",
        "title": "Oracle確認試験 (4/15)",
        "questions": [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ]
    },
    {
        "date": "4/16",
        "title": "Oracle確認試験 (4/16)",
        "questions": [
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18
        ]
    },
    {
        "date": "4/17",
        "title": "Oracle確認試験 (4/17)",
        "questions": [
            19,
            20,
            21,
            22,
            23,
            24
        ]
    },
    {
        "date": "4/20",
        "title": "Oracle確認試験 (4/20)",
        "questions": [
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51
        ]
    },
    {
        "date": "4/21",
        "title": "Java確認試験 (4/21)",
        "questions": [
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60
        ]
    },
    {
        "date": "4/22",
        "title": "Java確認試験 (4/22)",
        "questions": [
            61,
            62,
            63,
            64,
            65,
            66,
            67
        ]
    },
    {
        "date": "4/23",
        "title": "Java確認試験 (4/23)",
        "questions": [
            68,
            69,
            70,
            71,
            72,
            73
        ]
    },
    {
        "date": "4/27",
        "title": "Java確認試験 (4/27)",
        "questions": [
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81
        ]
    },
    {
        "date": "4/28",
        "title": "Java確認試験 (4/28)",
        "questions": [
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89
        ]
    },
    {
        "date": "4/30",
        "title": "Java確認試験 (4/30)",
        "questions": [
            90,
            91,
            92,
            93,
            94,
            95
        ]
    },
    {
        "date": "5/1",
        "title": "Java確認試験 (5/1)",
        "questions": [
            96,
            97,
            98,
            99,
            100,
            101,
            102
        ]
    },
    {
        "date": "5/7",
        "title": "Java確認試験 (5/7)",
        "questions": [
            103,
            104,
            105,
            106,
            107,
            108,
            109
        ]
    },
    {
        "date": "5/13",
        "title": "Spring確認試験 (5/13)",
        "questions": [
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119
        ]
    },
    {
        "date": "5/14",
        "title": "Spring確認試験 (5/14)",
        "questions": [
            120,
            121,
            122,
            123,
            124,
            125,
            126,
            127
        ]
    },
    {
        "date": "5/15",
        "title": "Spring確認試験 (5/15)",
        "questions": [
            128,
            129,
            130
        ]
    },
    {
        "date": "Oracle総合問題01",
        "title": "Oracle総合問題01",
        "questions": [
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157
        ]
    },
    {
        "date": "Oracle総合問題02",
        "title": "Oracle総合問題02",
        "questions": [
            158,
            159,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176,
            177,
            178,
            179,
            180
        ]
    },
    {
        "date": "java総合試験_基礎版01",
        "title": "java総合試験_基礎版01",
        "questions": [
            181,
            182,
            183,
            184,
            185,
            186,
            187,
            188,
            189,
            190,
            191,
            192,
            193,
            194,
            195,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            210
        ]
    },
    {
        "date": "java総合試験_応用版",
        "title": "java総合試験_応用版",
        "questions": [
            211,
            212,
            213,
            214,
            215,
            216,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            228,
            229,
            230,
            231,
            232,
            233,
            234,
            235,
            236,
            237,
            238,
            239,
            240
        ]
    },
    {
        "date": "java総合試験_コード版",
        "title": "java総合試験_コード版",
        "questions": [
            241,
            242,
            243,
            244,
            245,
            246,
            247,
            248,
            249,
            250,
            251,
            252,
            253,
            254,
            255,
            256,
            257,
            258,
            259,
            260,
            261,
            262,
            263,
            264,
            265,
            266,
            267,
            268,
            269
        ]
    },
    {
        "date": "java総合試験_基礎版02",
        "title": "java総合試験_基礎版02",
        "questions": [
            270,
            271,
            272,
            273,
            274,
            275,
            276,
            277,
            278,
            279,
            280,
            281,
            282,
            283,
            284,
            285,
            286,
            287,
            288,
            289,
            290,
            291,
            292,
            293,
            294,
            295,
            296,
            297,
            298,
            299,
            300,
            301,
            302,
            303,
            304
        ]
    },
    {
        "date": "5/18",
        "title": "Spring確認試験 (5/18)",
        "questions": [
            305,
            306,
            307,
            308
        ]
    },
    {
        "date": "5/19",
        "title": "Spring確認試験 (5/19)",
        "questions": [
            309,
            310,
            311,
            312,
            313,
            314
        ]
    },
    {
        "date": "5/20",
        "title": "Spring確認試験 (5/20)",
        "questions": [
            346,
            347,
            348,
            349,
            350,
            351,
            352,
            353,
            354
        ]
    },
    {
        "date": "5/21",
        "title": "Spring確認試験 (5/21)",
        "questions": [
            404,
            405,
            406,
            407
        ]
    },
    {
        "date": "Spring確認試験対策用",
        "title": "Spring確認試験対策用",
        "questions": [
            408,
            409,
            410,
            411,
            412,
            413,
            414,
            415,
            416,
            417,
            418,
            419,
            420,
            421,
            422,
            423,
            424,
            425,
            426,
            427,
            428
        ]
    },
    {
        "date": "Spring確認試験_基礎レベル",
        "title": "Spring確認試験 基礎レベル",
        "questions": [
            429,
            430,
            431,
            432,
            433,
            434,
            435,
            436,
            437,
            438,
            439,
            440,
            441,
            442,
            443,
            444,
            445,
            446,
            447,
            448,
            449
        ]
    },
    {
        "date": "Spring確認試験_応用レベル",
        "title": "Spring確認試験 応用レベル",
        "questions": [
            450,
            451,
            452,
            453,
            454,
            455,
            456,
            457,
            458,
            459,
            460,
            461,
            462,
            463,
            464,
            465,
            466,
            467,
            468,
            469,
            470
        ]
    }
];

// 他のファイルから参照できるようにエクスポート
window.questionDatabase = questionDatabase;
window.dailySets = dailySets;
