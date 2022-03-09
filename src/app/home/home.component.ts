import { Component, OnInit } from '@angular/core';
import { mock_post_list } from '../cards/post/mock-post-list';
import { PostModel } from '../cards/post/post-model';
import { PostService } from '../cards/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];
  constructor(private service:PostService) {


   }

  ngOnInit(): void{
    console.log('bruh');
    this.service.getPostInfo().subscribe((data:PostModel[])=>{
      console.log(data)
      for (var post of data){
        this.posts.push(post);
      }
    })

  }

}
