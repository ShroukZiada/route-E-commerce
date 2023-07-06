import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export default class ProductsService   {
  loader = new BehaviorSubject(false)
  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1'

  constructor(private _http:HttpClient) { }

  getAllProduct():Observable<any>
  {
    return this._http.get(`${this.baseUrl}/products`);
  }
  getSpecific(prdoductId:any):Observable<any>
  {
  return this._http.get(`${this.baseUrl}/products/${prdoductId}`)
  }
  getCategories():Observable<any>
  {
    return this._http.get(`${this.baseUrl}/categories`);
  }
  getBrands():Observable<any>
  {
    return this._http.get(`${this.baseUrl}/brands`);
  }
   getAllOrders(cartId:any):Observable<any>
 {
  return this._http.get(`${this.baseUrl}/orders/user/${cartId}`)
  }









}

