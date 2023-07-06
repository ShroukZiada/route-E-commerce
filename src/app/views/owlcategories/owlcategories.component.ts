import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import ProductsService from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-owlcategories',
  templateUrl: './owlcategories.component.html',
  styleUrls: ['./owlcategories.component.css']
})
export class OwlcategoriesComponent implements OnInit{
  categories:any;
  constructor(private _ProductsService:ProductsService){}


  ngOnInit(): void {
     this._ProductsService.getCategories().subscribe(res=>{
      this.categories = res.data;
    });
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
