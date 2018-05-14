import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user: any = {};
  user = { "email" :"n@gmail.com", "password":"pass"};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log("Login" + JSON.stringify(this.user));
    /*this.authService.login(this.user).subscribe((res) => {
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
    },
      error => {
        console.log(error);
      });
      */

      this.router.navigate(["/accounts"]);
  }

}
