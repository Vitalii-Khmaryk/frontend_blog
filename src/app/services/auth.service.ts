import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  public http:HttpClient
) { }

registerUser(user:any){
  let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/account/reg',user,{headers:headers})
}


}
