import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../shared/services/cart.service';
import { WishListService } from '../wish-list/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private _cartService: CartService,private _wishListService: WishListService) { }

  ngOnInit(): void {

  }

  @Input() product: Product = {} as Product;

  addToCart(id: string) {
    console.log(id);
    this._cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
      }

    })


  }

  addToWishlist(id: string) {
    this._wishListService.addProductToWishList(id).subscribe({
      next:(res)=>{
        console.log("wishlistRes",res);
        // this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
      }

    })


  }
}
