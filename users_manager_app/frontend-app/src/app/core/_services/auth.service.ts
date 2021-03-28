import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private username
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/${environment.jwtLogin}`, { username, password })
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    let currentUser: User;
                    if (response.access) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        currentUser = jwtDecode(response.access)
                        currentUser.token = response.access
                        this.username = username 
                        currentUser.username = username
                        currentUser.refreshToken = response.refresh
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        this.currentUserSubject.next(currentUser);
                    } 
                    return currentUser;
                }),
            )
            // .subscribe( data => console.log('data'), error => console.log('error'))
    }
    register(username: string, password: string , confirm_password: string , email: string  ) {
        return this.http.post<any>(`${environment.apiUrl}/api/register/`, { username, password , confirm_password , email  })
            
    }
    refreshToken() {
        console.log('this.currentUserValue.refreshToken')
        console.log(this.currentUserValue.refreshToken)
        const refreshToken = this.currentUserValue.refreshToken
        return this.http.post<any>(`${environment.apiUrl}/${environment.jwtRefresh}`, { 'refresh': refreshToken })
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    
                    let currentUser: User;
                    if (response.access) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        currentUser = jwtDecode(response.access)
                        currentUser.token = response.access
                        currentUser.username = this.username
                        currentUser.refreshToken = response.refresh
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        console.log(currentUser)
                        this.currentUserSubject.next(currentUser);
                    } 
                    return currentUser;
                }),
            )
            // .subscribe( data => console.log('data'), error => console.warn(error))
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}


