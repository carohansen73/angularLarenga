import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor( private http: HttpClient ) { }


  public getAll() {
    //como un fetch q devolvia una promesa
    //aca decuelve un observable
    return this.http.get(URL);
  }

}
