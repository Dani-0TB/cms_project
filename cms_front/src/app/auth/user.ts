export interface User {
  username: string,
  password: string
}

export interface RegistrationForm {
  username: string,
  email: string,
  password: string,
  password2: string
}

export interface NewUser {
  username: string,
  email: string,
  password: string,
}

export interface Session {
  user: string,
  token: string
}