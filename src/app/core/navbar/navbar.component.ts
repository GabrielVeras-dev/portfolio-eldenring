import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  themeService = inject(ThemeService);
  isScrolled = signal(false);
  menuOpen = signal(false);

  navItems = [
    { id: 'home',        label: 'Início'       },
    { id: 'sobre',       label: 'Sobre'        },
    { id: 'projetos',    label: 'Projetos'     },
    { id: 'habilidades', label: 'Habilidades'  },
    { id: 'experiencia', label: 'Experiência'  },
    { id: 'contato',     label: 'Contato'      }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
