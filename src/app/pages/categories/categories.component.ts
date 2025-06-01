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
} from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadCategories } from '../../store/category/category.actions';
import { selectAllCategories } from '../../store/category/category.selectors';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../store/app.state';
import { Category } from '../../store/category/category.model';

@Component({
  selector: 'app-categories',
  imports: [ButtonComponent, LucideAngularModule, RouterLink, AsyncPipe],
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

  constructor(private store: Store<AppState>) {}

  public categories$: Observable<Category[]> = of([]);

  ngOnInit() {
    this.store.dispatch(loadCategories());
    this.categories$ = this.store.select(selectAllCategories);
  }
}
