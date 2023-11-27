import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router: Router) { }
  isExpanded = false;
  navLinks = [
    {
      href: '#about-me',
      text: 'About me',
      width: 'style="width: 99px;"',
    },
    {
      href: '#my-skills',
      text: 'Skills',
      width: 'width: 54px;',
    },
    {
      href: '#portfolio',
      text: 'Portfolio',
      width: 'width: 85px;',
    },
    {
      href: '#contact',
      text: 'Contact',
      width: 'width: 91px;',
    },
  ]

  toggleWin() {
    let navWindow: any = document.getElementById('nav_window');
    if (this.isExpanded) {
      navWindow.style.width = '0'; // Set the width to a specific value when not expanded
      document.body.style.overflow = 'auto';
    } else {
      navWindow.style.width = '100vw'; // Set the width to 100% viewport width when expanded
      document.body.style.overflow = 'hidden';
    }
    this.isExpanded = !this.isExpanded; // Toggle the state for the next click
  }
  openPage() {

      this.router.navigateByUrl('');
    
  }
}
