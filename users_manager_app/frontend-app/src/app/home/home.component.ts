import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';
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
  isAuth = false;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public authService: AuthService,
      public userService: UserService,
  ) {}

  ngOnInit(): void {
   
    this.userService.get(this.authService.currentUserValue.user_id).pipe(first())
      .subscribe(data => {
        this.isAuth = data.is_superuser
      }), (error => {
        console.log(error)
      })
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
