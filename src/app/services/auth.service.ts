import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44393/api/auth/';
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
