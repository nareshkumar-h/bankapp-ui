import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  loggedInUser = {};
  constructor() { }

  accounts = [];


  ngOnInit() {
    this.accounts = [ {"accountId" :1, "accountType":"Savings", "balance": 10000},
    {"accountId" :2, "accountType":"CURRENT", "balance": 5000}]
  }

  list(){
    
  }

  

}
