import { Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})



export class PortfolioComponent {




  projectsBtn = ['All', 'Angular', 'JavaScript'];

  projects = [
    {
      title: 'Join',
      types: 'HTML | CSS | JavaScript',
      img: './assets/img/join2.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      ref: 'https://bastian-riedmann.developerakademie.net/join/index.html',
      github: 'https://github.com/BastianR188/Join',
    },
    {
      title: 'Sharkie',
      types: 'JavaScript | HTML | CSS',
      img: './assets/img/sharki2.jpg',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help shakrie to find coins and poison bottles to fight against the killer whale.',
      ref: 'https://bastian-riedmann.developerakademie.net/Sharki/index.html',
      github: 'https://github.com/BastianR188/Sharki',
    },
    {
      title: 'Simple-CRM',
      types: 'Angular | TypeScript | SCSS',
      img: './assets/img/crm2.jpg',
      description: 'A Simple Customer Relationship Management.',
      ref: 'https://bastian-riedmann.developerakademie.net/simple-crm/index.html',
      github: 'https://github.com/BastianR188/Simple-CRM',
    },
    {
      title: 'Portfolio',
      types: 'Angular | TypeScript | SCSS',
      img: './assets/img/portfolio.png',
      description: 'My portfolio showcases my front-end development projects, highlighting my coding skills, UI/UX sensibilities, and professional personality to demonstrate my expertise and experience in creating beautiful and functional web interfaces.',
      ref: '#header',
      github: 'https://github.com/BastianR188/Portfolio',
    },
  ];

  selectedProjects = this.projects;

  openURL(ur: string) {
    if (ur) {
      window.open(ur);
    } else {
      alert('I apologize, but this project is still in progress and not yet completed.');
    }
  }

  filterProjects(type: string) {
    this.selectedProjects = [];

    if (type !== 'All') {
      this.selectedProjects = this.projects.filter((project) =>
        project.types.split(' | ').includes(type)
      );
    } else {
      this.selectedProjects = this.projects;
    }
  }
}
