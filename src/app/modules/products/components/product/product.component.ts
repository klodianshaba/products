import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {ProductModel} from "../../../../models";
import {ToastrService} from "ngx-toastr";
import {deleteProduct} from "../../../../state/actions/products.actions";
import {ProductDirectionsEnum} from "../../../../shared/utils";
import {ProductService} from "../../../../shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') product: ProductModel = new ProductModel();
  @Input('loading') loading: boolean = false;
  @Output('onProduct') onProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  public displayActions: boolean = false;
  public productDirection: ProductDirectionsEnum = ProductDirectionsEnum.edit;
  public productDirections = ProductDirectionsEnum;

  constructor(
    private toastr: ToastrService,
    private store: Store<State>,
    private productService: ProductService
  ) { }
  ngOnInit(): void {}

  onClickProduct():void {
    this.onProduct.emit(this.product);
    this.displayActions = true;
  }
  onDeleteProduct(event: Event):void {
    event.stopPropagation();
  }
  onEditProduct(event: Event):void {
    event.stopPropagation();
    this.displayActions = false;
  }
  onConfirmDelete(): void{
    this.productService.deleteProduct(this.product.id).subscribe( response => {
      this.store.dispatch(deleteProduct({id: this.product.id}))
      this.toastr.success(this.product.title + ' deleted successfully', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }, error => {} ) // handle error
  }
}
