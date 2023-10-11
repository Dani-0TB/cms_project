import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor (
    private authService: AuthService,
    private router: Router
    ) {}

  login(isValid: boolean | null){
    if (!isValid) {
      return;
    }
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    })
  }
}
