"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.token = this.authService.currentUserValue ? this.authService.currentUserValue.token : '';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            })
        };
    }
    UserService.prototype.getAll = function () {
        return this.http.get(environment_1.environment.apiUrl + "/api/users/", this.httpOptions);
    };
    // create(data) {
    //     return this.http.post<any>(`${environment.apiUrl}/${environment.userApi}/`, data, this.httpOptions)
    // }
    UserService.prototype.create = function (data) {
        return this.http.post(environment_1.environment.apiUrl + "/api/register/", data);
    };
    UserService.prototype.update = function (id, data) {
        return this.http.patch(environment_1.environment.apiUrl + "/" + environment_1.environment.userApi + "/" + id + "/", data, this.httpOptions);
    };
    // patch(id : number , data) {
    //     return this.http.patch<any>(`${environment.apiUrl}/${environment.userApi}/${id}/`, data, this.httpOptions)
    // }
    UserService.prototype["delete"] = function (id) {
        return this.http["delete"](environment_1.environment.apiUrl + "/" + environment_1.environment.userApi + "/" + id + "/", this.httpOptions);
    };
    UserService.prototype.get = function (id) {
        return this.http.get(environment_1.environment.apiUrl + "/" + environment_1.environment.userApi + "/" + id + "/", this.httpOptions);
    };
    UserService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
