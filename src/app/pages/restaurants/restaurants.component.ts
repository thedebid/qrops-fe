import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  LucideAngularModule,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Package2,
  RefreshCw,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { AsyncPipe, NgStyle } from '@angular/common';
import { RestaurantService } from './services/restaurant.service';
import { Store } from '@ngrx/store';
import { loadRestaurants } from '../../store/restaurant/restaurant.actions';
import { selectAllRestaurants } from '../../store/restaurant/restaurant.selectors';
import { AppState } from '../../store/app.state';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-restaurants',
  imports: [
    ButtonComponent,
    LucideAngularModule,
    RouterLink,
    CardComponent,
    NgStyle,
    AsyncPipe,
  ],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent {
  readonly PlusIcon = Plus;
  readonly EditIcon = Edit;
  readonly Trash2Icon = Trash2;
  readonly MoreHorizontalIcon = MoreHorizontal;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly Package2 = Package2;
  readonly RefreshCw = RefreshCw;

  myRestaurants: any = [];

  constructor(
    private restaurantService: RestaurantService,
    private store: Store<AppState>
  ) {}

  public restaurants$: Observable<any> = of([]);

  ngOnInit() {
    this.restaurants$ = this.store.select(selectAllRestaurants);
    this.store.dispatch(loadRestaurants());
    // this.restaurantService.getRestaurants().subscribe({
    //   next: (response: any) => {
    //     if (response.length > 0) {
    //       this.myRestaurants = response;
    //     }
    //   },
    //   error: (err: any) => {
    //     console.error(err.message || 'Error fetching restaurants');
    //   },
    // });
  }
}
