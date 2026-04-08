import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Curiosidade {
  icon: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curiosidades.component.html',
  styleUrl: './curiosidades.component.scss'
})
export class CuriosidadesComponent {
  curiosidades: Curiosidade[] = [
    {
      icon: '🏰',
      category: 'Elden Ring',
      title: 'Elden Lord — NG+6',
      description: 'Já zerei Elden Ring 6 vezes com diferentes builds, parando no NG+7 estrategicamente para aproveitar a DLC Shadow of the Erdtree do jeito certo. O jogo que inspirou este portfólio.'
    },
    {
      icon: '🌑',
      category: 'Elden Ring Nightreign',
      title: 'Nightreign',
      description: 'Também joguei Nightreign, o spin-off cooperativo do universo Elden Ring. Uma experiência completamente diferente mas igualmente desafiadora.'
    },
    {
      icon: '☠',
      category: 'Souls-like',
      title: 'Fã do gênero',
      description: 'Elden Ring não foi o único — o universo Souls-like me conquistou pela dificuldade, narrativa densa e a sensação inigualável de superar um boss difícil como das series de Dark Souls.'
    },
    {
        icon: '🏜',
        category: 'Crimson Desert',
        title: 'Aventureiro de Pywel',
        description: 'Crimson Desert é meu segundo jogo mais jogado neste ano, mesmo recém lançado. Um mundo aberto da Pearl Abyss com visual incrível — chegou forte como candidato ao tema deste portfólio.'
      },
      {
        icon: '👾',
        category: 'Co-op & Multiplayer',
        title: 'Gamer Social',
        description: 'Curto muito jogar com amigos — R.E.P.O., Devour, COD, Pummel Party e Arc Raiders mostram que o melhor do gaming é compartilhado. Nada melhor do que um co-op para estressar e rir ao mesmo tempo.'
      },
      {
        icon: '🌌',
        category: 'Exploração',
        title: 'Explorador de Mundos',
        description: 'No Man\'s Sky, Baldur\' Gate 3 e Dave the Diver mostram outro lado do meu gosto gamer — jogos de exploração e descoberta onde o ritmo é mais tranquilo mas a profundidade é enorme.'
      },
    {
      icon: '🎌',
      category: 'Anime',
      title: 'Meus "Desenhos" desde Criança',
      description: 'Gosto bastante de animes — Frieren, One Piece, Jujutsu Kaisen, Dragon Ball e alguns Isekais estiveram todos na disputa pelo tema deste portfólio. Frieren quase ganhou!'
    },
    {
      icon: '☕',
      category: 'Dev Life',
      title: 'Código + Café',
      description: 'A combinação perfeita para uma boa sessão de desenvolvimento. Se estou codando, tem café do lado — é praticamente uma dependência do projeto.'
    },
  {
    icon: '🗺️',
    category: 'Lifestyle',
    title: 'Mapa Aberto na Vida Real',
    description: 'Se no jogo eu exploro mundos, na vida real não é diferente. Gosto de viajar, descobrir lugares novos e mergulhar em outras culturas — side quests que sempre valem a experiência.'
  }
  ];
}
