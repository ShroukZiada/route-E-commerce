import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import ProductsService from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _ProductsService:ProductsService , private _AuthService:AuthService, private _CartService:CartService){}

  isconformlogin : boolean = false
  isLoading : boolean = true
  numOfProducts:number = 0
  isEmptyWhishList:boolean = true;
  isEmptyCart:boolean = true;
  wishProductNum:number = 0
  userData!:string ;


  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() != null)
      {
        this.isconformlogin = true;
      }
      else{
        this.isconformlogin = false;
      }
    });

    this._CartService.numOfProducts.subscribe({
      next:(cart)=>{
        if(cart == 0){
          this.isEmptyCart = true
        }else{
          this.isEmptyCart = false
        }
        this.isLoading = false
        this.numOfProducts = cart;
      }
    })

    this._CartService.numOfwishList.subscribe({
      next: wishlist=>{
        if (wishlist == 0) {
          this.isEmptyWhishList = true
        }else{
          this.isEmptyWhishList = false
        }
        this.wishProductNum = wishlist;
      }
    })

   this._AuthService.userData.subscribe({
    next:() =>{
      if(this._AuthService.userData.getValue())
        this.userData = this._AuthService.userData.getValue().name
    },
   });

}
logOut()
{
  this._AuthService.logOut();
}

}
