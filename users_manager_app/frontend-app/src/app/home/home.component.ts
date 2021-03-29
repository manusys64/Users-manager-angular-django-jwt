import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService, User, UserService } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPowerOff = faPowerOff;
  accessToken = '';
  refreshToken = '';
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public authService: AuthService,
      public userService: UserService,
  ) {}

  ngOnInit(): void {
    this.accessToken = localStorage.getItem('access_token');
    this.refreshToken = localStorage.getItem('refresh_token');
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
