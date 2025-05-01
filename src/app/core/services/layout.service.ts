import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _isSidebarOpen = signal(
    localStorage.getItem('isSidebarOpen') === null
      ? true
      : localStorage.getItem('isSidebarOpen') === 'true'
  );
  isSidebarOpen = this._isSidebarOpen.asReadonly();

  toggleSidebar() {
    const newValue = !this._isSidebarOpen();
    this._isSidebarOpen.set(newValue);
    localStorage.setItem('isSidebarOpen', String(newValue));
  }
}
