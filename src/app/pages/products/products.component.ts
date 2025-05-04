import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  LucideAngularModule,
  Plus,
  Search,
  Filter,
  Grid,
  List,
  Edit,
  Trash2Icon,
  MoreHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ButtonComponent, LucideAngularModule, RouterLink, NgClass, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  readonly PlusIcon = Plus;
  readonly SearchIcon = Search;
  readonly FilterIcon = Filter;
  readonly GridIcon = Grid;
  readonly ListIcon = List;
  readonly EditIcon = Edit;
  readonly Trash2Icon = Trash2Icon;

  readonly MoreHorizontalIcon = MoreHorizontalIcon;
  readonly ChevronLeftIcon = ChevronLeftIcon;
  readonly ChevronRightIcon = ChevronRightIcon;

  searchQuery: string ='';

  // Mock product data
  products = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      category: 'Electronics',
      price: 79.99,
      stock: 45,
      image:
        'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      category: 'Electronics',
      price: 199.99,
      stock: 28,
      image:
        'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      status: 'In Stock',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      price: 59.99,
      stock: 36,
      image:
        'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      status: 'In Stock',
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      category: 'Accessories',
      price: 49.99,
      stock: 12,
      image:
        'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      status: 'Low Stock',
    },
    {
      id: 5,
      name: 'Phone Case',
      category: 'Accessories',
      price: 19.99,
      stock: 65,
      image:
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      status: 'In Stock',
    },
    {
      id: 6,
      name: 'Desk Lamp',
      category: 'Home',
      price: 39.99,
      stock: 0,
      image:
        'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      status: 'Out of Stock',
    },
  ];

  viewMode: 'grid' | 'list' = 'grid';

  ngOnInit(): void {
    this.filterProducts(); // This runs on initial render
  }

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
  getStatusColor(status: string): string {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  filteredProducts:any = [];

  filterProducts() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }
}
