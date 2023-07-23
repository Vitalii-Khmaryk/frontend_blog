export interface IRegUserRequest {
  name: string;
  login: string;
  email: string;
  password: string;
}
export interface IRegUserResponse extends IRegUserRequest {
  success: boolean;
  msg: string;
}
