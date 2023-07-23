import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent {
  name: string = '';
  login: string = '';
  email: string = '';
  password: string = '';
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}
  signUp(): any {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };
    if (!user.name) {
      this.toastr.info('Enter name');
      return false;
    } else if (!user.login) {
      this.toastr.info('Enter login');
      return false;
    } else if (!user.email) {
      this.toastr.info('Enter email');
      return false;
    } else if (!user.password) {
      this.toastr.info('Enter password');
      return false;
    }
    this.authService.registerUser(user).subscribe((data) => {
      if (!data.success) {
        this.toastr.error(`${data.msg}`);
        this.router.navigate(['/reg']);
      } else {
        this.toastr.success(`${data.msg}`);
        this.router.navigate(['/auth']);
      }
    });
  }
}
