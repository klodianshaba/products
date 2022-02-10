import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDialogComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
