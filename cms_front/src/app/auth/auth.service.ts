import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Session, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  
  isLoggedIn = false;
  redirectUrl: string | null = null;
  session: any = {user: "Anonymous", token: "none"};

  login(user: User) {
    let apiURL = 'http://localhost:8000/login'
    let httpOptions = {headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    observe: 'response' as 'response'
    };

    this.http.post(apiURL, user, httpOptions).subscribe((response) => {
      if (response.ok) {
        this.isLoggedIn = true;
        this.session = response.body;
        this.router.navigate(['/home']);
      }
    });
  }

  register() {
    
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
