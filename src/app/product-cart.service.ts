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
    //no me toma el let item: Product
    let item = this._shopList.find((v1) => v1.name == product.name)
    if(!item){
      this._shopList.push({ ... product}); //hace una copia del obj
    } else {
      item.quantity += product.quantity;
    }
    this.shopList.next(this._shopList); //= emitt de eventos
    
  }

  constructor() { }
}
