import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  accountId:Object;

  account:Object;

  constructor(private route:ActivatedRoute, private accountService: AccountService) { 
    this.route.params.subscribe( (params) => {
      this.accountId = params["id"];
    })
  }

  ngOnInit() {
    console.log('accountId', this.accountId);
    this.account = {"accountId" :1, "accountType":"Savings", "balance": 10000};
  }

  withdraw(){
    console.log("Account:"+ JSON.stringify(this.account));
    this.accountService.withdraw(this.accountId, this.account).subscribe ( (res) => {
      console.log("Withdrawal" + res);
    });
  }

}
