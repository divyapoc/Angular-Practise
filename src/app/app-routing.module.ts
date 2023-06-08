import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { PractiseComponent } from './practise/practise.component';

import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "userlist", component: UserlistComponent },
  { path: "productlist", component: ProductlistComponent },
  { path: "product", component: ProductComponent },
  { path: "practise", component: PractiseComponent },
  { path: "observable", component: ObservablesComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
