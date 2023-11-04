import { Component,OnInit,  } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from './interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {

  cartDetails: Cart = {} as Cart;
  
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
  }


  getCart() {
    return this._cartService.getCartProducts().subscribe({
      next: (data) => {
        this.cartDetails = data;
        this.cartDetails.data.products.filter((ele) => {
          if (ele.count <= 0) {
            console.log(ele);
            console.log(ele.product.id);
           this.deleteItem(ele.product.id);
          }
        })
        // handle backend error if count == 0 ... just remove it to update count 
        // console.log("here", data.data.products);
        // for (let i = 0; i < data.data.products.length; i++) {
        //   console.log("dkkdkddkdk");

        //   if (data.data.products[i].count === 0) {
        //     let x = data.data.products[i]._id
        //     console.log(x, "this x");
        //     if (x) {
        //       this.deleteItem(x);

        //     }
        //   }
        // }
      }
      
    });
  }

  updateCount(count: number, id: string) {
    this._cartService.updateProductCount(count, id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
      }
    })

  }

  deleteItem(id: string) {
    console.log(id,"id");
    
    this._cartService.RemoveProduct(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res;
        this.cartDetails.data.products.filter((ele) => {
          if (ele.count <= 0) {
            console.log(ele);
            console.log(ele.product.id);
           this.deleteItem(ele.product.id);
          }
        })
      }
    })
  }
}
