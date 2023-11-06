import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', '',''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
     
    
     
    },
    nav: true
  }
  
  constructor(){}
}
