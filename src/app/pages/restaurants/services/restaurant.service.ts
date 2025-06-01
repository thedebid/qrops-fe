import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../../../store/restaurant/restaurant.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.apiUrlV1 + '/restaurant';

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/my-restaurants`);
  }
}
