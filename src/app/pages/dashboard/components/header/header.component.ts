import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Bell,
  User,
  LogOut,
  X,
  Menu,
  ChevronDown,
} from 'lucide-angular';
import { LayoutService } from '../../../../core/services/layout.service';
import { ThemeToggleComponent } from '../../../../shared/components/theme-toggle/theme-toggle.component';
import { AsyncPipe, NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { Observable, of } from 'rxjs';
import { AppState } from '../../../../store/app.state';
import { Store } from '@ngrx/store';
import {
  selectAllRestaurants,
  selectSelectedRestaurant,
} from '../../../../store/restaurant/restaurant.selectors';
import {
  loadRestaurants,
  selectRestaurant,
} from '../../../../store/restaurant/restaurant.actions';
import { Restaurant } from '../../../../store/restaurant/restaurant.model';
@Component({
  selector: 'app-header',
  imports: [
    LucideAngularModule,
    RouterLink,
    ThemeToggleComponent,
    NgStyle,
    NgClass,
    NgIf,
    NgForOf,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly BellIcon = Bell;
  readonly UserIcon = User;
  readonly LogOutIcon = LogOut;
  readonly XIcon = X;
  readonly MenuIcon = Menu;
  readonly ChevronDownIcon = ChevronDown;

  showUserMenu: boolean = false;

  toggleUserMenu() {
    console.log('User menu toggled');

    this.showUserMenu = !this.showUserMenu;
  }
  constructor(
    public layoutService: LayoutService,
    private store: Store<AppState>
  ) {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
    console.log('Sidebar toggled:', this.layoutService.isSidebarOpen());
  }

  isDropdownOpen = false;

  public restaurants$: Observable<any> = of([]);
  public selectedRestaurant$: Observable<any> = of({});

  ngOnInit() {
    this.store.dispatch(loadRestaurants());
    this.restaurants$ = this.store.select(selectAllRestaurants);
    this.selectedRestaurant$ = this.store.select(selectSelectedRestaurant);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectRestaurant(restaurant: Restaurant): void {
    this.store.dispatch(selectRestaurant({ restaurant }));
    this.isDropdownOpen = false;
  }

  viewAllRestaurants() {
    this.isDropdownOpen = false;
  }
}
