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

  account:any;

  tx = { "accountId":"", "amount":""};
  //this.account = {"accountId" :1, "accountType":"Savings", "balance": 10000};

  constructor(private route:ActivatedRoute, private accountService: AccountService) { 
    this.route.params.subscribe( (params) => {
      this.accountId = params["id"];
    })
  }

  ngOnInit() {
    console.log('accountId', this.accountId);
    this.loadAccountDetail();
  }

  loadAccountDetail(){
    this.accountService.getOne(this.accountId).subscribe ( (res) => {
        this.account = res;
    });
  }

  withdraw(){
    console.log("Account:"+ JSON.stringify(this.tx));
    this.accountService.withdraw(this.accountId, this.tx).subscribe ( (res) => {
      console.log("Withdrawal" + res);
    });
  }

}
