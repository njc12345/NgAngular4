import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceManualInjectionService {
  user: any;

  setUser(newUser){
    this.user = newUser;
  }

  getUser(){
    return this.user;
  }

}
