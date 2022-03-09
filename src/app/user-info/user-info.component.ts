import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Userinfo } from './user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: Userinfo | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showUserInfo();
  }

  generateInfo(){
    return this.http.get<Userinfo>("https://linkedinclone-99101-default-rtdb.firebaseio.com/myInfo.json");
  }

  showUserInfo(){
    this.generateInfo().subscribe((data:Userinfo)=>{
      console.log(data);
      this.myInfo = data;
    })
    }
}
