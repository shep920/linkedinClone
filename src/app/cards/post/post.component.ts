import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() img!: string;
  @Input() postText!: string;
  @Input() altImage: string;
  @Input() name: string;
  constructor() {
    this.altImage = "";
    this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiME7C5shpaxl0p_VLzCxXjm7emGHsdzBZhUX5nwo_L1Rg7eNczOQBMCVwo_ilOV8s6rY&usqp=CAU";
    this.postText = "i hate you, mom";
    this.name = "ya boi";
   }

  ngOnInit() {
  }

}
