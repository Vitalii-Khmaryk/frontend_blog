import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IPostsUserResponse } from '../interface/post.interface';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  post$: Observable<IPostsUserResponse> | undefined;
  login!: string | null;
  loadingPosts=false;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr:ToastrService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.loadingPosts=true;
    if (!this.authService.isAuthenticated()) {
      const userString = localStorage.getItem('user');
      this.login = userString ? JSON.parse(userString)?.login : null;
    }
    this.post$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.authService.getPostById(params['id']);
      })
    );
    this.post$.subscribe(() => {
      this.loadingPosts = false;
    });
  }
  deletePost(id:string):void{
   this.authService.deletePost(id).subscribe(data=>{
    if (!data.success) {
      this.toastr.error(`Post not deleted!`);
    } else {
      this.toastr.success(`Post deleted`);
      this.router.navigate(['/']);
    }
   })
  }
}
