"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var jwt_decode_1 = require("jwt-decode");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(environment_1.environment.apiUrl + "/" + environment_1.environment.jwtLogin, { username: username, password: password })
            .pipe(operators_1.map(function (response) {
            // login successful if there's a jwt token in the response
            var currentUser;
            if (response.access) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                currentUser = jwt_decode_1["default"](response.access);
                currentUser.token = response.access;
                _this.username = username;
                currentUser.username = username;
                currentUser.refreshToken = response.refresh;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                _this.currentUserSubject.next(currentUser);
            }
            return currentUser;
        }));
        // .subscribe( data => console.log('data'), error => console.log('error'))
    };
    AuthService.prototype.refreshToken = function () {
        var _this = this;
        console.log('this.currentUserValue.refreshToken');
        console.log(this.currentUserValue.refreshToken);
        var refreshToken = this.currentUserValue.refreshToken;
        return this.http.post(environment_1.environment.apiUrl + "/" + environment_1.environment.jwtRefresh, { 'refresh': refreshToken })
            .pipe(operators_1.map(function (response) {
            // login successful if there's a jwt token in the response
            var currentUser;
            if (response.access) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                currentUser = jwt_decode_1["default"](response.access);
                currentUser.token = response.access;
                currentUser.username = _this.username;
                currentUser.refreshToken = response.refresh;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                console.log(currentUser);
                _this.currentUserSubject.next(currentUser);
            }
            return currentUser;
        }));
        // .subscribe( data => console.log('data'), error => console.warn(error))
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
