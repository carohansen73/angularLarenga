import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Products';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  shopList$: Observable<Product[]>;

//inyeccion e importar el mismo servicio q en product-list
  constructor(private cart: ProductCartService) {
   // cart.shopList.subscribe((observable) => this.shopList = observable)
   //si te subscribis hay q destruir dsp, lo hacemos con pipe en html y observable
    this.shopList$ = cart.shopList.asObservable();
  }


  ngOnInit(): void {
  }


}
