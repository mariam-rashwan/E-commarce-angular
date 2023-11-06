import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  routePath!:string;
  allcategories:Category[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:15,
    autoplay:true,
    autoplayTimeout:3000,

    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      600: {
        items:5
      },
      940: {
        items:5
      },
      1000: {
        items:5
      },
    },
    nav: true
  }
  constructor(private _productsService:ProductsService,private _router: Router){
    console.log("tjid is route",_router.url);
    this.routePath=_router.url;
    // Categories
  }

  ngOnInit(): void {

    this.getCategories();
  }

  getCategories(){
    return this._productsService.getCategories().subscribe({
      next: (categories:any) => {
        console.log(categories);
        this.allcategories=categories.data;
        
    },
    error: error => {
      console.log(error);
    }
    
  })
}
}