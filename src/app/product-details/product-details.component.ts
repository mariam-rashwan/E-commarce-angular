import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../shared/services/cart.service';
import { WishListService } from '../wish-list/wish-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productId:string='';
  productDetails:Product= {} as Product;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: true
  }
  constructor(private _productsService:ProductsService,
    private _activatedRoute:ActivatedRoute,
    private _cartService:CartService,
    private _wishListService:WishListService
    ){
    this._activatedRoute.paramMap.subscribe((res:any)=>{
     console.log(res.params.id);
     this.productId=res.params.id;

    })
  }

  ngOnInit(){
    this.getProductDetails();
  }

  getProductDetails(){
    this._productsService.getProductById(this.productId).subscribe({
      next:(res)=>{
        console.log(res.data);
        this.productDetails=res.data;
      }

    })
  }

  addToCart(id: string) {
    console.log(id);
    this._cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
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
