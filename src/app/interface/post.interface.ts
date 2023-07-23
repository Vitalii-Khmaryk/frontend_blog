export interface IPostsUserRequest {
    category: string;
    title: string;
    photo: string;
    text: string;
    author: string;
    date:string;
  }
  export interface IPostsUserResponse extends IPostsUserRequest {
    _id:string;
    __v:any;
    success: boolean;
    msg: string;
  }
  