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
  },
  {
    name: "Remera dama azul",
    price: 500,
    stock:  12,
    img : "assets/img/remeraDamaAzul2.jpg",
    clearance: true,
  },
  {
    name: "Remera hombre roja",
    price: 700,
    stock:  0,
    img : "assets/img/remeraDamaAzul2.jpg",
    clearance: false,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
