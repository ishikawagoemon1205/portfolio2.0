// コンテンツの型定義
type PortfolioContent =
  | { type: "text"; data: string }
  | { type: "image"; data: string }
  | { type: "link"; data: { text: string; url: string } }
  | { type: "code"; data: string }
  | { type: "sectionTitle"; data: string };

// リンクの型定義
type ProjectLink = {
  title: string;
  url: string;
};

// 日付情報の型定義
type ProjectDate = {
  start: string; // ISO 8601形式の日付
  end: string; // ISO 8601形式の日付
  duration: string; // 期間（例: "12ヶ月"）
};

// プロジェクトの型定義
type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  date: ProjectDate;
  content: PortfolioContent[];
  links: ProjectLink[];
    images: { src: string; alt: string }[];
};

// DB全体の型定義
type PortfolioProjectDB = {
  [key: string]: PortfolioProject;
};

export const DBWorkesDate: PortfolioProjectDB = {
    homepage01: {
      id: 20000,
      title: "本ポートフォリオページの開発",
      description: "このプロジェクトのフロントエンド部分で使用したHTML、CSS、JavaScriptのソースコードを公開しています。",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript" , "Nuxt.js" ,],
      repositoryUrl: "https://github.com/example/portfolio-website",
      date: { 
        start: "2024-11-01", 
        end: "-", 
        duration: "1ヶ月" 
      },
      content: [
        { type: "sectionTitle", data: "制作背景" },
        { type: "text", data: "私はエンジニアとして、これまで様々なプロジェクトや技術に取り組んできました。それぞれの経験を通じて得た知識やスキルを形に残し、今後のキャリアや自己成長に繋げるために、このポートフォリオページを作成しました。" },
        { type: "sectionTitle", data: "ポートフォリオの目的" },
        { type: "text", data: "1⃣スキルと経験の可視化" },
        { type: "text", data: "自身の技術スタックや、これまで関わったプロジェクトをわかりやすくまとめることで、私の実績や得意分野を一目で把握していただけるようにしました。" },
        { type: "text", data: "2⃣成長の記録" },
        { type: "text", data: "プロジェクトを通じて得た学びや挑戦を記録し、自分自身の成長を振り返る場として活用することを目的としています。" },
        { type: "text", data: "3⃣未来のチャンスへの架け橋" },
        { type: "text", data: "このポートフォリオを通じて、新しいプロジェクトや仕事の機会を得ること、また同じ志を持つ方々とのつながりを広げるきっかけを作ることを目指しています。" },
        { type: "sectionTitle", data: "ポートフォリオに込めたこだわり" },
        { type: "text", data: "1⃣デザイン" },
        { type: "text", data: "シンプルで直感的に使えるユーザーインターフェースを意識し、閲覧者がストレスなく情報を探せるよう工夫しました。また、スタイルをダークモードとホワイトモードでページごとに変化させることで、閲覧者に新鮮で多様な体験を提供しています。" },
        { type: "text", data: "2⃣技術" },
        { type: "text", data: "モダンなフロントエンド技術であるNuxt3、TypeScript、TailwindCss最大限活用して開発しました。" },
        { type: "text", data: "3⃣ストーリー性" },
        { type: "text", data: "自分のこれまでの社会人経験で得た教訓を年単位でまとめたり、各プロジェクトで直面した課題などをそれぞれまとめることで、単なる技術紹介にとどまらず、私の思考プロセスや成長を伝えられる内容にしています。" },
        { type: "sectionTitle", data: "各種リンク" },
        { type: "link", data: { text: "サイトリンク", url: 'https://main.d2ohg8yu2vb3z0.amplifyapp.com' }},
        { type: "link", data: { text: "GitHub リポジトリ", url: 'https://github.com/ishikawagoemon1205/portfolio2.0' }},
        { type: "sectionTitle", data: "今後記載予定内容" },
        { type: "text", data: "作成難易度が高かった個所" },
    ],
      links: [
        { title: "GitHub リポジトリ", url: "https://github.com/example/portfolio-website" },
        { title: "デモサイト", url: "https://example.com/portfolio" }
      ],
      images: [{ src: '/works/20000/bg.png', alt: "プロジェクト画像" }],
    },
    homepage02: {
        id: 20002,
        title: "旧ポートフォリオページの開発",
        description: "このプロジェクトのフロントエンド部分で使用したHTML、CSS、JavaScriptのソースコードを公開しています。",
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript" , "Nuxt.js" ,],
        repositoryUrl: "https://github.com/example/portfolio-website",
        date: { 
          start: "2024-01-01", 
          end: "2024-02-28", 
          duration: "2ヶ月" 
        },
        content: [
          { type: "sectionTitle", data: "制作背景" },
          { type: "text", data: "私はエンジニアとして、これまで様々なプロジェクトや技術に取り組んできました。それぞれの経験を通じて得た知識やスキルを形に残し、今後のキャリアや自己成長に繋げるために、このポートフォリオページを作成しました。" },
          { type: "sectionTitle", data: "ポートフォリオの目的" },
          { type: "text", data: "1⃣スキルと経験の可視化" },
          { type: "text", data: "自身の技術スタックや、これまで関わったプロジェクトをわかりやすくまとめることで、私の実績や得意分野を一目で把握していただけるようにしました。" },
          { type: "text", data: "2⃣成長の記録" },
          { type: "text", data: "プロジェクトを通じて得た学びや挑戦を記録し、自分自身の成長を振り返る場として活用することを目的としています。" },
          { type: "text", data: "3⃣未来のチャンスへの架け橋" },
          { type: "text", data: "このポートフォリオを通じて、新しいプロジェクトや仕事の機会を得ること、また同じ志を持つ方々とのつながりを広げるきっかけを作ることを目指しています。" },
          { type: "sectionTitle", data: "各種リンク" },
          { type: "link", data: { text: "サイトリンク", url: 'https://main.d33tzcyknqz8k8.amplifyapp.com' }},
          { type: "link", data: { text: "GitHub リポジトリ", url: 'https://github.com/ishikawagoemon1205/portfolio2.0' }},
          { type: "sectionTitle", data: "今後記載予定内容" },
          { type: "text", data: "作成難易度が高かった個所" },
        ],
        links: [
          { title: "GitHub リポジトリ", url: "https://github.com/example/portfolio-website" },
          { title: "デモサイト", url: "https://example.com/portfolio" }
        ],
        images: [{ src: '/works/20002/bg.png', alt: "プロジェクト画像" }],
      },
  };
  