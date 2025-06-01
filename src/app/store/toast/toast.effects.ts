import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { toast } from 'ngx-sonner';
import { showToast } from './toast.actions';

@Injectable()
export class ToastEffects {
  //   constructor(private actions$: Actions) {}
  actions$ = inject(Actions);

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showToast),
        tap(({ message, toastType }) => {
          switch (toastType) {
            case 'success':
              toast.success(message);
              break;
            case 'error':
              toast.error(message);
              break;
            case 'info':
              toast.info(message);
              break;
            case 'warning':
              toast.warning(message);
              break;
          }
        })
      ),
    { dispatch: false } // It's a side effect only, no further action dispatched
  );
}
