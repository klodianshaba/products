import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule} from "../material/material.module";
import { SharedModule} from "../../shared/shared.module";
import { FormifyModule} from "../formify/formify.module";
import { DialogModule } from "../dialog/dialog.module";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDialogComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    SharedModule,
    FormifyModule,
    DialogModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProductsModule { }
