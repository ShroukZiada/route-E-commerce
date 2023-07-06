
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData:BehaviorSubject<any> = new BehaviorSubject(null);
  // userData:BehaviorSubject<any> =new BehaviorSubject(null);

  userEmail : any = ''

constructor(private _HttpClient:HttpClient, private _Router:Router ) {
  if(localStorage.getItem('userToken') != null)
  {
    this.deCoded()
  }
}

register(userData:object):Observable<any>
{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , userData)
}

logIn(userData:object):Observable<any>
{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , userData)
}

deCoded()
{
  let incoded  = JSON.stringify(localStorage.getItem('userToken'));
  this.userData.next(jwtDecode(incoded)) ;
  console.log(this.userData);
}

logOut()
{
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/login']);
}
}
