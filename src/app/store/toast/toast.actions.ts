import { createAction, props } from '@ngrx/store';

export const showToast = createAction(
  '[Toast] Show Toast',
  props<{
    message: string;
    toastType: 'success' | 'error' | 'info' | 'warning';
  }>()
);
