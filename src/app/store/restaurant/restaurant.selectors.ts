import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RestaurantState } from './restaurant.reducers';

export const selectRestaurantState =
  createFeatureSelector<RestaurantState>('restaurant');

export const selectAllRestaurants = createSelector(
  selectRestaurantState,
  (state: RestaurantState) => state.restaurants
);

export const selectSelectedRestaurant = createSelector(
  selectRestaurantState,
  (state) => state.selectedRestaurant
);
