import { Component, OnInit } from '@angular/core';
import { faTimes, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  faUserEdit = faUserEdit
  faTimes = faTimes
  users: any;
  currentUser = null;
  currentIndex = -1;
  title = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll() 
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.getUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  unsetUser(user, index): void {
    this.currentUser = null;
    this.currentIndex = null;
  }

  
  
}