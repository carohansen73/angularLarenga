import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductsDataService } from '../products-data.service';
import { Product } from './Products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  /* [
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
    img : "assets/img/remeraDamaBordo.jpg",
    clearance: true,
    quantity: 0,
  },
  {
    name: "Remera hombre roja",
    price: 700,
    stock:  0,
    img : "assets/img/remeraRoja.jpg",
    clearance: false,
    quantity: 0,
  }
]
 */ 
//inyeccion de depenencia: no puedo hcer un new cda vez q lo uso xq seria otra dependencia
  constructor (
    private cart: ProductCartService,
    private productsDataService: ProductsDataService ) {
  }

  ngOnInit(): void {
    //me subscribo al observable
    this.productsDataService.getAll().subscribe(products => this.products = products); 
  }
  

  //lo llamo desde list-html
  addToCart(product: Product): void{
    if (product.quantity > 0) {
      this.cart.addToCart(product);
      product.stock -= product.quantity;
      product.quantity = 0;
    }
   
  }


 maxReached(m: number) {
   console.log(m);
 }
  

}
