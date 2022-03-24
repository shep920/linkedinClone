import { Injectable } from "@angular/core";
import { PostModel } from "./post-model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class PostService{


  constructor(private db:AngularFireDatabase){

  }

  public getPostInfo(){
    return this.db.list<PostModel>("posts").valueChanges();
  }
  public getPost(index:number){
    return this.db.list("posts",ref=>ref.orderByChild('name').startAt('a')).valueChanges();
  }
}
