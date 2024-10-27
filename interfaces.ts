export interface User {
    id?: string; // UUID型 (ユーザー識別用)
    username?: string; // ユーザー名
    email: string; // メールアドレス
    password: string; // パスワード（ハッシュ化）
    created_at?: Date; // アカウント作成日時
    updated_at?: Date; // アカウント情報更新日時
    total_asset_value?: number; // 総資産額 (オプショナル)
};

export interface ReturnJsonUser {
    result: number;
    data: User[];
};

export interface LoginFromState {
    email: string;
    password: string;
};

export interface IsUserLoggedIn {
    isSuccessful: boolean;
};

type EmailErrorMessage = 
    | "メールアドレスの形式が無効です"
    | "";

type PasswordErrorMessage = 
    | "パスワードの形式が無効です"
    | "";

type LoginErrorMessage =
    | "登録のメールアドレス、パスワードは存在しません"
    | "アカウントがロックされています"
    | "";


export interface LoginResponse {
    emailErrorMessage: EmailErrorMessage;
    passwordErrorMessage: PasswordErrorMessage;
    authErrorMessage: LoginErrorMessage;
};