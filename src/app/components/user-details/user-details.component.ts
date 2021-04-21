import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { Users } from 'src/app/models/Users';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User={
    id: 0,
    avatar: '',
    email:  '',
    first_name: '',
    last_name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];

      this._userService.user(id).subscribe((response) => {
        const { data }: { data: User } = response;
        this.user = data;
      })
   });
  }

}
