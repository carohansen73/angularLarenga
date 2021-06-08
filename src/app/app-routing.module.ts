import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LarengaAboutComponent } from './larenga-about/larenga-about.component';
import { LarengaStoreComponent } from './larenga-store/larenga-store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: LarengaStoreComponent
  },
  {
    path: 'about',
    component: LarengaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
