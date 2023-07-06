import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPrice'
})
export class SearchPricePipe implements PipeTransform {

  transform(products: any[], maxPrice: number): any[] {
    return products.filter(product => product.price < maxPrice);
  }

}
