import { Component, Input } from '@angular/core';
import { cn } from '../../../utils/cn';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-header',
  imports: [NgClass],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.css',
})
export class CardHeaderComponent {
  @Input() class: string = '';
  cn = cn;
}
