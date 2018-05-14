import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  loggedInUser = {};
  constructor(private accountService: AccountService, private authService: AuthService) { }

  accounts:Object = [];
 /* this.accounts = [ {"accountId" :1, "accountType":"Savings", "balance": 10000},
    {"accountId" :2, "accountType":"CURRENT", "balance": 5000}]
*/


  ngOnInit() {
    
    this.loggedInUser = this.authService.getCurrentUser();    
    this.list(this.loggedInUser["id"]);
  }

  list(userId){
    this.accountService.list(userId).subscribe( (res) => {
      this.accounts = res;
    });
  }

}
