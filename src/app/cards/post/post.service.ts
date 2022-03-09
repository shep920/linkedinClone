import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostModel } from "./post-model";

@Injectable({
  providedIn: 'root'
})
export class PostService{
  private baseUrl:string='https://linkedinclone-99101-default-rtdb.firebaseio.com/';
  private UserInfoEndpoint:string='posts.json';

  constructor(private http:HttpClient){

  }

  public getPostInfo(){
    return this.http.get<PostModel []>(this.baseUrl+this.UserInfoEndpoint);
  }
  public getPost(index:number){
    return this.http.get<PostModel>(this.baseUrl+index+this.UserInfoEndpoint);
  }
}
