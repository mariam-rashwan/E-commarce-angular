import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _http: HttpClient) {}

  addProductToWishList(id: string): Observable<any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId: id },
      );
  }

  getWishlistProducts(): Observable<any> {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/wishlist`
    );
  }
  deleteWishlistProduct(id:string): Observable<any> {
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`
    );
  }
}
