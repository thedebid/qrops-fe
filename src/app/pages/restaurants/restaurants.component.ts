import { Component, inject } from '@angular/core';
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
  CheckCircle,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { AsyncPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  loadRestaurants,
  selectRestaurant,
} from '../../store/restaurant/restaurant.actions';
import {
  selectAllRestaurants,
  selectSelectedRestaurant,
} from '../../store/restaurant/restaurant.selectors';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../../store/restaurant/restaurant.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-restaurants',
  imports: [
    ButtonComponent,
    LucideAngularModule,
    RouterLink,
    CardComponent,
    NgStyle,
    AsyncPipe,
    NgClass,
    NgIf,
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
  readonly CheckCircle = CheckCircle;

  private store = inject(Store);
  // constructor(private store: Store<AppState>) {}

  public restaurants$: Observable<any> = of([]);
  public selectedRestaurant = toSignal(
    this.store.select(selectSelectedRestaurant),
    { initialValue: null }
  );

  ngOnInit() {
    this.store.dispatch(loadRestaurants());
    this.restaurants$ = this.store.select(selectAllRestaurants);
  }

  switchRestaurant(restaurant: Restaurant) {
    this.store.dispatch(selectRestaurant({ restaurant }));
  }
}
