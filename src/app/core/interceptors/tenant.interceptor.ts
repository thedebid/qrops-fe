import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectSelectedRestaurant } from '../../store/restaurant/restaurant.selectors';

export function tenantInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const excludedRoutes: string[] = [
    '/auth/sign-in',
    '/auth/login',
    '/restaurant/create',
    '/restaurant/my-restaurants',
  ];
  const isExcluded = excludedRoutes.some((route) => req.url.includes(route));

  if (isExcluded) {
    return next(req);
  }

  const store = inject(Store);
  const selectedRestaurant = toSignal(store.select(selectSelectedRestaurant), {
    initialValue: null,
  });

  if (selectedRestaurant()) {
    const request = req.clone({
      headers: req.headers.set('X-TenantID', `${selectedRestaurant()?.id}`),
    });
    return next(request);
  }
  return next(req);
}
