import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-app';

  currentUser: User;
  constructor(
        private router: Router,
        private authService: AuthService
    ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit(): void {

  }

  logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
