import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) { }
  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required])
  })

  iseVrifiedCode() {

    if (this.verifyCodeForm.valid) {
      this.isLoading = true;

      this._authService.verifyResetCode(this.verifyCodeForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = false;
          this._router.navigate(['/reset-password'])

        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;


        }
      })
    }

  }
}
