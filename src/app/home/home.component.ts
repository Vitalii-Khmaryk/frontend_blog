import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IPostsUserResponse } from '../interface/post.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingPosts = false;
  postsArray:IPostsUserResponse[]=[];
  category:string='';
constructor(public authService:AuthService){}
ngOnInit(): void {
  this.loadingPosts = true;
  this.authService.getAllPosts().subscribe(posts=>{
   this.postsArray=posts;
   this.loadingPosts = false;
  })
}
setCategory(category:string):void{
 this.category=category;
}
}
