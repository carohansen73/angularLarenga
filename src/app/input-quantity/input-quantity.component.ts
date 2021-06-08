import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products-list/Products';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit {

  constructor() {}

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  ngOnInit(): void {
  }

  upQuantity(): void { //+ cant, product del tipo Product, void xq no retorna nada
    if (this.quantity < this.max){
      this.quantity++; 
    }
  }
  downQuantity(): void { 
    if(this.quantity > 0){
      this.quantity--;
    }
  }

}
