import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../shared/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartId:string='';
  constructor(private _cartService: CartService,private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.paramMap.subscribe((res:any)=>{
      this.cartId=res.params.cartId;
    })
  }

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
    //ToDO:city with online api all cites in egypt


  })

  handleOnline() {
    console.log(this.shippingAddress.value);
    return this._cartService.generateOnlinePayment(this.cartId, this.shippingAddress.value).subscribe({
      next: res => {
        console.log(res);
        if (res.status == "success") {
          console.log(res.session.url);
          window.location.href = res.session.url;

        }

      }
    })
  }
}
