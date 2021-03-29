"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var core_2 = require("./core");
var login_component_1 = require("./auth/login/login.component");
var register_component_1 = require("./auth/register/register.component");
var users_component_1 = require("./home/users/users.component");
var user_component_1 = require("./home/user/user.component");
var new_user_component_1 = require("./home/new-user/new-user.component");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                auth_component_1.AuthComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                users_component_1.UsersComponent,
                user_component_1.UserComponent,
                new_user_component_1.NewUserComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                angular_fontawesome_1.FontAwesomeModule,
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: core_2.JwtInterceptor, multi: true },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
