export class User {
    user_id: number;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    isSuper: boolean;
    token?: string;
    refreshToken?: string;
}