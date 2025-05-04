import { Component, Input } from '@angular/core';
import { cn } from '../../../utils/cn';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-description',
  imports: [NgClass],
  templateUrl: './card-description.component.html',
  styleUrl: './card-description.component.css',
})
export class CardDescriptionComponent {
  @Input() class: string = '';
  cn = cn;
}
