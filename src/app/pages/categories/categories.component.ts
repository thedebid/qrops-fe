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
} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [ButtonComponent, LucideAngularModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  readonly PlusIcon = Plus;
  readonly EditIcon = Edit;
  readonly Trash2Icon = Trash2;
  readonly MoreHorizontalIcon = MoreHorizontal;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  categories = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Description for Category 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Description for Category 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Category 3',
      description: 'Description for Category 3',
      image: 'https://via.placeholder.com/150',
    },
  ];
}
