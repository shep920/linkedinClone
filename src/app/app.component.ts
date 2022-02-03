import { Component } from '@angular/core';
import { mock_post_list } from './cards/post/mock-post-list';
import { PostModel } from './cards/post/post-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linkedin-clone';
  posts: PostModel[] = [];

  constructor(){
    for (var post of mock_post_list){
      this.posts.push(post);
    }
  }
}
