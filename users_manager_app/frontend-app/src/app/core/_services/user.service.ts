import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient , private authService: AuthService) { }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.currentUserValue.token   
      })
    };
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users/`, this.httpOptions);    
    }

    create(data) {
        return this.http.post<any>(`${environment.apiUrl}/${environment.userApi}/`, data, this.httpOptions)
    }
    update(id : number , data) {
        return this.http.put<any>(`${environment.apiUrl}/${environment.userApi}/${id}/`, data, this.httpOptions)
    }
    delete(id : number) {
        return this.http.delete<any>(`${environment.apiUrl}/${environment.userApi}/${id}/`, this.httpOptions)
    }
    get(id : number) {
        return this.http.get<any>(`${environment.apiUrl}/${environment.userApi}/${id}/`, this.httpOptions)
    }

}