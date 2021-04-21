import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './services/users/users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { GuardGuard } from './services/guard/guard.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserService } from './services/user/user.service';
import { AddUserService } from './services/add-user/add-user.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, UsersComponent, NavComponent, PageNotFoundComponent, AddUserComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    LoginService,
    UsersService,
    UserService,
    AddUserService,
    CookieService,
    GuardGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
