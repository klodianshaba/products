import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction(
  '[Category] Load Categories',
  props<{categories: string[]}>()
);

export const yCategoriess = createAction(
  '[Categories] Y Categoriess'
);

export const yCategoriessSuccess = createAction(
  '[Categories] Y Categoriess Success',
  props<{ data: any }>()
);

export const yCategoriessFailure = createAction(
  '[Categories] Y Categoriess Failure',
  props<{ error: any }>()
);
