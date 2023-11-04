import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { Brand } from './interfaces/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  allBrands: Brand[] = [];

  constructor(private _brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    return this._brandService.getBrands().subscribe({
      next: (data) => {
        this.allBrands=data.data;
    console.log("this brand", this.allBrands);
    
  
      }
      
    });
  }

}
