import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('de');
  lang$ = this.langSubject.asObservable();

  setLanguage(lang: string) {
    this.langSubject.next(lang);
    console.log('set lang: ' + lang)
  }
}
