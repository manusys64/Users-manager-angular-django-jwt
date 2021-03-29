"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, authService, route, router) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.currentUser = null;
        this.success = '';
        this.error = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        this.success = '';
        this.error = '';
        this.getUser(this.route.snapshot.paramMap.get('id'));
    };
    UserComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.get(id)
            .subscribe(function (data) {
            _this.currentUser = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.update = function (status) {
        var _this = this;
        var data = {
            username: this.currentUser.username,
            email: this.currentUser.email,
            first_name: this.currentUser.first_name,
            last_name: this.currentUser.last_name,
            password: this.currentUser.password,
            is_superuser: this.currentUser.is_superuser
        };
        this.userService.update(this.currentUser.id, data)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/users']);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype["delete"] = function () {
        var _this = this;
        this.userService["delete"](this.currentUser.id)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/users']);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
