import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usernameInput: string | undefined;
  passwordInput: string | undefined;

  constructor () {
    this.usernameInput = '';
    this.passwordInput = '';
  }

  ngOnInit() {
    
  }
}
