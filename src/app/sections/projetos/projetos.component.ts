import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  techs: string[];
  githubUrl: string;
  demoUrl?: string;
  imgUrl: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  projects: Project[] = [
    {
      title: 'Rick and Morty API',
      description: 'API REST em Java consumindo a API pública do Rick and Morty...',
      techs: ['Java 17', 'Spring Boot', 'REST API', 'Maven'],
      githubUrl: 'https://github.com/GabrielVeras-dev/rickandmorty-frontend',
      imgUrl: 'assets/images/rickandmorty.jpeg'
    },
    {
      title: 'Finanças API',
      description: 'API backend para gerenciamento financeiro com CRUD de entidades, regras de negócio, arquitetura REST e estrutura preparada para integração com frontend.',
      techs: ['Java', 'Spring Boot', 'JPA/Hibernate', 'REST API'],
      githubUrl: 'https://github.com/GabrielVeras-dev/financas-api',
      imgUrl: 'assets/images/financasapi.jpeg'
    },
    {
      title: 'Java OOP Practice',
      description: 'Projeto dedicado à prática dos pilares da POO: Encapsulamento, Herança, Polimorfismo e Abstração, com modelagem orientada a objetos.',
      techs: ['Java 17', 'POO', 'Design de Classes'],
      githubUrl: 'https://github.com/GabrielVeras-dev/java-oop-practice',
      imgUrl: 'assets/images/javapoo.jpeg'
    },
    {
      title: 'Java Core Practice',
      description: 'Projeto focado nos fundamentos do Core Java: estruturas de controle, Collections Framework, manipulação de objetos e tratamento de exceções.',
      techs: ['Java 17', 'Collections', 'POO'],
      githubUrl: 'https://github.com/GabrielVeras-dev/java-core-practice',
      imgUrl: 'assets/images/javacore.jpeg'
    }
  ];
}
