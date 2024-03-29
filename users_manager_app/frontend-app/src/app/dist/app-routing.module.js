"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth/auth.component");
var home_component_1 = require("./home/home.component");
var core_2 = require("./core");
var login_component_1 = require("./auth/login/login.component");
var register_component_1 = require("./auth/register/register.component");
var users_component_1 = require("./home/users/users.component");
var new_user_component_1 = require("./home/new-user/new-user.component");
var user_component_1 = require("./home/user/user.component");
var routes = [
    {
        path: '',
        // pathMatch: 'full',
        component: home_component_1.HomeComponent,
        canActivate: [core_2.AuthGuard],
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', component: users_component_1.UsersComponent },
            { path: 'users/:id', component: user_component_1.UserComponent },
            { path: 'add', component: new_user_component_1.NewUserComponent }
        ]
    },
    // {
    //   path: 'login',
    //   component: AuthComponent,
    //   canActivate: [GuestGuard],
    // },
    {
        path: 'auth',
        component: auth_component_1.AuthComponent,
        canActivate: [core_2.GuestGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
        ]
    },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
