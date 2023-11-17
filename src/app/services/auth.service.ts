import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = {
    login: 'login',
    password: '123',
    role: null || localStorage.getItem('role'),
    erorr: '',
    isLogin:false,
  }

  public role!: string;

  constructor() { }

  public getUser(data: any) {

    if (data.login === 'login' && data.password === '123') {
      this.user.role = 'admin';
      localStorage.setItem('role', this.user.role)
      this.user.erorr = 'ok';
      this.user.isLogin = true;
    }
    else{
      this.user.erorr = 'no';
    }
  

  }

}
