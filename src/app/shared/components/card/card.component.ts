import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { cn } from '../../utils/cn';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() class: string = '';
  cn = cn;
}
