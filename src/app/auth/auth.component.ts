import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  
  login: string = '';
 
  password: string = '';
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}
  signIn(): any {
    const user = {
      login: this.login,
      password: this.password,
    };
     if (!user.login) {
      this.toastr.info('Enter login');
      return false;
    }
    else if (!user.password) {
      this.toastr.info('Enter password');
      return false;
    }
    this.authService.authUser(user).subscribe((data) => {
      console.log(data);
      
      if (!data.success) {
        this.toastr.error(`${data.msg}`);
      } else {
        this.toastr.success(`Successfully logged in`);
        this.router.navigate(['/dashboard']);
        this.authService.storeUser(data.token,data.user);
      }
    });
  }
}
