import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8765/api/v1/auth';
  private tokenKey = 'authToken';
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(this.apiUrl + '/login', payload);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem(this.tokenKey);
  }

  setLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedIn = isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(this.tokenKey);
    window.location.href = '/login';
  }
}
