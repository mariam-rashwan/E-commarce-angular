import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  invalidFlag: boolean = false;
  isLoading: boolean = false;
  errorMsg:string='';


  constructor(private _authService: AuthService,private _router: Router) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),

  });

  login(loginForm: FormGroup) {
    this.errorMsg="";
    // console.log(registerForm.value);
    console.log(loginForm.valid);

    if (loginForm.valid) {
      this.isLoading=true;
      this._authService.login(loginForm.value).subscribe({
        next: (res: any) => {
          this.isLoading=false;
          console.log(res);
          localStorage.setItem("userToken",res.token);
          this._authService.getUserData();
          this._router.navigate(['/home'])
// noga@mail.com

        },
        error: (err: any) => {
          this.isLoading=false;
          console.log(err.error.message);
            this.errorMsg=err.error.message
        }
      })
    } else {
      this.invalidFlag = true;
    }

  }
}
