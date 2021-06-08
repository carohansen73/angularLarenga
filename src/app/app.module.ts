import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { FormsModule } from '@angular/forms';
import { LarengaAboutComponent } from './larenga-about/larenga-about.component';
import { LarengaStoreComponent } from './larenga-store/larenga-store.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    LarengaAboutComponent,
    LarengaStoreComponent,
    ProductsCartComponent,
    InputQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
