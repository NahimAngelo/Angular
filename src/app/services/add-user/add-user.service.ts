import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUser } from 'src/app/models/AddUser';
import { AddUserResponse } from 'src/app/models/AddUserResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(
    private _http: HttpClient
  ) { }

  public addUser(body: AddUser): Observable<AddUserResponse> {
    return this._http.post<AddUserResponse>(`${environment.apiUrl}/users`, body);
  }
}
