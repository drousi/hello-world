import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    Products_Liste :string[]=['222','2222e','hfggfg']
    getProductListe():string[]{
        return this.Products_Liste
    }
}