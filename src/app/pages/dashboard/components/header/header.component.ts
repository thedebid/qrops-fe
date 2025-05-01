import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Bell, User, LogOut } from 'lucide-angular';
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

  showUserMenu: boolean = false;

  toggleUserMenu() {
    console.log('User menu toggled');

    this.showUserMenu = !this.showUserMenu;
  }
}
