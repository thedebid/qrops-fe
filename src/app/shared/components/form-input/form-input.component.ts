import { Component, Input } from '@angular/core';
import { cn } from '../../utils/cn';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-input',
  imports: [NgIf],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
})
export class FormInputComponent {
  @Input() type: string = 'text';
  @Input() className?: string;
  @Input() error?: string;
  @Input() disabled: boolean = false;

  cn = cn;
}
