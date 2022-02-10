import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment } from '../../../environments/environment';
import * as fromProducts from './products.reducer';

export interface State {
  [fromProducts.productsFeatureKey]: fromProducts.ProductsState;
}

export const reducers: ActionReducerMap<State> = {
  [fromProducts.productsFeatureKey]: fromProducts.productsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
