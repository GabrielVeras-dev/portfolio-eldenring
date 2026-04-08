import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { SobreComponent } from './sections/sobre/sobre.component';
import { ProjetosComponent } from './sections/projetos/projetos.component';
import { HabilidadesComponent } from './sections/habilidades/habilidades.component';
import { ExperienciaComponent } from './sections/experiencia/experiencia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SobreComponent,
    ProjetosComponent,
    HabilidadesComponent,
    ExperienciaComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-sobre />
      <app-projetos />
      <app-habilidades />
      <app-experiencia />
    </main>
  `
})
export class AppComponent {}
