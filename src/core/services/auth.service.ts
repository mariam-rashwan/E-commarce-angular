import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { ForgetPassword } from 'src/app/forget-password';
import { VerifyCode } from 'src/app/verify-code';
import { ResetPassword } from 'src/app/reset-password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:BehaviorSubject<any>=new BehaviorSubject('');
  constructor(private _http: HttpClient,private _router:Router) { 
    if(localStorage.getItem("userToken")){
      this.getUserData();
    }
  }

  getUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem("userToken"));
    let encoded=jwt_decode(encodedToken);
    console.log("encoded ",encoded);
    
    this.userData.next(encoded);
  }

  register(data: any): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data)
  }
  login(data: any): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, data)
  }
  logOut(){
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._router.navigate(['/login'])

  }

  forgetPassword(data: ForgetPassword): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, data)
  }

  verifyResetCode(data: VerifyCode): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, data)
  }

  resetPassword(data: ResetPassword): Observable<any> {
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, data)
  }
}
