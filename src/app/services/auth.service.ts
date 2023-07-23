import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IAuthUserRequest,IAuthUserResponse} from '../interface/auth.interface';
import { IRegUserRequest, IRegUserResponse } from '../interface/reg.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IPostsUserRequest, IPostsUserResponse } from '../interface/post.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;
  user: any;
 // url:string='https://backend-blog-dwdq.onrender.com';
  url:string='http://localhost:8080';
  constructor(public http: HttpClient, private jwtHelper: JwtHelperService) {
  }


  registerUser(user: IRegUserRequest) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<IRegUserResponse>(
      `${this.url}/account/reg`,
      user,
      { headers: headers }
    );
  }
  authUser(user: IAuthUserRequest) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<IAuthUserResponse>(
      `${this.url}/account/auth`,
      user,
      { headers: headers }
    );
  }
  storeUser(token: any, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }
  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }
 
 createPost(post: any) {
    const token: string | null = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json'); 
    if (typeof token === 'string') {
      headers = headers.append('Authorization', token); 
    }
    return this.http.post<any>(
      `${this.url}/account/dashboard`,
      post,
      { headers: headers }
    );
  }
  

  getAllPosts(){
    return this.http.get<any>(`${this.url}`);
  }
  getPostById(id:string){
    return this.http.get<IPostsUserResponse>(`${this.url}/post/${id}`);
  }
  deletePost(id:string){
    const token:string | null=localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (typeof token === 'string') {
      headers = headers.append('Authorization', token); 
    }
    return this.http.delete<IPostsUserResponse>(`${this.url}/post/${id}`,{ headers: headers });
  }
}
