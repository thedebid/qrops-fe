import { createReducer, on } from '@ngrx/store';
import { Category } from './category.model';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from './category.actions';

export interface CategoryState {
  categories: Category[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
  // selectedRestaurant: Category | null;
}

export const initialState: CategoryState = {
  categories: [],
  error: null,
  status: 'pending',
};

export const categoryReducer = createReducer(
  initialState,
  on(loadCategories, (state) => ({
    ...state,
    status: 'loading' as const,
  })),

  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories: categories,
    error: '',
    status: 'success' as const,
  })),

  on(loadCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error' as const,
  }))
);
