import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/cards/post/post-model';
import { PostService } from 'src/app/cards/post/post.service';

@Component({
  selector: 'fm-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private ps:PostService) { }

  ngOnInit(): void {
  }

  addPost(post:PostModel){
    console.log("dumbass");
    console.log(post);
    this.ps.addPost(post);
  }

}
