import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  url ="http://localhost:8080/";

  constructor(private http: HttpClient) { }

  list(userId){
    return this.http.get(this.url + "users/"+ userId + "/accounts");
  }

  getOne(accountId){
    return this.http.get(this.url + "accounts/"+ accountId);
  }

  withdraw(accountId, account) {
    return this.http.post(this.url + "accounts/" + account + "/withdraw" , account );
  }
}
