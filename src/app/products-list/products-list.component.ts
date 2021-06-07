import { Component, OnInit } from '@angular/core';
import { Product } from './products';

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

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product): void { //+ cant, product del tipo Product, void xq no retorna nada
    if (product.quantity < product.stock){
      product.quantity++; 
    }
  }
  downQuantity(product: Product): void { 
    if(product.quantity > 0){
      product.quantity--;
    }
    
  }

}
