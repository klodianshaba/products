import { Action, createReducer, on } from '@ngrx/store';
import {loadProducts} from "../actions/products.actions";
import {loadCategories} from "../actions/categories.actions";

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
  categories: string[];
}

export const initialState: CategoriesState = {
  categories: []
};

export const categoriesReducer = createReducer(
  initialState,
  on(loadCategories, (state, {categories}) => ( {categories: categories})),
);
