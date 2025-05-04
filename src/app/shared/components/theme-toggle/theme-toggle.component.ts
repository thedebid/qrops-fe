import { Component } from '@angular/core';
import {ThemeService} from '../../../core/services/theme.service';
import {LucideAngularModule, Sun, Moon, User} from 'lucide-angular';

@Component({
  selector: 'app-theme-toggle',
  imports: [LucideAngularModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.updateTheme();
  }

  protected readonly UserIcon = User;
}
