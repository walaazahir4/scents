import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { Language, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateHelper {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  currentLanguage = signal<Language>((localStorage.getItem('language') as Language) || 'en');

  constructor() {
    const lang = this.currentLanguage();

    this.translate.use(lang);
    this.setDirection(lang);
  }

  switchLanguage(lang: Language) {
    this.currentLanguage.set(lang);

    this.translate.use(lang);

    localStorage.setItem('language', lang);

    this.setDirection(lang);
  }

  private setDirection(lang: Language) {
    this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.lang = lang;
  }
}
