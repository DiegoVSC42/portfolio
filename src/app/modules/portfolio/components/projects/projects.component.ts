import { Component, inject, signal } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { IProjects } from '../../interface/Projects.interface';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      //IMAGEM DO PROJETO
      src: 'assets/icons/projects/what-the-number.svg',
      alt: 'Icone do numero 123',
      width: '75%',
      height: '75%',
      title: 'What The Number',
      description:
        'Um projeto desenvolvido em Angular e Java com Spring que oferece uma maneira simples e intuitiva de explorar diversas propriedades matemáticas de números. A aplicação permite que o usuário insira um número e receba informações detalhadas, como fatores, primalidade, números perfeitos, e outras curiosidades matemáticas.',
      links: [
        {
          name: 'LINK DO PROJETO',
          href: 'https://what-the-number-frontend.vercel.app/',
        },
      ],
    },

    {
      //IMAGEM DO PROJETO
      src: 'assets/icons/projects/conversor-de-moedas.svg',
      alt: 'Icone de uma moeda',
      width: '50%',
      height: '50%',
      title: 'Conversor de Moedas',
      description:
        'Este projeto é um Conversor de Moedas que permite converter valores entre diferentes moedas em tempo real. O projeto faz uso de HTML, CSS e JavaScript, além de consumir dados de uma API de conversão de moedas.',
      links: [
        {
          name: 'LINK DO PROJETO',
          href: 'https://diegovsc42.github.io/Conversor-de-Moedas/',
        },
      ],
    },

    {
      //IMAGEM DO PROJETO
      src: 'assets/icons/projects/carrinho-de-compras.svg',
      alt: 'Icone de um carrinho de compras',
      width: '50%',
      height: '50%',
      title: 'Carrinho de compras',
      description:
        'Este projeto é uma aplicação web para gerenciar um carrinho de compras. Permite adicionar itens com nome, valor e quantidade, além de atualizar o valor total automaticamente conforme os itens são adicionados, editados ou excluídos.',
      links: [
        {
          name: 'LINK DO PROJETO',
          href: 'https://carrinho-de-compras-five-nu.vercel.app/',
        },
      ],
    },
    {
      //IMAGEM DO PROJETO
      src: 'assets/icons/projects/calculadora-imc.svg',
      alt: 'Icone de uma balança',
      width: '50%',
      height: '50%',
      title: 'Calculadora IMC',
      description:
        'Este projeto é uma calculadora de IMC (Índice de Massa Corporal) desenvolvida com HTML, CSS e JavaScript. Ele permite que os usuários insiram seu peso e altura para calcular o IMC e, com base no resultado, exibe uma mensagem indicando a classificação de acordo com a tabela de IMC da Organização Mundial da Saúde (OMS).',
      links: [
        {
          name: 'LINK DO PROJETO',
          href: 'https://diegovsc42.github.io/Calculadora-IMC/',
        },
      ],
    },
    {
      //IMAGEM DO PROJETO
      src: 'assets/icons/projects/stock-manager.svg',
      alt: 'Icone de um depósito',
      width: '50%',
      height: '50%',
      title: 'Stock Manager',
      description:
        'Um sistema de gerenciamento de produtos (CRUD) que permite adicionar, visualizar, editar e excluir produtos de um estoque. O projeto foi desenvolvido com Angular e utiliza JSON para simular um backend.',
      links: [
        {
          name: 'LINK DO PROJETO',
          href: 'https://github.com/DiegoVSC42/Stock-Manager',
        },
      ],
    },
  ]);
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
