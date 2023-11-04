import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) { }
  forgetPassForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required])
  })

  forgetPass() {

    if (this.forgetPassForm.valid) {
      this.isLoading = true;

      this._authService.forgetPassword(this.forgetPassForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          this._router.navigate(['/verify-code'])


        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;


        }
      })
    }

  }
}
