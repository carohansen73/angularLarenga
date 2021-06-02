import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  producto = {
    "nombre": "Remera dama gris",
    "precio": 600,
    "stock":  10,
    "imagen" : "assets/img/remeraDamaAzul2.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
