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
  Package,
  Package2,
  RefreshCw,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgStyle } from '@angular/common';
import { RestaurantService } from './services/restaurant.service';
@Component({
  selector: 'app-restaurants',
  imports: [
    ButtonComponent,
    LucideAngularModule,
    RouterLink,
    CardComponent,
    NgStyle,
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

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe({
      next: (response: any) => {
        if (response.length > 0) {
          this.myRestaurants = response;
        }
      },
      error: (err: any) => {
        console.error(err.message || 'Error fetching restaurants');
      },
    });
  }
}
