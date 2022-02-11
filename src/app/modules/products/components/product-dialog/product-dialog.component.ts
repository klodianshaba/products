import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {DialogConfig} from "../../../dialog/models";
import {deleteProduct} from "../../../../state/actions/products.actions";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {DialogComponent} from "../../../dialog/dialog.component";
import {ProductModel} from "../../../../models";
import {ProductDirectionsEnum} from "../../../../shared/utils";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

  @ViewChild('dialog' , { static: true }) dialog: DialogComponent;
  @Input('direction') direction: ProductDirectionsEnum = ProductDirectionsEnum.view;
  @Input('product') product: ProductModel;
  @Input('displayActions') displayActions: boolean = true;
  @Input('status') set onStatus(status: boolean) { (status)?  this.dialog.show(): null }
  @Output() statusChange = new EventEmitter();
  @Output() onEdit: EventEmitter<ProductModel> = new EventEmitter();
  public dialogConfig: DialogConfig = { padding: false};

  constructor(
    private toastr: ToastrService,
    private store: Store<State>,
    private productService: ProductService
  ) {}

  ngOnInit() {}

  onHide() {
    this.statusChange.emit(false);
  }

  onConfirmDelete(): void{
    this.productService.deleteProduct(this.product.id).subscribe(response => {
      this.store.dispatch(deleteProduct({id: this.product.id}))
      this.toastr.success(this.product.title + ' deleted successfully', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    })
  }
}
