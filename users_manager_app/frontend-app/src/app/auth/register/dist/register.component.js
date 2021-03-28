"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, route, router, authService, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            confirm_password: ['', forms_1.Validators.required]
        });
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: false,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.register(this.f.username.value, this.f.password.value, this.f.confirm_password.value, this.f.email.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.authService.login(_this.f.username.value, _this.f.password.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }), (function (error) {
                _this.error = error;
                _this.loading = false;
            });
        }), (function (error) {
            _this.error = error;
            _this.loading = false;
        });
        this.router.navigate([this.returnUrl]);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
