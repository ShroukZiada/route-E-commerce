import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[] , serachitem:string): any[] {
    return products.filter(product => product.title.toLocaleLowerCase().includes(serachitem.toLocaleLowerCase()))
  }

}
