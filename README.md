# 🏰 Portfólio Gabriel Veras — Tema Elden Ring

Portfólio pessoal desenvolvido com **Angular 17** utilizando Standalone Components, Signals e Animations, com tema visual inspirado em **Elden Ring** (FromSoftware / Bandai Namco).

> "Rise, Tarnished, and be guided by grace."

---

## 🌐 Demo

**[portfolio-eldenring.vercel.app](https://portfolio-eldenring.vercel.app)**

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| **Angular 17** | Framework principal |
| **TypeScript** | Tipagem estática |
| **SCSS** | Estilização com variáveis CSS |
| **Angular Signals** | Gerenciamento de estado do tema |
| **Angular Animations** | Animações de entrada |
| **IntersectionObserver** | Scroll spy da navbar |
| **Google Fonts** | Cinzel Decorative + EB Garamond |
| **Vercel** | Deploy e hospedagem |

---

## 🎨 Identidade Visual

O tema foi inspirado diretamente nos sites oficiais do Elden Ring, Shadow of the Erdtree e Nightreign da Bandai Namco.

| Elemento | Valor |
|---------|-------|
| Fundo principal | `#0a0806` |
| Dourado principal | `#e8c840` |
| Dourado secundário | `#d4a830` |
| Vermelho acento | `#c03828` |
| Tipografia títulos | Cinzel Decorative |
| Tipografia texto | EB Garamond |

O Dark/Light mode é controlado via CSS Variables — ao alternar o tema, apenas os valores das variáveis mudam, sem recarregar nada.

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── core/
│   │   └── navbar/              → Navbar fixa com scroll spy e toggle de tema
│   ├── sections/
│   │   ├── hero/                → Seção principal com imagem Elden Ring de fundo
│   │   ├── sobre/               → Apresentação, stats e links sociais
│   │   ├── projetos/            → Cards de projetos com imagens e links
│   │   ├── habilidades/         → Skills agrupadas por categoria
│   │   ├── experiencia/         → Timeline de experiência profissional
│   │   ├── curiosidades/        → Seção pessoal com jogos e interesses
│   │   └── contato/             → Links de contato e rodapé
│   ├── services/
│   │   └── theme.service.ts     → Dark/Light mode com Signals + localStorage
│   └── app.component.ts         → Componente raiz
├── styles.scss                  → Variáveis globais dark/light e utilitários
└── index.html                   → Google Fonts e meta tags SEO
```

---

## ✨ Funcionalidades

### Dark / Light Mode

Gerenciado com **Angular Signals** — o estado do tema é reativo e persiste via `localStorage`. O sistema respeita a preferência do sistema operacional na primeira visita.

```typescript
theme = signal<Theme>(this.getInitialTheme());

toggle(): void {
  const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
  this.theme.set(next);
  localStorage.setItem('portfolio-theme', next);
}
```

### Standalone Components

Todos os componentes são standalone — sem NgModule:

```typescript
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {}
```

### Nova Sintaxe Angular 17

Uso do novo fluxo de controle com `@for` e `@if`:

```html
@for (project of projects; track project.title) {
  <div class="project-card">{{ project.title }}</div>
}

@if (themeService.isDark()) {
  <span>☀</span>
} @else {
  <span>☾</span>
}
```

### Scroll Spy

A navbar detecta qual seção está visível usando `IntersectionObserver` nativo:

```typescript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeSection.set(entry.target.id);
      }
    });
  },
  { threshold: 0.4 }
);
```

---

## ⚙️ Como Rodar

### Pré-requisitos

- Node.js 18+
- Angular CLI 17+

### Passos

Clone o repositório:

```bash
git clone https://github.com/GabrielVeras-dev/portfolio-eldenring.git
```

Entre na pasta:

```bash
cd portfolio-eldenring
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
ng serve
```

Acesse em: **http://localhost:4200**

---

## 📦 Build para Produção

```bash
ng build
```

Os arquivos gerados ficam em `dist/portfolio-elden/browser/`.

---

## 🚀 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel.

Todo push na branch `main` dispara um novo deploy automaticamente.

---

## 📋 Seções do Portfólio

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com imagem oficial do Elden Ring de fundo |
| **Sobre** | Resumo profissional, stats e links sociais |
| **Projetos** | Cards dos projetos com techs, descrição e links |
| **Habilidades** | Stack técnica agrupada por categoria |
| **Experiência** | Timeline da trajetória profissional |
| **Curiosidades** | Seção pessoal com jogos e interesses |
| **Contato** | Email, LinkedIn, GitHub e WhatsApp |

---

## 👨‍💻 Autor

**Gabriel de Abreu Veras**
Desenvolvedor Backend Java | Spring Boot | APIs REST

[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--gabrielveras-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/dev-gabrielveras/)
[![GitHub](https://img.shields.io/badge/GitHub-GabrielVeras--dev-black?style=flat&logo=github)](https://github.com/GabrielVeras-dev)
[![Portfolio](https://img.shields.io/badge/Portfolio-Elden%20Ring-gold?style=flat)](https://portfolio-eldenring.vercel.app)

---

> As imagens utilizadas pertencem à **FromSoftware / Bandai Namco** e são usadas apenas como referência visual sem fins comerciais.
