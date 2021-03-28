import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient , private authService: AuthService) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);    
    }

    create(data) {
        return this.http.post<any>(`${environment.apiUrl}/${environment.userApi}`, data)
    }

}