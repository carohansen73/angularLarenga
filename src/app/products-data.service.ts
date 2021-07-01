import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { url } from 'inspector';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './products-list/Products';

const URL = 'https://60ddc3aa878c890017fa2b3b.mockapi.io/api/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor( private http: HttpClient ) { }

//consume la APPI y devuelve un observable
  public getAll(): Observable<Product[]> {
    //como un fetch q devolvia una promesa
    //aca decuelve un observable
    return this.http.get<Product[]>(URL).pipe(
      tap((products: Product[]) => products.forEach(product => product.quantity = 0))
    );
  }

  
}



