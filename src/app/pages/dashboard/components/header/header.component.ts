import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Bell,
  User,
  LogOut,
  X,
  Menu,
} from 'lucide-angular';
import { LayoutService } from '../../../../core/services/layout.service';
@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly BellIcon = Bell;
  readonly UserIcon = User;
  readonly LogOutIcon = LogOut;
  readonly XIcon = X;
  readonly MenuIcon = Menu;

  showUserMenu: boolean = false;

  toggleUserMenu() {
    console.log('User menu toggled');

    this.showUserMenu = !this.showUserMenu;
  }
  constructor(public layoutService: LayoutService) {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
    console.log('Sidebar toggled:', this.layoutService.isSidebarOpen());
  }
}
