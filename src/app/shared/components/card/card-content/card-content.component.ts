import { Component, Input } from '@angular/core';
import { cn } from '../../../utils/cn';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-content',
  imports: [NgClass],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css',
})
export class CardContentComponent {
  @Input() class: string = '';
  cn = cn;
}
