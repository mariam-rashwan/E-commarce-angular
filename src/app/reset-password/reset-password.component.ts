import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  isLoading: boolean = false;

  constructor(private _authService: AuthService,private _router:Router) { }
  resetPassForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),


  })

  resetPassword() {

    if (this.resetPassForm.valid) {
      this.isLoading = true;

      this._authService.resetPassword(this.resetPassForm.value).subscribe({
        next: (res) => {
          this.isLoading=false;
          console.log(res);
          localStorage.setItem("userToken",res.token);
          this._authService.getUserData();
          this._router.navigate(['/home'])

        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;


        }
      })
    }

  }
}
