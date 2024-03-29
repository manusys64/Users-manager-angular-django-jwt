"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var operators_1 = require("rxjs/operators");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router, authService, userService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.faPowerOff = free_solid_svg_icons_1.faPowerOff;
        this.accessToken = '';
        this.refreshToken = '';
        this.isAuth = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.get(this.authService.currentUserValue.user_id).pipe(operators_1.first())
            .subscribe(function (data) {
            _this.isAuth = data.is_superuser;
        }), (function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
