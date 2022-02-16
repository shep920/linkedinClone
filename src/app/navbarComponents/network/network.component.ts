import { Component, OnInit } from '@angular/core';
import { mock_post_list } from 'src/app/cards/post/mock-post-list';
import { PostModel } from 'src/app/cards/post/post-model';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  posts: PostModel[] = [];
  constructor() {

    for (var post of mock_post_list){
      this.posts.push(post);
    }
   }

  ngOnInit() {
  }

}
