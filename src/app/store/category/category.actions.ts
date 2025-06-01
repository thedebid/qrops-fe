import { createAction, props } from '@ngrx/store';
import { Category } from './category.model';

export const LOAD_CATEGORY = '[Category] Load Categories';
export const LOAD_CATEGORY_SUCCESS = '[Category] Load Categories Success';
export const LOAD_CATEGORY_FAIL = '[Category] Load Categories Failure';
export const SELECT_CATEGORY = '[Category] Select Category';

export const loadCategories = createAction(LOAD_CATEGORY);

export const loadCategoriesSuccess = createAction(
  LOAD_CATEGORY_SUCCESS,
  props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  LOAD_CATEGORY_FAIL,
  props<{ error: string }>()
);

export const selectCategory = createAction(
  SELECT_CATEGORY,
  props<{ category: Category }>()
);
