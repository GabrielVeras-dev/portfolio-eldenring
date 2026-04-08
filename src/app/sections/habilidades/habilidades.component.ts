import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: 'java' | 'spring' | 'angular' | 'db' | 'tools' | 'infra';
}

interface SkillGroup {
  label: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
  groups: SkillGroup[] = [
    {
      label: 'Backend',
      icon: '⚔',
      skills: [
        { name: 'Java 17+',       category: 'java'   },
        { name: 'Spring Boot',    category: 'java'   },
        { name: 'REST APIs',      category: 'java'   },
        { name: 'JPA/Hibernate',  category: 'java'   },
        { name: 'Maven',          category: 'java'   },
        { name: 'POO',            category: 'java'   },
        { name: 'MVC',            category: 'java'   },
        { name: 'Microservices',  category: 'java'   }
      ]
    },
    {
      label: 'Frontend',
      icon: '🛡',
      skills: [
        { name: 'Angular',     category: 'angular' },
        { name: 'TypeScript',  category: 'angular' },
        { name: 'HTML5',       category: 'angular' },
        { name: 'CSS3',        category: 'angular' },
        { name: 'Angular Material', category: 'angular' }
      ]
    },
    {
      label: 'Banco de Dados',
      icon: '📜',
      skills: [
        { name: 'PostgreSQL', category: 'db' },
        { name: 'MySQL',      category: 'db' },
        { name: 'H2',         category: 'db' },
        { name: 'MongoDB',    category: 'db' },
        { name: 'SQL',        category: 'db' }
      ]
    },
    {
      label: 'Infra & Observabilidade',
      icon: '🔭',
      skills: [
        { name: 'Linux',       category: 'infra' },
        { name: 'Grafana',     category: 'infra' },
        { name: 'Zabbix',      category: 'infra' },
        { name: 'SD-WAN',      category: 'infra' },
        { name: 'TCP/IP',      category: 'infra' },
        { name: 'Redes',       category: 'infra' },
        { name: 'ITIL',        category: 'infra' }
      ]
    },
    {
      label: 'Ferramentas & DevOps',
      icon: '⚙',
      skills: [
        { name: 'Git',      category: 'tools' },
        { name: 'GitHub',   category: 'tools' },
        { name: 'Docker',   category: 'tools' },
        { name: 'Jenkins',  category: 'tools' },
        { name: 'Postman',  category: 'tools' }
      ]
    },
    {
      label: 'Metodologias',
      icon: '📋',
      skills: [
        { name: 'Scrum',      category: 'tools' },
        { name: 'Kanban',     category: 'tools' },
        { name: 'Clean Code', category: 'tools' }
      ]
    }
  ];
}
