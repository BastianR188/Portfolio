import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = [
    {
      img: 'angular.png',
      text: 'Angular'
    },
    {
      img: 'typescript.png',
      text: 'TypeScript'
    },
    {
      img: 'javscript.png',
      text: 'JavaScript'
    },
    {
      img: 'html.png',
      text: 'HTML'
    },
    {
      img: 'firebase.png',
      text: 'Firebase'
    },
    {
      img: 'git.png',
      text: 'GIT'
    },
    {
      img: 'css.png',
      text: 'CSS'
    },
    {
      img: 'api.svg',
      text: 'Rest-Api'
    },
    {
      img: 'scrum.png',
      text: 'Scrum'
    },
    {
      img: 'test_automation.png',
      text: 'Material Design'
    },
  ]
}
