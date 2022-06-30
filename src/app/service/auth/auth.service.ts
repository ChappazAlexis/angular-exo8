import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth =  false;

  constructor() { }

  signIn() {

    return new Promise(
      (res, rej) => {
        setTimeout(() => {
          this.isAuth = true;
          res(true);
        }, 1000);
      }
    )
  }

  signOut() {
    this.isAuth = false;
  }
}
