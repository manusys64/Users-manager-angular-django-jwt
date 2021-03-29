"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.faUserEdit = free_solid_svg_icons_1.faUserEdit;
        this.faTimes = free_solid_svg_icons_1.faTimes;
        this.currentUser = null;
        this.currentIndex = -1;
        this.title = '';
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (data) {
            _this.users = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UsersComponent.prototype.refreshList = function () {
        this.getUsers();
        this.currentUser = null;
        this.currentIndex = -1;
    };
    UsersComponent.prototype.setUser = function (user, index) {
        this.currentUser = user;
        this.currentIndex = index;
    };
    UsersComponent.prototype.unsetUser = function (user, index) {
        this.currentUser = null;
        this.currentIndex = null;
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
