import {createSelector } from '@ngrx/store';
import {State} from "../reducers";
import {CategoriesState} from "../reducers/categories.reducer";

export const selectCategories = (state: State) => state.categories;

export const selectAllCategories = createSelector(
  selectCategories,
  (state: CategoriesState) => state.categories
);
