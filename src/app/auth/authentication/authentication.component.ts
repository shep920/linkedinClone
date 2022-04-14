import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'fm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  public onSubmit(data: NgForm){
    this.auth.signup(data.value.email, data.value.password).subscribe(data =>console.log(data));
    console.log('bruh');
    console.log(data);
  }

}
