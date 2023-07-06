import { Component, OnInit } from '@angular/core';
import ProductsService from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any[]=[]
  noItemTosShow:boolean = false;
  isLoading:boolean = true;


  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this._ProductsService.getAllProduct().subscribe({
     next:(response)=>{
       this.products = response.data;
       console.log(this.products);
       if(this.products == null)
       {
         this.isLoading = false;
         this.noItemTosShow  = true;
       }else{
         this.isLoading = false;
         this.noItemTosShow = false;
       }
     },
     error:err=>{
     },
     complete:()=>{}
    });
   }

   
}
