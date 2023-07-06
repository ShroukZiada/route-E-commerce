import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import ProductsService from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productsDetails:any
  productId:any;
  isLoading:boolean = true
  cartLoading:boolean = false
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService , private _CartService:CartService ){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe(res =>{
        console.log(res.get('id'));
        this.productId = res.get('id')
        this._ProductsService.getSpecific(this.productId).subscribe(res =>{
          console.log(res.data);
          console.log(this.productId);

          console.log(res.data.priceAfterDiscount);
          this.productsDetails = res.data;
          this.isLoading = false;
        });
      });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1,
        }
    },
    nav: true,
}
addToCart(id:string , $event:any){

  // console.log($event);

  $event.target.children[0].classList.remove('d-none')
  $event.target.children[1].classList.add('d-none')
  this.cartLoading = true;

  this._CartService.addToCart(id).subscribe({
    next: res =>
    {
      this.cartLoading = false;
      // console.log(res)
      console.log(res.data);
      $event.target.children[0].classList.add('d-none')
      $event.target.children[1].classList.remove('d-none')
      this._CartService.numOfProducts.next(res.numOfCartItems)
    },
    error : err => {
      this.cartLoading = false;
      console.log(err)
      $event.target.children[0].classList.add('d-none')
      $event.target.children[1].classList.remove('d-none')
    }
  })
}
 }
