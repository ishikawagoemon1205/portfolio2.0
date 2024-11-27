type PortfolioContent =
  | { type: "text"; data: string }
  | { type: "image"; data: string }
  | { type: "link"; data: { text: string; url: string } }
  | { type: "codes"; data: string[] }
  | { type: "sectionTitle"; data: string };

type BlogPost = {
    id: number;
    title: string;
    subtitle?: string;
    author?: string;
    date: {
        published: string;
        updated?: string;
    };
    content: PortfolioContent[];
    tags: string[];
    categories: string[];
    technologies: string[];
    links: {
        title: string;
        url: string;
    }[];
    images?: {
        src: string;
        alt: string;
    }[];
    comments?: {
        user: string;
        comment: string;
        date: string;
    }[];
};

type BlogExample = {
    [key: string]: BlogPost;
}


export const DBBlogData: BlogExample = {
    post1: {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-01" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post2: {
      id: 2,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-10" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post3: {
      id: 3,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-03" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post4: {
      id: 4,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-04" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post5: {
      id: 5,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-05" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post6: {
      id: 6,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-06" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post7: {
      id: 7,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2023-12-06" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    post8: {
      id: 8,
      title: "Flutterで使用するStreamの使い方について",
      subtitle: "Flutterで使用するStreamの使い方について",
      date: { published: "2024-11-26" },
      content: [
        { type: "sectionTitle", data: "説明" },
        { type: "text", data: "Streamは時間の経過とともにデータが発生し、それを非同期で提供する仕組みです。" },
        { type: "codes", data: [
          "Stream<int> get countStream async* {",
          "　int count = 0;  // 初期値",
          "　while (true) {",
          "　　await Future.delayed(Duration(seconds: 1));  // 1秒ごとに実行",
          "　　yield count++;  // countを増加させてその値を返す",
          "　}",
          "}",
        ]},
        { type: "text", data: "上記の場合countの変化を監視してint型のcountStreamを返します。" },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["Flutter"],
      links: [],
    },
    post9: {
      id: 9,
      title: "Flutterで非同期通信する方法",
      subtitle: "Flutterで非同期通信する方法",
      date: { published: "2024-11-26" },
      content: [
        { type: "sectionTitle", data: "説明" },
        { type: "text", data: "非同期通信を行うには、FutureやStreamを使用しますが、一般的にAPIからデータを取得したり、Firebaseとの通信などを非同期で行う場合、Futureがよく使われます。具体的な手順としては、以下の流れになります。" },
        // { type: "codes", data: [
        //   "void main() {",
        //   "　// 非同期関数を呼び出す",
        //   "　print('Start');",
        //   "　fetchData(); // Futureを返す関数",
        //   "　print('End');",
        //   "}",
        //   "Future<String> fetchData() async {",
        //   "　await Future.delayed(Duration(seconds: 2)); // 2秒待機",
        //   "　return 'Data fetched'; // データ取得後、結果を返す",
        //   "}",
        // ]},
        { type: "text", data: "Future<String>で非同期宣言して、返値はString型であることを定義します。" },
        { type: "text", data: "asyncで関数内をラップして、動作完了まで止める必要がある非同期カ所の最初にawaitを記載します。" },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["Flutter"],
      links: [],
    },
    post10: {
      id: 10,
      title: "ChangeNotifierの使い方",
      subtitle: "状態が変更されたときにUi更新するChangeNotifierの使い方",
      date: { published: "2024-11-27" },
      content: [
        { type: "sectionTitle", data: "説明" },
        { type: "text", data: "ChangeNotifierは、Flutterフレームワークのfoundationパッケージに含まれるクラスで、オブジェクトの状態が変更されたときにリスナーに通知するための仕組みを提供します。主に状態管理に使用されます。" },
        // { type: "codes", data: [
        //   "class Counter extends ChangeNotifier {",
        //   "　int _count = 0;",
        //   "　int get count => _count;",
        //   "　void increment() {",
        //   "　　_count++;",
        //   "　　notifyListeners(); // リスナーに変更を通知",
        //   "　}",
        //   "}",
        // ]},
        { type: "text", data: "この例では、CounterクラスがChangeNotifierを継承し、_countというプライベート変数を持っています。incrementメソッドが呼び出されると、_countがインクリメントされ、notifyListenersメソッドが呼び出されてリスナーに変更が通知されます。これにより、リスナーは状態の変更に応じてUIを更新することができます。" },
        { type: "sectionTitle", data: "notifyListenersメゾット" },
        { type: "text", data: "値が切り替わったとしても、それを動的にリスナーの情報を変更させることはできません。値変更後notifyListenersメゾットを使用することでリスナー側でも情報が更新されます。" },
        // { type: "codes", data: [
        //   "class Counter extends ChangeNotifier {",
        //   "　int _count = 0;",
        //   "　int get count => _count;",
        //   "　void increment() {",
        //   "　　_count++;",
        //   "　　notifyListeners(); // リスナーに変更を通知",
        //   "　}",
        //   "}",
        //   "class CounterWidget extends StatelessWidget {",
        //   "　@override",
        //   "　Widget build(BuildContext context) {",
        //   "　　return Column(",
        //   "　　　mainAxisAlignment: MainAxisAlignment.center,",
        //   "　　　children: [",
        //   "　　　　Text('Count: ${context.watch<Counter>().count}'),",
        //   "　　　　ElevatedButton(",
        //   "　　　　　onPressed: () => context.read<Counter>().increment(),",
        //   "　　　　　child: Text('Increment'),",
        //   "　　　　),",
        //   "　　　],",
        //   "　　);",
        //   "　}",
        //   "}",
        //   "void main() {",
        //   "　runApp(",
        //   "　　ChangeNotifierProvider(",
        //   "　　　create: (context) => Counter(),",
        //   "　　　child: MaterialApp(",
        //   "　　　　home: Scaffold(",
        //   "　　　　　body: Center(",
        //   "　　　　　　child: CounterWidget(),",
        //   "　　　　　),",
        //   "　　　　),",
        //   "　　　),",
        //   "　　);",
        //   "}",
        // ]},
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["Flutter"],
      links: [],
    },
    post11: {
      id: 11,
      title: "プライベート変数の使い方",
      subtitle: "get修飾子を使用してプライベート変数を取得する方法",
      date: { published: "2024-11-27" },
      content: [
        // { type: "sectionTitle", data: "プライベート変数を使用することのメリット" },
        // { type: "text", data: "１⃣カプセル化：プライベート変数を外部から直接アクセスできないようにし、クラスの内部実装を隠します。" },
        // { type: "text", data: "２⃣データの保護: 変数の値を外部から変更できないようにし、不正な操作を防ぎます。" },
        // { type: "text", data: "３⃣制御の追加: 値を取得する際に追加のロジックを実行することができます。" },
        // { type: "codes", data: [
        //   "class Counter {",
        //   "　int _count = 0; // プライベート変数",
        //   "　int get count => _count; // ゲッター",
        //   "　// 値を変更するメソッド",
        //   "　void increment() {",
        //   "　　_count++;",
        //   "　}",
        //   "}",
        // ]},
        { type: "text", data: "この例では、CounterクラスがChangeNotifierを継承し、_countというプライベート変数を持っています。incrementメソッドが呼び出されると、_countがインクリメントされ、notifyListenersメソッドが呼び出されてリスナーに変更が通知されます。これにより、リスナーは状態の変更に応じてUIを更新することができます。" },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["Flutter"],
      links: [],
    },
    post12: {
      id: 12,
      title: "Firebaseの認証機能の使い方",
      subtitle: "get修飾子を使用してプライベート変数を取得する方法",
      date: { published: "2024-11-27" },
      content: [
        { type: "sectionTitle", data: "準備" },
        { type: "sectionTitle", data: "メゾット" },
        { type: "text", data: "・User" },
        { type: "text", data: "・AuthService" },
        { type: "text", data: "１⃣カプセル化：プライベート変数を外部から直接アクセスできないようにし、クラスの内部実装を隠します。" },
        { type: "text", data: "２⃣データの保護: 変数の値を外部から変更できないようにし、不正な操作を防ぎます。" },
        { type: "text", data: "３⃣制御の追加: 値を取得する際に追加のロジックを実行することができます。" },
        // { type: "codes", data: [
        //   "class Counter {",
        //   "　int _count = 0; // プライベート変数",
        //   "　int get",
        //   "　count => _count; // ゲッター",
        //   "　// 値を変更するメソッド",
        //   "　void increment() {",
        //   "　　_count++;",
        //   "　}",
        //   "}",
        // ]},
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["Flutter"],
      links: [],
    }, 
};