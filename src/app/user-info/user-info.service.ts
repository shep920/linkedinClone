import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Userinfo } from "./user-info";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService{
  private baseUrl:string='guiaewbhgiuy';
  private UserInfoEndpoint:string='gaga';

  constructor(private http:HttpClient){

  }

  public getUserInfo(){
    return this.http.get<Userinfo []>(this.UserInfoEndpoint);
  }
  public getUser(index:number){
    return this.http.get<Userinfo>(this.baseUrl+index+this.UserInfoEndpoint);
  }
}
