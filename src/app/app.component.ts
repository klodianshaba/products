import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {State} from "./state/reducers";
import {selectAllProducts} from "./state/selectors/products.selectors";
import {ProductService} from "./shared/services/product.service";
import {loadProducts} from "./state/actions/products.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';
  constructor(private store: Store<State>, private productService: ProductService) {
    this.store.select(selectAllProducts).subscribe(products => {
      if(products){
        console.log(products);
      }
    });

    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.store.dispatch(loadProducts({products:products}));
    })
  }
}
