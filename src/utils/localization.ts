export type Language = 'de' | 'en';

export interface LocalizationStrings {
  [key: string]: string;
}

export class Localization {
  private currentLanguage: Language = 'de';
  private strings: Map<Language, LocalizationStrings> = new Map();

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang && (storedLang === 'de' || storedLang === 'en')) {
      this.currentLanguage = storedLang;
    } else {
      const browserLang = navigator.language.split('-')[0];
      this.currentLanguage = (browserLang === 'en' ? 'en' : 'de') as Language;
    }
  }

  public setLanguage(lang: Language): void {
    if (lang === 'de' || lang === 'en') {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
    }
  }

  public getLanguage(): Language {
    return this.currentLanguage;
  }

  public registerStrings(lang: Language, strings: LocalizationStrings): void {
    this.strings.set(lang, { ...this.strings.get(lang), ...strings });
  }

  public t(key: string, defaultValue?: string): string {
    const langStrings = this.strings.get(this.currentLanguage);
    return langStrings?.[key] ?? defaultValue ?? key;
  }

  public has(key: string): boolean {
    const langStrings = this.strings.get(this.currentLanguage);
    return langStrings ? key in langStrings : false;
  }
}

export const localization = new Localization();
