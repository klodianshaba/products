import {createReducer, on } from '@ngrx/store';
import {loadCategories} from "../actions/categories.actions";

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
  categories: string[];
}

export const initialState: CategoriesState = {
  categories: ['electronics', 'jewelery']
};

export const categoriesReducer = createReducer(
  initialState,
  on(loadCategories, (state, {categories}) => ( {categories: categories})),
);
