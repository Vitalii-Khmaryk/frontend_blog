export interface IAuthUserRequest {
  login: string;
  password: string;
}

interface IUserResponse{
  id:any;
  name:string;
  login:string;
  email:string;
}

export interface IAuthUserResponse extends IAuthUserRequest {
  success: boolean;
  token?:string;
  user?:IUserResponse;
  msg?: string;
}
