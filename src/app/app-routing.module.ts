import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { GuardGuard } from './services/guard/guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [GuardGuard] },
  { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [GuardGuard] },
  { path: 'add-user', component: AddUserComponent, canActivate: [GuardGuard], },
  { path: '',  redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
