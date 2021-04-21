import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private _cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this._cookieService.delete('token');
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

}
