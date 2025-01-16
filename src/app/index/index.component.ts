import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit, OnDestroy {
  lang: string = 'no'
  private langSubscription!: Subscription;
  constructor(private langService: LanguageService) { }
  ngOnInit() {
    this.langSubscription = this.langService.lang$.subscribe(
      lang => this.lang = lang
    );
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
