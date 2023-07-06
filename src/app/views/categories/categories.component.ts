import { Component, OnInit } from '@angular/core';
import ProductsService from 'src/app/shared/services/products.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any[]=[];
  isLoading:boolean = true;
  noItemTosShow:boolean = false;

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe(({
      next: (res)=>{
        this.categories = res.data;
        if(this.categories == null)
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
