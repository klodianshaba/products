import {createReducer, on } from '@ngrx/store';
import {ProductModel} from "../../models";
import {addProduct, deleteProduct, editProduct, loadProducts} from "../actions/products.actions";

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: ProductModel[]
}

export const initialState: ProductsState = {
  products: []
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state, {products}) => ( {products: products})),
  on(addProduct, (state, {product} ) => ({products: state.products.concat(product)})),
  on(deleteProduct, (state, {id} ) => ({products: state.products.filter(product => product.id != id)})),
  on(editProduct, (state, {product} ) => ({products: state.products.map( item => {
      if(item.id == product.id){ return {...item, ...product}}
      return item;
    })})),
);
