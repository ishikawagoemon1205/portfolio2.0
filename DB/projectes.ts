type Project = {
    id: number;
    date: {
        start: string;
        end: string;
        duration: string;
    };
    impactLevel: number;
    title: string;
    subtitle: string;
    description: string;
    challenges: string[];
    achievements: string[];
    technologies: string[];
    teamSize: number;
    role: string;
    phases: string[];
    content: {
        type: "text" | "image" | "link";
        data: string;
    }[];
    images: {
        src: string;
        alt: string;
    }[];
    links: {
        title: string;
        url: string;
    }[];
};

type ProjectExample = Record<string, Project>;  


export const DBProjectData: ProjectExample = {
    "portfolio-website": {
        id: 10000,
        date: { start: "2023-01-01", end: "2023-06-30", duration: "6ヶ月" },
        impactLevel: 4,
        title: "ポートフォリオウェブサイト開発",
        subtitle: "開発者の実績とスキルを伝えるためのウェブサイト",
        description: "このプロジェクトは、自己紹介と実績を効果的に見せるためのウェブサイト開発です。",
        challenges: ["レスポンシブデザインの実装", "新しいフレームワークの習得"],
        achievements: ["ページ表示速度を30%改善", "UIの最適化"],
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        teamSize: 4,
        role: "フロントエンドエンジニア",
        phases: ["企画", "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、ウェブサイトのUI/UX設計とフロントエンド開発を担当しました。" },
            { type: "image", data: "/images/project1-1.png" },
            { type: "text", data: "ユーザーからのフィードバックを元にデザインを改善しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/images/project1-1.png", alt: "プロジェクト画像" }],
        links: [{ title: "GitHub リポジトリ", url: "https://github.com/example" }],
    },
    "ecommerce-platform": {
        id: 10000,
        date: { start: "2023-07-01", end: "2023-12-31", duration: "6ヶ月" },
        impactLevel: 5,
        title: "Eコマースプラットフォーム開発",
        subtitle: "オンライン販売向けのカスタマイズ可能なEコマースプラットフォーム",
        description: "ユーザーが簡単に商品を購入できるようにするためのインタラクティブなEコマースプラットフォームを開発しました。",
        challenges: ["決済システムの統合", "多言語対応の実装"],
        achievements: ["売上の20%増加", "ユーザーエクスペリエンスの向上"],
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        teamSize: 5,
        role: "バックエンドエンジニア",
        phases: ["企画", "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/images/project2-1.png", alt: "Eコマースプラットフォーム画像" }],
        links: [{ title: "GitHub リポジトリ", url: "https://github.com/example" }],
    },
};