import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { provideStore } from '@ngrx/store';
import { restaurantReducer } from './store/restaurant/restaurant.reducers';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { RestaurantEffects } from './store/restaurant/restaurant.effects';
import { ToastEffects } from './store/toast/toast.effects';
import { CategoryEffects } from './store/category/category.effects';
import { categoryReducer } from './store/category/category.reducers';
import { tenantInterceptor } from './core/interceptors/tenant.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor, tenantInterceptor])),
    provideStore({ restaurant: restaurantReducer, category: categoryReducer }),
    provideEffects([RestaurantEffects, ToastEffects, CategoryEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
