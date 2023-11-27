import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) { }
  openURL(ur: string) {
    window.open(ur);
  }
  openImprint() {
    this.router.navigateByUrl('imprint');
  }
  openPage() {
    this.router.navigateByUrl('');
}
}
