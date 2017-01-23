import { Component } from '@angular/core';
import { ProductService } from './product.services';
@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  providers: [ProductService] 
})
export class ProductComponent {
    prod_liste : string[]
 constructor(private productService: ProductService) {
     this.prod_liste=productService.getProductListe()
  }
}
