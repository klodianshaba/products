import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {State} from "./state/reducers";
import {selectAllProducts} from "./state/selectors/products.selectors";
import {ProductService} from "./modules/products/services/product.service";
import {loadProducts} from "./state/actions/products.actions";
import {loadCategories} from "./state/actions/categories.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<State>, private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.store.dispatch(loadProducts({products:products}));
    })
    this.productService.getCategories().subscribe( categories =>{
      this.store.dispatch(loadCategories({categories:categories}));
    })
  }
}
