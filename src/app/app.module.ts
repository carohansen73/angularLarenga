import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LarengaAboutComponent } from './larenga-about/larenga-about.component';
import { LarengaStoreComponent } from './larenga-store/larenga-store.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { from } from 'rxjs';
import { LarengaHomeComponent } from './larenga-home/larenga-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    LarengaAboutComponent,
    LarengaStoreComponent,
    ProductsCartComponent,
    InputQuantityComponent,
    LarengaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
