import { Component } from '@angular/core';
import {
  DollarSign,
  LucideAngularModule,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Package2,
} from 'lucide-angular';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgClass, NgStyle } from '@angular/common';
import { CardContentComponent } from '../../shared/components/card/card-content/card-content.component';
import { CardHeaderComponent } from '../../shared/components/card/card-header/card-header.component';
import { CardTitleComponent } from '../../shared/components/card/card-title/card-title.component';
import { CardDescriptionComponent } from '../../shared/components/card/card-description/card-description.component';

@Component({
  selector: 'app-analytics',
  imports: [
    CardComponent,
    CardContentComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    LucideAngularModule,
    NgClass,
    NgStyle,
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {
  readonly TrendingUp = TrendingUp;
  readonly TrendingDown = TrendingDown;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Package2 = Package2;
  stats = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      iconBackground: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 2,
      title: 'New Customers',
      value: '35',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      iconBackground: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 3,
      title: 'Active Products',
      value: '432',
      change: '+5.4%',
      trend: 'up',
      icon: Package,
      iconBackground: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 4,
      title: 'Pending Orders',
      value: '12',
      change: '-2.5%',
      trend: 'down',
      icon: ShoppingCart,
      iconBackground: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  recentOrders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      date: '2023-05-26',
      status: 'Completed',
      amount: '$125.00',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      date: '2023-05-25',
      status: 'Processing',
      amount: '$75.50',
    },
    {
      id: 'ORD-003',
      customer: 'Robert Johnson',
      date: '2023-05-25',
      status: 'Completed',
      amount: '$350.00',
    },
    {
      id: 'ORD-004',
      customer: 'Lisa Brown',
      date: '2023-05-24',
      status: 'Shipped',
      amount: '$210.25',
    },
    {
      id: 'ORD-005',
      customer: 'Michael Davis',
      date: '2023-05-24',
      status: 'Cancelled',
      amount: '$45.00',
    },
  ];

  products = [
    { name: 'Wireless Earbuds', sales: 145, amount: '$4,350', percent: 28 },
    { name: 'Smart Watch', sales: 98, amount: '$3,920', percent: 21 },
    { name: 'Bluetooth Speaker', sales: 67, amount: '$2,345', percent: 15 },
    { name: 'Laptop Backpack', sales: 54, amount: '$1,890', percent: 12 },
    { name: 'Phone Case', sales: 41, amount: '$1,230', percent: 8 },
  ];

  getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
}
