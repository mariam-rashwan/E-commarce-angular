import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http: HttpClient,private _router:Router) { }

  getBrands():Observable<any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/brands');
  }
}
