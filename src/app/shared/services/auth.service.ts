import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url ="http://localhost:8080/";

  constructor(private http: HttpClient) { }

  login(user){
    return this.http.post(this.url + "auth/login", user);
  }

  getCurrentUser(){
    var obj = localStorage.getItem("LOGGED_IN_USER");
    if (obj != null ) {
      return JSON.parse(obj);
    }
    else{
      return null;
    }
  }
}
