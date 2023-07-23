import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  category!: string;
  text: string = '';
  title: string = '';
  photo!:string;
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ){}
  

  createPost(): any {
    const user = localStorage.getItem("user");
    const authorUser = user ? JSON.parse(user).login : "";

    const post = {
      category:this.category,
      title: this.title,
      photo: this.photo,
      text: this.text,
      author:authorUser,
      date:new Date()
    };
    if (!post.category) {
      this.toastr.info('Select a category');
      return false;
    } else if (!post.title) {
      this.toastr.info('Enter title');
      return false;
    } else if (!post.photo) {
      this.toastr.info('Insert a photo');
      return false;
    } else if (!post.text) {
      this.toastr.info('Enter text');
      return false;
    }
    this.authService.createPost(post).subscribe((data) => {
      if (!data.success) {
        this.toastr.error(`${data.msg}`);
      } else {
        this.toastr.success(`${data.msg}`);
        this.router.navigate(['/']);
      }
    });
  }

}
