import {NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {ProductFormComponent} from "./components/product-form/product-form.component";

const routes: Routes = [
  {  path: '' , component: ProductsComponent  },
  {  path: 'add' , component: ProductFormComponent  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
