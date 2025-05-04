import { Component, Input } from '@angular/core';
import { cn } from '../../../utils/cn';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-title',
  imports: [NgClass],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.css',
})
export class CardTitleComponent {
  @Input() class: string = '';
  cn = cn;
}
