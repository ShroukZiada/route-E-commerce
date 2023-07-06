import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfProducts:BehaviorSubject<number> = new BehaviorSubject(0)
  numOfwishList:BehaviorSubject<number> = new BehaviorSubject(0)
  userToken:BehaviorSubject<any> = new BehaviorSubject(null)
  headers:any

  constructor(private _http:HttpClient) {

    this.userToken.next(localStorage.getItem('userToken'))
    this.userToken.subscribe({
      next: (z) => {
        this.headers = z;
        // console.log(this.headers);
        this.getUserCart().subscribe({
          next:res => this.numOfProducts.next(res.numOfCartItems),
        //  error:err => console.log(err)
        });
        this.getWishList().subscribe({
           next:res => this.numOfwishList.next(res.count),
        //  error:err => console.log(err)

         })
      }
    })
  }

  baseURL :string = 'https://ecommerce.routemisr.com';


  addToCart(Id:string):Observable<any>
  {
    console.log(this.headers);
    return this._http.post(this.baseURL + '/api/v1/cart' ,
    {productId:Id}
    );

  }

  getUserCart():Observable<any>
  {

    return this._http.get(this.baseURL + '/api/v1/cart')
  }

  removeCartItem(id:string):Observable<any>
  {
    return this._http.delete(this.baseURL +`/api/v1/cart/${id}`)
  }

  clearCartItems():Observable<any>
  {
    return this._http.delete(this.baseURL +'/api/v1/cart' )
  }

  UpdateItem(id:string , count:number):Observable<any>
  {
    return this._http.put(this.baseURL +`/api/v1/cart/${id}`,
    {count:count});
  }



  onlinePayement(cartId:string , shippingAddress:any , cartOwner:string):Observable<any>
  {
    return this._http.post(this.baseURL +`/api/v1/orders/checkout-session/${cartId}/?url=https://route-e-commerceoute.vercel.app` ,
    {
      shippingAddress: shippingAddress
    })
  }

  addWishList(productId:string):Observable<any>
  {
    return this._http.post(this.baseURL +'/api/v1/wishlist' , {productId : productId}  )
  }

  removeWishList(productId:string):Observable<any>
  {
    return this._http.delete(this.baseURL +`/api/v1/wishlist/${productId}` )
  }

  getWishList():Observable<any>
  {
    return this._http.get(this.baseURL +'/api/v1/wishlist' )
  }

}
