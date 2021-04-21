import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
import { Login } from 'src/app/models/Login';
import { LoginToken } from 'src/app/models/LoginToken';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  public login(body: Login): Observable<LoginToken> {
    return this._http.post<LoginToken>(`${environment.apiUrl}/login`, body);
  }
}
