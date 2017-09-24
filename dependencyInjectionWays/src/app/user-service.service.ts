import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  user: any;
  
    setUser(newUser){
      this.user = newUser;
    }
  
    getUser(){
      return this.user;
    }

}
