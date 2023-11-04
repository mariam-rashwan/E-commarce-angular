import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  invalidFlag: boolean = false;
  isLoading: boolean = false;
  errorMsg: string = '';


  constructor(private _authService: AuthService, private _router: Router) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),

  },{
    validators:this.validateRePass
  });

  register(registerForm: FormGroup) {
    this.errorMsg = "";
    // console.log(registerForm.value);
    console.log(registerForm.valid);

    if (registerForm.valid) {
      this.isLoading = true;
      this._authService.register(registerForm.value).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          console.log(res);
          this._router.navigate(['/login'])
          // noga@mail.com

        },
        error: (err: any) => {
          this.isLoading = false;
          console.log(err.error.message);
          this.errorMsg = err.error.message
        }
      })
    } else {
      this.invalidFlag = true;
    }

  }

  validateRePass(registerForm: any) {
    let passControl = registerForm.get("password");
    let rePassControl = registerForm.get("rePassword");

    if (passControl.value == rePassControl.value) {
      return null;
    } else {
      rePassControl.setErrors({ rePasswordNotMatch: "password and rePassword should be match" });
      return { rePasswordNotMatch: "password and rePassword should be match" }
    }

  }
}


