import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { authGuard } from './core/guards/auth.guard';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'analytics', component: AnalyticsComponent },
      {
        path: 'restaurants',
        component: RestaurantsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'categories/new',
        component: AddCategoryComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/new',
        component: AddProductComponent,
      },
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    ],
  },
];
