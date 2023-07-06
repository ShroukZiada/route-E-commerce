import { Component, OnInit } from '@angular/core';
import ProductsService from 'src/app/shared/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isLoading:boolean = true;
  products:any[]=[]

  constructor(private _ProductsService:ProductsService , private _CartService:CartService){}

  ngOnInit(): void {
    this._CartService.userToken.next(localStorage.getItem('userToken')!);

    this._ProductsService.getAllProduct().subscribe(({
      next: (res) =>{
        this.isLoading = false;
        this._ProductsService = res.data;
      },
      error: err =>{
          this.isLoading = false;
      },
      complete:()=>{

      }
    }));
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    fluidSpeed: true ,
    dots: false,
    autoplay:true,
    navSpeed: 1000,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
