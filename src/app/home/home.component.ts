import { Component, OnInit } from '@angular/core';
import { mock_post_list } from '../cards/post/mock-post-list';
import { PostModel } from '../cards/post/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];
  constructor() {

    for (var post of mock_post_list){
      this.posts.push(post);
    }
   }

  ngOnInit() {
  }

}
