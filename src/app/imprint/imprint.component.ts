import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit() {
    this.scrollToElement();
  }

  scrollToElement() {
    const element = this.elementRef.nativeElement.querySelector('#header');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openPage() {
    this.router.navigateByUrl('');
}
}


