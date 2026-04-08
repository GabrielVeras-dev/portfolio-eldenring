import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { SobreComponent } from './sections/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SobreComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-sobre />
    </main>
  `
})
export class AppComponent {}
