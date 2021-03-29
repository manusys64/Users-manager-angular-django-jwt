"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewUserComponent = void 0;
var core_1 = require("@angular/core");
var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.user = {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            is_superuser: false
        };
        this.errors = {};
        this.submitted = false;
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent.prototype.create = function () {
        var _this = this;
        var data = {
            username: this.user.username,
            email: this.user.email,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            password: this.user.password,
            is_superuser: this.user.is_superuser
        };
        this.userService.create(data)
            .subscribe(function (response) {
            console.log(response);
            _this.submitted = true;
            setTimeout(function () {
                _this.router.navigate(['/users']);
            }, 1000);
        }, function (error) {
            _this.errors = error.error;
        });
    };
    NewUserComponent = __decorate([
        core_1.Component({
            selector: 'app-new-user',
            templateUrl: './new-user.component.html',
            styleUrls: ['./new-user.component.css']
        })
    ], NewUserComponent);
    return NewUserComponent;
}());
exports.NewUserComponent = NewUserComponent;
