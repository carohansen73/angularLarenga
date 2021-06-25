import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import * as EventEmitter from 'events';
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

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  //evento q voy a emitir cndo el stock alcanze el MAX
  @Output()
  maxReached: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upQuantity(): void { //+ cant, product del tipo Product, void xq no retorna nada
    if (this.quantity < this.max){
      this.quantity++; 
      this.quantityChange.emit(this.quantity);
    } else
    this.maxReached.emit(this.max);
  }
  downQuantity(): void { 
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: { key: any; }): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
