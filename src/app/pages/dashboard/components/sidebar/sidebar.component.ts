import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Home,
  ShoppingBag,
  Users,
  BarChart2,
  User,
  Settings,
  Group,
  ArrowDown,
} from 'lucide-angular';
import { LayoutService } from '../../../../core/services/layout.service';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink, NgForOf, LucideAngularModule, CardComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  protected readonly ShoppingBagIcon = ShoppingBag;
  protected readonly ArrowDown = ArrowDown;
  menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard/analytics' },
    { icon: Group, label: 'Categories', path: '/dashboard/categories' },
    { icon: ShoppingBag, label: 'Products', path: '/dashboard/products' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  constructor(private router: Router, public layoutService: LayoutService) {}

  isActive(path: string): boolean {
    return (
      this.router.url.startsWith(path) ||
      (this.router.url === '/dashboard/restaurants' &&
        path === '/dashboard/analytics')
    );
  }
}
