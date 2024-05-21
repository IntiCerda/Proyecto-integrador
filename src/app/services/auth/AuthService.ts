import { ApiResponse } from "../../interfaces/response/AppResponse";
import { User } from "../../interfaces/user/User";
import { tgcfService } from "../TgcfService";

export class AuthService{

    public static async login(obj: User): Promise<ApiResponse>{
        return (await tgcfService.post('/login', obj)).data
    }
}