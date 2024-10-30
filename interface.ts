type navItem = {
    name: string,
    path: string,
    isEnable: boolean,
};

export interface navItems {
    home: navItem, // ホームページ
    profile: navItem, // プロフィール
    projects: navItem, // プロジェクト
    works: navItem, // 制作物
    blog: navItem, // ブログ
    contact: navItem, // お問い合わせ
    resume: navItem, // 履歴書
};