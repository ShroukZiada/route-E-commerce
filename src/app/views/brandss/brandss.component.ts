import { Component, OnInit } from '@angular/core';
import ProductsService from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-brandss',
  templateUrl: './brandss.component.html',
  styleUrls: ['./brandss.component.css']
})
export class BrandssComponent  implements OnInit{
  brands:any[]=[];
  isLoading:boolean = true;
  noItemTosShow:boolean = false;
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe(({
      next: (res)=>{
        this.brands = res.data;
        if(this.brands == null)
        {
          this.isLoading = false;
          this.noItemTosShow  = true;
        }else{
          this.isLoading = false;
          this.noItemTosShow = false;
        }
      },
      error: er=>{},
      complete(){}
    }));
  }

}
