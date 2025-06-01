import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import {
  loadCategories,
  loadCategoriesFailure,
  loadCategoriesSuccess,
} from './category.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { showToast } from '../toast/toast.actions';
import { CategoryService } from '../../pages/categories/services/category.service';

@Injectable()
export class CategoryEffects {
  actions$ = inject(Actions);
  categoryService = inject(CategoryService);

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() =>
        from(this.categoryService.getCategories()).pipe(
          map((response) =>
            loadCategoriesSuccess({ categories: response.data })
          ),
          catchError((error) =>
            of(
              showToast({
                message: 'Failed to load categories',
                toastType: 'error',
              }),
              loadCategoriesFailure({ error })
            )
          )
        )
      )
    )
  );
}
