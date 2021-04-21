import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(
    private _cookieService: CookieService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const cookieExists: boolean = this._cookieService.check('token');
    if (cookieExists) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
