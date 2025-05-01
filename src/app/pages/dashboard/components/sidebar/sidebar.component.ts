import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Home,
  ShoppingBag,
  PlusCircle,
  Users,
  BarChart2,
  User,
  Settings,
  Group,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink, NgForOf, LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen: boolean = true;

  menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard/analytics' },
    { icon: Group, label: 'Categories', path: '/dashboard/categories' },
    { icon: ShoppingBag, label: 'Products', path: '/dashboard/products' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url.startsWith(path);
  }
}
