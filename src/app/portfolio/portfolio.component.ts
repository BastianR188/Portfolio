import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})



export class PortfolioComponent {




  projectsBtn = ['All', 'Angular', 'React', 'Vue', 'JavaScript'];

  projects = [
    {
      title: 'DABubble',
      types: 'Angular | Firebase | TypeScript | SCSS',
      img: './assets/img/dabubble2.jpg',
      description: 'DABubble is a versatile chat application powered by Firebase. Sign in effortlessly, even with your Google account, and dive into interactive conversations. Create and join channels, invite users, chat publicly or privately, and start threads. DABubble offers a seamless, intuitive chatting experience tailored to your communication needs.',
      ref: 'https://bastian-riedmann.de/bubble/index.html',
      github: 'http://github.com/BastianR188/DABubble',
    },
    {
      title: 'Join',
      types: 'HTML | CSS | JavaScript',
      img: './assets/img/join2.png',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      ref: 'https://bastian-riedmann.de/join/index.html',
      github: 'https://github.com/BastianR188/Join',
    },
    {
      title: 'Stock-Dashboard',
      types: 'Vue | JavaScript | CSS',
      img: './assets/img/stock2.jpg',
      description: 'Stock-Dashboard provides real-time prices and key metrics for the worlds seven largest companies. Make informed decisions and optimize your investments with our user-friendly dashboard!',
      ref: 'https://bastian-riedmann.de/stock/index.html',
      github: 'https://github.com/BastianR188/vuejs-stock-dashboard',
    },
    {
      title: 'Sharkie',
      types: 'JavaScript | HTML | CSS',
      img: './assets/img/sharki2.jpg',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help shakrie to find coins and poison bottles to fight against the killer whale.',
      ref: 'https://bastian-riedmann.de/sharki/index.html',
      github: 'https://github.com/BastianR188/Sharki',
    },
    {
      title: 'Hello-Weather',
      types: 'React | JavaScript | CSS',
      img: './assets/img/helloweather2.jpg',
      description: 'Discover the weather anywhere in the world with the Hello-Weather app! Simply enter a location or coordinates to access real-time weather data and a comprehensive weekly forecast at your fingertips.',
      ref: 'https://bastian-riedmann.de/hello-weather/index.html',
      github: 'https://github.com/BastianR188/helloweather'
    },
    {
      title: 'Memo-Flow',
      types: 'Angular | Firebase | TypeScript | SCSS',
      img: './assets/img/memoflow2.jpg',
      description: 'Discover the Memo-Flow app, your perfect solution for creating simple notes and checklists. With the ability to upload images and effortlessly organize your thoughts, the app offers a user-friendly interface. Your data is automatically stored offline in the browser, while you also have the option to securely save everything in the cloud for easy access anytime. Make capturing your ideas easier and more flexible than ever before!',
      ref: 'https://bastian-riedmann.de/memo-flow/index.html',
      github: 'https://github.com/BastianR188/Memo-Flow',
    },
    // {
    //   title: 'Simple-CRM',
    //   types: 'Angular | TypeScript | SCSS',
    //   img: './assets/img/crm2.jpg',
    //   description: 'A Simple Customer Relationship Management.',
    //   ref: 'https://bastian-riedmann.de/simple-crm/index.html',
    //   github: 'https://github.com/BastianR188/Simple-CRM',
    // },
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
