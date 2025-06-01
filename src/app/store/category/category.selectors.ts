import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoryState } from './category.reducers';

export const selectCategoryState =
  createFeatureSelector<CategoryState>('category');

export const selectAllCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);
