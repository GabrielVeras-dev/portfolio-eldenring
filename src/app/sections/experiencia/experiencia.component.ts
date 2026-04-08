import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  experiences: Experience[] = [
    {
      role: 'Analista de Redes',
      company: 'Global Web — Cliente: Telebras · Brasília, DF',
      period: 'Abr 2024 — Jan 2026',
      description: 'Sustentação e análise de incidentes em infraestrutura de redes e serviços críticos de telecomunicações. Troubleshooting em ambientes de alta disponibilidade, acompanhando todo o ciclo de vida dos incidentes. Monitoramento proativo e execução de testes técnicos em equipamentos Fortigate, Cisco e enlaces satelitais. Atuação colaborativa com equipes técnicas locais, fornecedores e o próprio cliente para resolução conjunta de falhas',
      techs: ['SD-WAN', 'RTCE', 'DWDM', 'Grafana', 'Zabbix', 'ITIL', 'Fortigate', 'Cisco', 'Infraestrutura','Rede satelital']
    },
    {
      role: 'Técnico de Monitoramento (NOC)',
      company: 'Central IT — Cliente: UnB · Brasília, DF',
      period: 'Fev 2025 — Jun 2025',
      description: 'Monitoramento contínuo de ambientes corporativos críticos da Universidade de Brasília. Análise proativa de métricas, resposta a incidentes críticos e gestão de chamados via ITSM. Elaboração de relatórios técnicos e documentação operacional diária.',
      techs: ['Zabbix', 'Grafana', 'ITSM', 'NOC']
    },
    {
      role: 'Técnico de Operações e Suporte',
      company: 'Central IT — Cliente: Imprensa Nacional · Brasília, DF',
      period: 'Out 2022 — Abr 2024',
      description: 'Sustentação operacional e suporte técnico avançado em ambiente corporativo. Diagnóstico e resolução de problemas em hardware, software e sistemas. Configuração de dispositivos de rede, impressoras e periféricos corporativos.',
      techs: ['Suporte N2/N3', 'Redes', 'Windows', 'Linux', 'Hardware']
    },
    {
      role: 'Técnico de Suporte N2',
      company: 'Vert — Cliente: Defensoria Pública da União · Brasília, DF',
      period: 'Out 2022 — Mar 2023',
      description: 'Análise e resolução de incidentes em ambiente produtivo monitorado. Troubleshooting em infraestrutura de TI envolvendo estações de trabalho, sistemas corporativos, redes e servidores.',
      techs: ['Suporte N2', 'Redes', 'Servidores', 'Windows']
    },
    {
      role: 'Estagiário em TI',
      company: 'Roque Khouri & Pinheiro · Brasília, DF',
      period: 'Jan 2019 — Jan 2021',
      description: 'Desenvolvimento e manutenção de sistema interno (Intranet), atuando no backend com Java e no frontend com HTML, CSS e JavaScript. Implementação de melhorias, correção de bugs e suporte evolutivo da aplicação.',
      techs: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript']
    }
  ];
}
