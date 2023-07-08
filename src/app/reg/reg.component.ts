import { Component } from '@angular/core';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  name:string='';
  login:string='';
  email:string='';
  password:string='';
constructor(){}
signUp():any{
  const user={
    name:this.name,
    login:this.login,
    email:this.email,
    password:this.password
  }
  if (!user.name) {
   
    return false;
  }
  else if (!user.login) {
 
  return false;
  }
  else if (!user.email) {
    
  return false;
  }
  else if (!user.password) {
  
  return false;
  }
  
}
}
