import { CategoryState } from './category/category.reducers';
import { RestaurantState } from './restaurant/restaurant.reducers';

export interface AppState {
  restaurants: RestaurantState;
  categories: CategoryState;
}
