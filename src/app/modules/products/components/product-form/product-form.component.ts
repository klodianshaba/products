import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AvatarDirectionsEnum, ProductDirectionsEnum} from "../../../../shared/utils";
import {FormifyModel, OptionModel} from "../../../formify/models";
import {AvatarFieldControl} from "../../../formify/fields/avatar.field-control";
import {DescriptionFieldControl} from "../../../formify/fields/description.field-control";
import {ProductModel} from "../../../../models";
import {ProductDirectionType} from "../../../../shared/utils";
import {Store} from "@ngrx/store";
import {State} from "../../../../state/reducers";
import {ToastrService} from "ngx-toastr";
import {selectAllProducts} from "../../../../state/selectors/products.selectors";
import {addProduct, editProduct} from "../../../../state/actions/products.actions";
import {TitleFieldControl} from "../../../formify/fields/title.field-control";
import {PriceFieldControl} from "../../../formify/fields/price.field-control";
import {CategoryFieldControl} from "../../../formify/fields/category.fiel-control";
import {selectAllCategories} from "../../../../state/selectors/categories.selectors";
import {ProductService} from "../../../../shared/services/product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input('readonly') readonly = false;
  @Input('direction') direction: ProductDirectionType = ProductDirectionsEnum.add;
  @Input('product') product: ProductModel = new ProductModel();
  @Output('onUpdated') onUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('onInserted') onInserted: EventEmitter<boolean> = new EventEmitter<boolean>();
  public AvatarDirections = AvatarDirectionsEnum;
  private products: ProductModel[] = [];
  public formify: FormifyModel = new FormifyModel({
    controls: [
      new TitleFieldControl({}),
      new PriceFieldControl({}),
      new DescriptionFieldControl({}),
      new AvatarFieldControl({controlName:'image'}),
      new CategoryFieldControl({options:[{value:'men',text:'Men'}]})
    ],
    submit: { text: 'Save'}
  });

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<State>,
    private toastr: ToastrService,
    private productService: ProductService
  ) {
    this.product = {...this.product, ...this.formify.formGroup.value}
    this.store.select(selectAllProducts).subscribe(characters => {
      if(characters) {
        this.products = characters;
      }
    });

    this.store.select(selectAllCategories).subscribe( categories =>{
      if(categories) {
        this.formify.field('category').update({options: categories.map(category => new OptionModel({text: category, value: category}))})
      }
    })
  }

  ngOnInit(): void {
    if(this.isEdit()) this.formify.formGroup.patchValue(this.product);
    if(this.isAdd()) this.formify.formGroup.patchValue({image: 'https://i.pravatar.cc'})
  }

  onAvatarPathSelected(event: string | ArrayBuffer): void{
    this.formify.formGroup.patchValue({avatar:event});
  }

  onSubmit(): void{
    this.formify.loading(true);
    if(this.formify.formGroup.valid){
      this.product = {...this.product, ...this.formify.formGroup.value}
      if(this.isAdd()) this.product.id = new Date().valueOf();
      if(this.isAdd()) this.onAddProduct(this.product);
      if(this.isEdit()) this.onEditProduct(this.product);
    }else{
      setTimeout(() => {
        this.formify.loading(false);
        }, 1000);
    }
  }

  isEdit(): boolean{
    return (this.direction === ProductDirectionsEnum.edit);
  }
  isAdd(): boolean{
    return (this.direction === ProductDirectionsEnum.add);
  }
  isView(): boolean{
    return (this.direction === ProductDirectionsEnum.view);
  }

  onEditProduct(product: ProductModel): void{
    if(!this.products.find(item => item.id === product.id)){
      this.formify.loading(false);
      this.toastr.warning(product.title + ' was not founded to edit', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.productService.updateProduct(new ProductModel({...product, ...{id: this.product.id}}))
        .subscribe( response => {
          this.formify.loading(false);
          this.store.dispatch(editProduct({product: response}));
          this.toastr.success(response.title + ' updated successfully', '' ,{
            closeButton: true,
            timeOut: 3000,
            positionClass: 'toast-bottom-right'
          });
          this.onUpdated.emit(true);
        });
    }
  }
  onAddProduct(product: ProductModel): void{
    if(this.products.find(item => item.title === product.title)){
      this.formify.loading(false);
      this.toastr.warning(product.title + ' already exist', '' ,{
        closeButton: true,
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }else{
      this.productService.addProduct(product).subscribe(response =>{
        this.formify.loading(false);
        this.store.dispatch(addProduct({product: response}));
        this.toastr.success(response.title + ' created successfully', '' ,{
          closeButton: true,
          timeOut: 3000,
          positionClass: 'toast-bottom-right'
        });
        this.onInserted.emit(true);
      })
    }
  }
}
