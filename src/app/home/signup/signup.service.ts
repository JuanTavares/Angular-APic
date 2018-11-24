import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { NewUser } from './new-user';

const API = environment.API;

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUsernameTaken(userName: string) {
    return this.http.get(API + 'user/exists/' + userName);
  }

  signup(newUser: NewUser) {
    return this.http.post(API + '/user/signup', newUser);
  }
}
