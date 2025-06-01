import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

export function tokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const excludedRoutes: string[] = ['/auth/sign-in', '/auth/login'];
  const isExcluded = excludedRoutes.some((route) => req.url.includes(route));

  if (isExcluded) {
    return next(req);
  }

  const authToken = inject(TokenService).getToken();

  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });
    return next(authReq);
  }

  return next(req);
}
