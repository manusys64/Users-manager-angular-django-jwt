import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    is_superuser : false,
    
  };
  errors = {}
  submitted = false;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    const data = {
      username: this.user.username,
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      password: this.user.password,
    };

    this.userService.create(data)
      .subscribe(
        response => {

          this.submitted = true;
          // if (this.user.is_superuser) {
          //   data['is_superuser'] = true
          //   this.userService.update(response.user.id, data).subscribe(response => {
          //     setTimeout(() => {
          //     this.router.navigate(['/users']);
          //   }, 1000);
          //   })
          // } else {
            setTimeout(() => {
              this.router.navigate(['/users']);
            }, 1000);
          // }
         
        },
        error => {
          this.errors = error.error;
        });
    

  }

  

}