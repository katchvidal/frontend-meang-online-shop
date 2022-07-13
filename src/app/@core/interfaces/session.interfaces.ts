import { IUser } from "./user.interface";

export interface ISession {
    token? : string;
    expiresIn : string;
    user? : IUser
}


export interface IAuthMeResponse {
    status: boolean;
    message?: string;
    user?: IUser;
}