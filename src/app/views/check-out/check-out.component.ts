import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {

  constructor(private _CartService:CartService , private _ActivatedRoute:ActivatedRoute , private _Router:Router ){}
  shippingForm = new FormGroup({
    details : new FormControl(null , [Validators.required]),
    phone: new FormControl(null , [Validators.required]),
    city : new FormControl(null , [Validators.required ])
  })

  cardId:string = '' ;
  cardOwner:string = '' ;
  isLoading:boolean = false

  paymentForm(shippingForm:FormGroup)
  {
    console.log(shippingForm);
    this.isLoading = true
    console.log(shippingForm.get('phone'));
    this._ActivatedRoute.paramMap.subscribe(response => this.cardId = response.get('id') || '');
    this._ActivatedRoute.paramMap.subscribe(response => this.cardOwner = response.get('owner') || '');
    console.log(this.cardId);
    console.log(this.cardOwner);
    if(shippingForm.valid)
    {
      this._CartService.onlinePayement(this.cardId,shippingForm.value ,this.cardOwner).subscribe({
        next: response =>{
          console.log(response);
          location.href = response.session.url
        },
        error: err=>{
          console.log(err);
        },
        complete:()=>{
          this.isLoading = false;
        }
      })
    }

  }
















}
