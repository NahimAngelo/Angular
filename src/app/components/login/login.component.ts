import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { environment } from '../../../environments/environment'
import { Login } from '../../models/Login';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this._formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    }
  )

  visible: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(environment.apiUrl)
  }

  onSubmit(): void {
    const isFormValid = this.loginForm.valid
    if (isFormValid) {
      console.log('ITS VALID!')
      const body: Login = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
      }
      this._loginService.login(body).subscribe((response) => {
        this._cookieService.set('token', response.token);
        this.router.navigate(['/users'], { relativeTo: this.route });
      })
    } else {
      this.visible = true;
    }
  }

  delay (ms: number): Promise<void> {
    return new Promise(res => setTimeout(res, ms));
  };

  async onShown(): Promise<void> {
    await this.delay(2000);
    this.visible = false;
  }

}
