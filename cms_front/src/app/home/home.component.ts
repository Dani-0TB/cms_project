import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Session } from '../auth/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  session: Session | any = {user: "Anonymous", token:"none"};

  constructor (
    private authService: AuthService
  ) {
    if (this.authService.isLoggedIn) {
      this.session = this.authService.session;
    }
  }
}
