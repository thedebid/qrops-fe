import { createReducer, on } from '@ngrx/store';
import { Restaurant } from './restaurant.model';
import {
  loadRestaurants,
  loadRestaurantsFailure,
  loadRestaurantsSuccess,
} from './restaurant.actions';

export interface RestaurantState {
  restaurants: Restaurant[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: RestaurantState = {
  restaurants: [],
  error: '',
  status: 'pending',
};

export const restaurantReducer = createReducer(
  initialState,
  on(loadRestaurants, (state) => ({
    ...state,
    status: 'loading' as const,
  })),

  on(loadRestaurantsSuccess, (state, { restaurants }) => ({
    ...state,
    restaurants: restaurants,
    error: '',
    status: 'success' as const,
  })),

  on(loadRestaurantsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error' as const,
  }))
);
