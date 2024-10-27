import { User,IsUserLoggedIn } from "~/interfaces";
import { createUserList } from "~/userDB";

export default defineEventHandler(
    async (event):Promise<IsUserLoggedIn> => {
        const userList = createUserList();
        const userListValue = userList.values();
        const userListArray = Array.from(userListValue);
        const body:any = await readBody(event);
        const user:User = body as User;
        const userEmail:string = user.email;
        const userPassword:string = user.password;
        let isLogined:boolean = false;
        for(let i = 0 ; i < userListArray.length ; i++){
            let isEmailVerified:boolean = userListArray[i].email === userEmail ? true : false;
            let isPasswordVerified:boolean = userListArray[i].password === userPassword ? true : false;
            if(isEmailVerified&&isPasswordVerified){
                isLogined = true;
                break;
            };
        };
        return {
            isSuccessful: isLogined,
        };
    }
)