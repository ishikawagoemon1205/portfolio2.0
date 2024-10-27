import type {ReturnJsonUser} from '@/interfaces';
import { createUserList } from '~/userDB';

export default defineEventHandler(
    (event): ReturnJsonUser => {
        const userList = createUserList();
        const userListValue = userList.values();
        const userListArray = Array.from(userListValue);
        return {
            result: 1,
            data: userListArray,
        };
    }
);