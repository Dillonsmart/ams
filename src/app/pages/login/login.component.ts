import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/services/token.service';
import { AuthStateService } from '../../shared/services/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: null,
      password: null
    })
  }

  ngOnInit() { }

  onSubmit() {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
        },
        error => {

        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['']);
        }
      );
  }

  // Handle response
  responseHandler(data: any){
    this.token.handleData(data.access_token);
  }

}