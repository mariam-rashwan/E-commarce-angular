import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  allProduct: Product[] = [];
  searchKey:string='';
  constructor(private _productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._productsService.getProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.allProduct = data.data;
        console.log(this.allProduct);

      },
      error: err => console.log(err)
    })
  }
}
