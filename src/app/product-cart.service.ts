import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/Products';

@Injectable({
  providedIn: 'root'
})

//El cart-service maneja la logica del carrito

export class ProductCartService {

  private _shopList: Product[] = [];
  shopList: BehaviorSubject<Product[]> = new BehaviorSubject(this._shopList);



  addToCart(product: Product) {
    let item: Product = this.shopList.find((v1) => v1.name == product.name)
    if(!item){
      this.shopList.push({ ... product}); //hace una copia del obj
    } else {
      item.quantity += product.quantity;
    }
    
  }

  constructor() { }
}
