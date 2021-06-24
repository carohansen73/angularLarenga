import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [
    {
    name: "Remera dama gris",
    price: 600,
    stock:  10,
    img : "assets/img/remeraDamaAzul2.jpg",
    clearance: false,
    quantity: 0,
  },
  {
    name: "Remera dama azul",
    price: 500,
    stock:  12,
    img : "assets/img/remeraDamaAzul2.jpg",
    clearance: true,
    quantity: 0,
  },
  {
    name: "Remera hombre roja",
    price: 700,
    stock:  0,
    img : "assets/img/remeraDamaAzul2.jpg",
    clearance: false,
    quantity: 0,
  }
]
  
//inyeccion de depenencia: no puedo hcer un new cda vez q lo uso xq seria otra dependencia
  constructor(private cart: ProductCartService) {
  }

  ngOnInit(): void {
  }

  //lo llamo desde list-html
  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }


 maxReached(m: string) {
   console.log(m);
 }
  

}
