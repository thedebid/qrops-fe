import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.apiUrlV1 + '/category';

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/restaurant`);
  }
}
