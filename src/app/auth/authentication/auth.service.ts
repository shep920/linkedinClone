import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]";
  private signupEndPoint = "signUp";


  public constructor(private http:HttpClient){}

  public signup(email:string, password:string){
    const requestPayload = {
      'email':email,
      'password':password,
      'returnSecureToken':true

    }
    return this.http.post(this.baseUrl+ ':'+ this.signupEndPoint + '?' + 'key='+environment.firebase.apiKey,requestPayload);
  }
}
