import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, UserService } from 'src/app/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser = null;
  originalData = null
  success = '';
  error = ''
  password = false;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.success = '';
    this.error = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id): void {
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          this.originalData = data;
          this.currentUser.password = ''
        },
        error => {
          console.log(error);
        });
  }

  update(status): void {

    var data = {
      username: this.currentUser.username ?? this.originalData.username,
      email: this.currentUser.email ?? this.originalData.email,
      first_name: this.currentUser.first_name ?? this.originalData.first_name,
      last_name: this.currentUser.last_name ?? this.originalData.last_name,
      is_superuser: this.currentUser.is_superuser ?? this.originalData.is_superuser,
      
    };
    if(this.password) data['password'] = this.currentUser.password
    this.userService.update(this.currentUser.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
  }

  

  delete(): void {
    this.userService.delete(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
  }
}