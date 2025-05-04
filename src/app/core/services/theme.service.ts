import {effect, Injectable, signal} from '@angular/core';

interface Theme {
  mode: string
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme = signal<Theme>({
    mode: 'dark'
  });

  constructor() {
    this.loadTheme();
    effect(() => {
      this.setConfig();
    });
  }
  private loadTheme() {
    const hour = new Date().getHours();
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.theme.set(JSON.parse(theme));
    } else {
      const theme = hour >= 18 || hour < 6 ? 'dark' : 'light';
      this.theme.set({ mode: theme });
    }
  }
  private setConfig() {
    this.setThemeOnLocalStorage();
    this.setThemeClass();
    // this.setRTL();
  }

  private setThemeClass() {
    document.querySelector('html')!.className = this.theme().mode;
    // document
    //   .querySelector('html')!
    //   .setAttribute('data-theme', this.theme().color);
  }

  private setThemeOnLocalStorage() {
    localStorage.setItem('theme', JSON.stringify(this.theme()));
  }

  public getTheme(): string {
    return this.theme().mode || 'light';
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  updateTheme() {
    this.theme.update((theme) => {
      const mode = !this.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }
}
