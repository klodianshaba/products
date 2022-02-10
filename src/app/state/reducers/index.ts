import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment } from '../../../environments/environment';
import * as fromProducts from './products.reducer';
import * as fromCategories from './categories.reducer';

export interface State {
  [fromProducts.productsFeatureKey]: fromProducts.ProductsState,
  [fromCategories.categoriesFeatureKey]: fromCategories.CategoriesState
}

export const reducers: ActionReducerMap<State> = {
  [fromProducts.productsFeatureKey]: fromProducts.productsReducer,
  [fromCategories.categoriesFeatureKey]: fromCategories.categoriesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
