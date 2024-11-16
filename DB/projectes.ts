type Project = {
    id: number;
    companyname: string;
    date: {
        start: string;
        end: string;
        duration: string;
    };
    impactLevel: string;
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
        companyname: "パナソニック産機システムズ株式会社",
        date: { start: "2024-01-01", end: "2024-12-31", duration: "12ヶ月" },
        impactLevel: "中程度",
        title: "社員稟議システムの開発・運用支援",
        subtitle: "開発者の実績とスキルを伝えるためのウェブサイト",
        description: "このプロジェクトは、自己紹介と実績を効果的に見せるためのウェブサイト開発です。",
        challenges: ["レスポンシブデザインの実装", "新しいフレームワークの習得"],
        achievements: ["ページ表示速度を30%改善", "UIの最適化"],
        technologies: ["HTML", "CSS", "JavaScript"],
        teamSize: 1000,
        role: "フロントエンドエンジニア",
        phases: [ "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、ウェブサイトのUI/UX設計とフロントエンド開発を担当しました。" },
            { type: "image", data: "/images/project1-1.png" },
            { type: "text", data: "ユーザーからのフィードバックを元にデザインを改善しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: '/project/10000/panasonic_logo.png', alt: "プロジェクト画像" }],
        links: [{ title: "GitHub リポジトリ", url: "https://github.com/example" }],
    },
    "ecommerce-platform": {
        id: 10001,
        companyname: "株式会社サンプル",
        date: { start: "2020-01-01", end: "2020-12-31", duration: "12ヶ月" },
        impactLevel: "高程度",
        title: "サンプル",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript" , "Nuxt.js", "React", "Flutter", "Python" , "Firebase" , "AWS" ],
        teamSize: 5,
        role: "",
        phases: ["企画", "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/project/10001/sample.jpg", alt: "Eコマースプラットフォーム画像" }],
        links: [{ title: "", url: "" }],
    },
    "shimokitazawa-drive-school": {
        id: 10002,
        companyname: "下北沢自動車学校",
        date: { start: "2023-03-01", end: "2020-05-31", duration: "2ヶ月" },
        impactLevel: "低程度",
        title: "自動車学校のホームページリニューアル",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript"],
        teamSize: 1,
        role: "",
        phases: ["企画", "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/project/10002/simokitazawa.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "galaxy-kunitati": {
        id: 10003,
        companyname: "ギャラリー国立",
        date: { start: "2021-10-01", end: "2021-12-31", duration: "3ヶ月" },
        impactLevel: "低程度",
        title: "アートギャラリーのウェブサイト開発",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript"],
        teamSize: 5,
        role: "",
        phases: ["設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/project/10003/kunitati.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "wcm-syusyu": {
        id: 10004,
        companyname: "早稲田大学",
        date: { start: "2024-07-01", end: "2024-12-31", duration: "4ヶ月" },
        impactLevel: "低程度",
        title: "産業廃棄物取集トラッキングシステム",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["Flutter", "Python" , "Firebase", "AWS"],
        teamSize: 5,
        role: "",
        phases: ["設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/project/10004/wcm.jpg", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "elavel": {
        id: 10005,
        companyname: "株式会社五右衛門",
        date: { start: "2021-01-01", end: "2021-7-31", duration: "7ヶ月" },
        impactLevel: "高程度",
        title: "AIを活用した旅行レコメンドシステムの設計",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["Flutter"],
        teamSize: 1,
        role: "",
        phases: ["設計"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/project/10005/elavel.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "asl-carta": {
        id: 10006,
        companyname: "株式会社ASL",
        date: { start: "2023-06-01", end: "2023-12-31", duration: "6ヶ月" },
        impactLevel: "高程度",
        title: "社内SNSのUI/UX改善とフロントエンド開発",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript" , "Nuxt.js"],
        teamSize: 300,
        role: "",
        phases: ["設計" , "実装"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
        ],
        images: [{ src: "/project/10006/asl.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
};