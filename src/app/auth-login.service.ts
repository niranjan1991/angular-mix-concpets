import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  
  
  constructor() { }

  loggedInStatus : boolean = false;
  
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  getLoggedIn(){
    return this.loggedInStatus;
  }

}
