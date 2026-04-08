import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  url: string;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  year = new Date().getFullYear();

  contacts: ContactItem[] = [
    {
      icon: '✉',
      label: 'E-mail',
      value: 'bielveras.e@hotmail.com',
      url: 'mailto:bielveras.e@hotmail.com'
    },
    {
      icon: 'in',
      label: 'LinkedIn',
      value: 'dev-gabrielveras',
      url: 'https://www.linkedin.com/in/dev-gabrielveras/'
    },
    {
      icon: '⚙',
      label: 'GitHub',
      value: 'GabrielVeras-dev',
      url: 'https://github.com/GabrielVeras-dev'
    },
    {
      icon: '✆',
      label: 'WhatsApp',
      value: '(61) 99874-2263',
      url: 'https://wa.me/5561998742263'
    }
  ];
}
