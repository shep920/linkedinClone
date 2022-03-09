import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from './post-model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() img!: string;
  @Input() postText!: string;
  @Input() altImage: string;
  @Input() name: string;
  // posts: PostModel[] = [];
  // private baseUrl:string='https://linkedinclone-99101-default-rtdb.firebaseio.com/';
  // private UserInfoEndpoint:string='posts.json';


  constructor(private service:PostService) {
    this.altImage = "";
    this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiME7C5shpaxl0p_VLzCxXjm7emGHsdzBZhUX5nwo_L1Rg7eNczOQBMCVwo_ilOV8s6rY&usqp=CAU";
    this.postText = "i hate you, mom";
    this.name = "ya boi";
   }

}
