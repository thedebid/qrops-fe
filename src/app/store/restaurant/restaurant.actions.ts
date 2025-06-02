import { createAction, props } from '@ngrx/store';
import { Restaurant } from './restaurant.model';

export const LOAD_RESTAURANT = '[Restaurant] Load Restaurants';
export const LOAD_RESTAURANT_SUCCESS = '[Restaurant] Load Restaurants Succes';
export const LOAD_RESTAURANT_FAIL = '[Restaurant] Load Restaurants Failure';
export const SELECT_RESTAURANT = '[Restaurant] Select Restaurant';

export const loadRestaurants = createAction(LOAD_RESTAURANT);

export const loadRestaurantsSuccess = createAction(
  LOAD_RESTAURANT_SUCCESS,
  props<{ restaurants: Restaurant[] }>()
);

export const loadRestaurantsFailure = createAction(
  LOAD_RESTAURANT_FAIL,
  props<{ error: string }>()
);

export const selectRestaurant = createAction(
  SELECT_RESTAURANT,
  props<{ restaurant: Restaurant }>()
);
