import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { Wishlist } from '../interface/wishlist';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{
 
  wishlistData: Wishlist = {} as Wishlist;
 
  constructor(private _wishListService: WishListService) { }
 
  ngOnInit(): void {
    this.getWishList();
  }
  getWishList() {
    return this._wishListService.getWishlistProducts().subscribe({
      next: (res) => {
        this.wishlistData=res;
        console.log("Wishlist",res);
        
      
      }
      
    });
  }
  deleteWishListProduct(id:string) {
    return this._wishListService.deleteWishlistProduct(id).subscribe({
      next: (res) => {
        // this.wishlistData=res;
        console.log("Delete Wishlist",res);
        this.getWishList();
        
      
      }
      
    });
  }

}
