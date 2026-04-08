import { Component } from '@angular/core';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { SobreComponent } from './sections/sobre/sobre.component';
import { ProjetosComponent } from './sections/projetos/projetos.component';
import { HabilidadesComponent } from './sections/habilidades/habilidades.component';
import { ExperienciaComponent } from './sections/experiencia/experiencia.component';
import { CuriosidadesComponent } from './sections/curiosidades/curiosidades.component';
import { ContatoComponent } from './sections/contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SobreComponent,
    ProjetosComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    CuriosidadesComponent,
    ContatoComponent
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-sobre />
      <app-projetos />
      <app-habilidades />
      <app-experiencia />
      <app-curiosidades />
      <app-contato />
    </main>
  `
})
export class AppComponent {}
