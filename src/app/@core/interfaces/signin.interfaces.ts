import { IUser } from "./user.interface";

export interface ISignIn {
    email:      string;
    password:   string;
}

export interface IResponseSignIn {
    status:     boolean;
    message:    string;
    token?:     string;
    user?:      IUser;
}