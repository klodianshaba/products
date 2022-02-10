import { createAction, props } from '@ngrx/store';
import { ProductModel } from "../../models";

export const loadProducts = createAction(
  '[Product] Load Products',
  props<{products:ProductModel[]}>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{product: ProductModel}>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{id: number}>()
);

export const editProduct = createAction(
  '[Product] Edit Product',
  props<{product: ProductModel}>()
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ data: any }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);
