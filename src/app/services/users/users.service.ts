import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Users } from 'src/app/models/Users';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient
  ) { }

  public users(): Observable<Users> {
    return this._http.get<Users>(`${environment.apiUrl}/users`);
  }
}
