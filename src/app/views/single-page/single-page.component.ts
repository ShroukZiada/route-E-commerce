import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import ProductsService from 'src/app/shared/services/products.service';
  @Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ActivatedRoute:ActivatedRoute){}
  searchTitle:string = ''
  searchBrand:string = ''
  searchPrice:any = ''
  /* ******************************************************** */
  products:any[]=[]
  noItemTosShow:boolean = false;
  isLoading:boolean = true;
  cartLoading:boolean = false
  cartOwner:any
  counter:any;
  remove:any;
  ngOnInit(): void {
    this._ProductsService.getAllProduct().subscribe({
      next:(response)=>{
        this.products = response.data;
        console.log(this.products);
        if(this.products == null)
        {
          this.noItemTosShow  = true;
        }else{
          this.noItemTosShow = false;
        }
      },
      error:err=>{
        this.isLoading= false;
      },
      complete:()=>{}
     });  }

  addToCart(id:string , $event:any){
    // console.log($event);
    $event.target.children[0].classList.remove('d-none')
    $event.target.children[1].classList.add('d-none')
    this.cartLoading = true;

    this._CartService.addToCart(id).subscribe({
      next: res =>
      {
        this.cartLoading = false;
       //console.log(res)
       // console.log(res.data);
        $event.target.children[0].classList.add('d-none')
        $event.target.children[1].classList.remove('d-none')
        console.log($event)

        this._CartService.numOfProducts.next(res.numOfCartItems)
        this.cartOwner = res.data.cartOwner
        console.log(this.cartOwner);

        localStorage.setItem('cartOwner' , this.cartOwner)
      },
      error : err => {
        this.cartLoading = false;
        console.log(err)
         $event.target.children[0].classList.add('d-none')
         $event.target.children[1].classList.remove('d-none')
      }
    })
  }
  addToWishList(id:string , event:any)
  {
    let fillCondition = Array.from(event.target.classList).includes('pi-heart')

    if (fillCondition) {
      this._CartService.addWishList(id).subscribe({
        next:res => {
          console.log(res);
          event.target.classList.replace('pi-heart' , 'pi-heart-fill')
          console.log(event.target);
          this._CartService.numOfwishList.next(res.data.length)

        }
      })

    }

  }

  removeToWishList(id:string , event:any)
  {
    let fillCondition = Array.from(event.target.classList).includes('pi-heart-fill')

    if (fillCondition) {
      this._CartService.removeWishList(id).subscribe({
        next:res => {
          console.log(res);
          event.target.classList.replace('pi-heart-fill' , 'pi-heart')
          // console.log(event.target);
          this._CartService.numOfwishList.next(res.data.length)
        }
      })
    }

  }


}
