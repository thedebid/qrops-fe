import { createReducer, on } from '@ngrx/store';
import { Restaurant } from './restaurant.model';
import {
  loadRestaurants,
  loadRestaurantsFailure,
  loadRestaurantsSuccess,
  selectRestaurant,
} from './restaurant.actions';

export interface RestaurantState {
  restaurants: Restaurant[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
  selectedRestaurant: Restaurant | null;
}

export const initialState: RestaurantState = {
  restaurants: [],
  error: null,
  status: 'pending',
  selectedRestaurant: loadSelectedRestaurantFromLocalStorage(),
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
  })),

  on(selectRestaurant, (state, { restaurant }) => {
    saveSelectedRestaurantToLocalStorage(restaurant);
    return {
      ...state,
      selectedRestaurant: restaurant
    };
  })

);

function loadSelectedRestaurantFromLocalStorage(): Restaurant | null {
  try {
    const data = localStorage.getItem('selectedRestaurant');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load selected restaurant from localStorage', e);
    return null;
  }
}

function saveSelectedRestaurantToLocalStorage(restaurant: Restaurant): void {
  try {
    localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
  } catch (e) {
    console.error('Failed to save selected restaurant to localStorage', e);
  }
}