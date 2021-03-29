import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService , UserService } from '../../core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    registerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private userService: UserService
    ) { }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm_password: ['', Validators.required],
        });

        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.register(this.f.username.value, this.f.password.value,this.f.confirm_password.value, this.f.email.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.authService.login(this.f.username.value, this.f.password.value)
                        .pipe(first())
                        .subscribe(
                            data => {
                                this.router.navigate([this.returnUrl]);
                            }), (
                            error => {
                                this.error = error;
                                this.loading = false;
                            });
                }
            ),(
                error => {
                    this.error = error;
                    this.loading = false;
                });
        this.router.navigate([this.returnUrl]);
    }
    


}

