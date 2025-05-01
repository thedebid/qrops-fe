import { NgClass } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'completeghost'
    | 'danger' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() class: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get classes(): string[] {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
      secondary:
        'bg-teal-500 text-white hover:bg-teal-600 focus-visible:ring-teal-500',
      outline:
        'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400',
      completeghost: 'bg-transparent focus-visible:ring-gray-400',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-6 py-3 text-lg',
    };

    return [
      baseStyles,
      variants[this.variant] || '',
      sizes[this.size] || '',
      this.class,
    ];
  }
}
