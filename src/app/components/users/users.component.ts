import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]=[];

  constructor(
    private _UsersService: UsersService,    
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._UsersService.users().subscribe((response) => {
      const { data } = response;
      this.users = data;
    })
  }

  goToDetails(id: number): void {
    this.router.navigate([`/user-details`, id ], {relativeTo: this.route});
  }

}
