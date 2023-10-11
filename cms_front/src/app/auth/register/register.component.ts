import { Component } from '@angular/core';
import { NewUser, RegistrationForm } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: RegistrationForm = {
    username: "",
    email: "",
    password: "",
    password2:""
  }
}
