import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../models";
import {Store} from "@ngrx/store";
import {State} from "../../state/reducers";
import {selectAllProducts} from "../../state/selectors/products.selectors";
import {ProductService} from "../../shared/services/product.service";
import {fadeIn} from "ngxa";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    fadeIn({timings: '500ms'}),
  ]
})
export class ProductsComponent implements OnInit {

  public products: ProductModel[] = [];

  constructor(private store: Store<State>, public productService: ProductService) {
    this.store.select(selectAllProducts).subscribe( products => {
      if(products){
        this.products = products;
      }
    })
  }

  ngOnInit(): void {}

  trackByFnCharacters(index: number, item: ProductModel){
    return index;
  }
}
