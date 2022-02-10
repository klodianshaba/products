import {createSelector} from '@ngrx/store';
import {State} from "../reducers";
import {ProductsState} from "../reducers/products.reducer";

export const selectProducts = (state: State) => state.products;

export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
);

export const selectProductById = (productId: number ) => createSelector(
  selectProducts,
  (state: ProductsState) => state.products.find(product => product.id === productId)
);
