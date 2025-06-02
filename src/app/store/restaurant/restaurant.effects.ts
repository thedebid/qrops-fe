import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { toast } from 'ngx-sonner';
import { RestaurantService } from '../../pages/restaurants/services/restaurant.service';
import { inject, Injectable } from '@angular/core';
import {
  loadRestaurants,
  loadRestaurantsFailure,
  loadRestaurantsSuccess,
} from './restaurant.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { showToast } from '../toast/toast.actions';

@Injectable()
export class RestaurantEffects {
  actions$ = inject(Actions);
  restaurantService = inject(RestaurantService);

  loadRestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRestaurants),
      switchMap(() =>
        // Call the getRestaurants method, convert it to an observable
        from(this.restaurantService.getRestaurants()).pipe(
          // Take the returned value and return a new success action containing the restaurants
          map((restaurants) =>
            loadRestaurantsSuccess({ restaurants: restaurants })
          ),
          // Or... if it errors return a new failure action containing the error
          catchError((error) =>
            of(
              showToast({
                message: 'Failed to load restaurants',
                toastType: 'error',
              }),
              loadRestaurantsFailure({ error })
            )
          )
        )
      )
    )
  );
}
