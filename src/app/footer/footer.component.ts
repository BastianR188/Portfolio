import { Component } from '@angular/core';
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openURL(ur: string) {
    window.open(ur);
  }
}
