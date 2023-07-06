import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import ProductsService from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-owl-brands',
  templateUrl: './owl-brands.component.html',
  styleUrls: ['./owl-brands.component.css']
})
export class OwlBrandsComponent implements OnInit{
  brands:any;

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe((res=>{
      this.brands = res.data;
    }));
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
}
