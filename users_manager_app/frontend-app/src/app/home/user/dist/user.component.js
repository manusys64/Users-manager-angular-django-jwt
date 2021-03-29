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
        this.originalData = null;
        this.success = '';
        this.error = '';
        this.password = false;
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
            _this.originalData = data;
            _this.currentUser.password = '';
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.update = function (status) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var data = {
            username: (_a = this.currentUser.username) !== null && _a !== void 0 ? _a : this.originalData.username,
            email: (_b = this.currentUser.email) !== null && _b !== void 0 ? _b : this.originalData.email,
            first_name: (_c = this.currentUser.first_name) !== null && _c !== void 0 ? _c : this.originalData.first_name,
            last_name: (_d = this.currentUser.last_name) !== null && _d !== void 0 ? _d : this.originalData.last_name,
            is_superuser: (_e = this.currentUser.is_superuser) !== null && _e !== void 0 ? _e : this.originalData.is_superuser
        };
        if (this.password)
            data['password'] = this.currentUser.password;
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
