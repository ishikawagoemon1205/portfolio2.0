import type {User} from "@/interfaces";

export function createUserList(): Map<number,User>{
    const UserInit = new Map<number,User>();
    UserInit.set(
        1,
        {
            id: "1",
            username: "石川",
            email: "ishikawaatsuhiro1205@gmail.com",
            password: "ishikawa1205",
            created_at: new Date(),
            updated_at: new Date(),
            total_asset_value: 77777777,
        }
    );
    UserInit.set(
        2,
        {
            id: "2",
            username: "田中",
            email: "karakoroatsuhiro@gmail.com",
            password: "ishikawa1205",
            created_at: new Date(),
            updated_at: new Date(),
            total_asset_value: 300,
        }
    );
    return UserInit;
}