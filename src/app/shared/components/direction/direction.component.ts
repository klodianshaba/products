import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state/reducers";
import {ProductModel} from "../../../models";
import {selectAllProducts} from "../../../state/selectors/products.selectors";

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})
export class DirectionComponent implements OnInit {

  @Input('label') label: string = 'Products';
  public products: ProductModel[] = [];
  constructor(private store:Store<State>) {
    this.store.select(selectAllProducts).subscribe(products => {
      if(products){
        this.products = products;
      }
    })
  }

  ngOnInit(): void {}

}
