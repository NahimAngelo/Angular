import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserDetails } from 'src/app/models/UserDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  public user(id: number): Observable<UserDetails> {
    return this._http.get<UserDetails>(`${environment.apiUrl}/users/${id}`);
  }
}
