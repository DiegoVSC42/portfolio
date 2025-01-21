import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal([
    {
      summary: {
        strong: 'Freelancer, Remoto',
        p: 'jan 2024 - Presente',
      },
      text: '<p>Desenvolvimento e manutenção de aplicações web</p>',
    },
    {
      summary: {
        strong: 'Estagiário de Tecnologia, Brasília',
        p: 'Procuradoria Geral da Fazenda Nacional | Outubro 2022 - Outubro 2024',
      },
      text: '<p>- Elaborei planilhas e relatórios que otimizaram a gestão de processos jurídicos, aumentando a eficiência das atividades.<br> - Desenvolvi e mantive bancos de dados para organização e análise de informações relevantes, facilitando o acesso a dados críticos.<br>- Realizei estudos sobre softwares e aplicações que potencializaram a automação de tarefas jurídicas, contribuindo para a redução de erros e ganho de tempo.</p>',
    },
  ]);
}
