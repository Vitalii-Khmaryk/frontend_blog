import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor( 
  private toastr: ToastrService,
  public authService: AuthService,
  private router: Router
){}
logoutUser(){
  this.authService.logout();
  this.toastr.show('You are logged out!');
  this.router.navigate(['/auth']);
  }
}
