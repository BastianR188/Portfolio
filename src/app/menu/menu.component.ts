import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() lang: string = 'de';
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  constructor(private router: Router, private renderer: Renderer2, private langService: LanguageService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.isOpenLangMenu) {
        if (e.target !== this.toggleButton.nativeElement && e.target !== this.menu.nativeElement) {
          this.isOpenLangMenu = false;
        }
      }
    });
  }
  isExpanded = false;
  isOpenLangMenu = false;
  navLinks = [
    {
      href: '#about-me',
      text: { en: 'About me', de: 'Über mich', no: 'Om meg' },
      width: 'style="width: 99px;"',
    },
    {
      href: '#my-skills',
      text: { en: 'Skills', de: 'Fähigkeiten', no: 'Ferdigheter' },
      width: 'width: 54px;',
    },
    {
      href: '#portfolio',
      text: { en: 'Portfolio', de: 'Portfolio', no: 'Portefølje' },
      width: 'width: 85px;',
    },
    {
      href: '#contact',
      text: { en: 'Contact', de: 'Kontakt', no: 'Kontakt' },
      width: 'width: 91px;',
    },
  ]



  changeLang(lang: string) {
    this.langService.setLanguage(lang);
  }

  toggleLang() {
    this.isOpenLangMenu = !this.isOpenLangMenu;
  }

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
