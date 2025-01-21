import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Icone de conhecimento de Typescript',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Icone de conhecimento de Spring',
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento de Java',
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Icone de conhecimento de Postgresql',
    },
    {
      src: 'assets/icons/knowledge/postman.svg',
      alt: 'Icone de conhecimento de Postman',
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Icone de conhecimento de git',
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Icone de conhecimento de github',
    },
  ]);
}
