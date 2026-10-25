import { Localization, Language } from '../utils/localization';

export function createHeader(localization: Localization, onLanguageChange: (lang: Language) => void): HTMLElement {
  const header = document.createElement('header');
  
  const nav = document.createElement('nav');
  const container = document.createElement('div');
  container.className = 'container nav-inner';

  const brand = document.createElement('a');
  brand.href = '#';
  brand.className = 'nav-brand';
  brand.setAttribute('aria-label', 'Michael Gärtner - Home');

  const brandImg = document.createElement('img');
  brandImg.src = '/assets/portrait.jpg';
  brandImg.alt = 'Michael Gärtner';
  brandImg.className = 'nav-brand-img';
  
  brand.appendChild(brandImg);

  const navMenu = document.createElement('ul');
  navMenu.className = 'nav-menu';
  navMenu.setAttribute('aria-label', 'Main navigation');

  const navItems = [
    { key: 'nav.home', href: '#' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.skills', href: '#skills' },
    { key: 'nav.experience', href: '#experience' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.certifications', href: '#certifications' },
    { key: 'nav.education', href: '#education' },
    { key: 'nav.contact', href: '#contact' },
  ];

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = localization.t(item.key);
    a.setAttribute('data-nav-link', item.key);
    li.appendChild(a);
    navMenu.appendChild(li);
  });

  const navActions = document.createElement('ul');
  navActions.className = 'nav-actions';
  navActions.setAttribute('aria-label', 'Language and actions');

  // Language Toggle
  const langLi = document.createElement('li');
  const langToggle = document.createElement('div');
  langToggle.className = 'lang-toggle';
  langToggle.setAttribute('role', 'group');
  langToggle.setAttribute('aria-label', 'Language selection');

  const currentLang = localization.getLanguage();

  const deBut = document.createElement('button');
  deBut.textContent = 'DE';
  deBut.className = currentLang === 'de' ? 'active' : '';
  deBut.setAttribute('aria-label', 'Deutsche Version');
  deBut.setAttribute('aria-pressed', currentLang === 'de' ? 'true' : 'false');
  deBut.onclick = (e) => {
    e.preventDefault();
    onLanguageChange('de');
  };

  const enBut = document.createElement('button');
  enBut.textContent = 'EN';
  enBut.className = currentLang === 'en' ? 'active' : '';
  enBut.setAttribute('aria-label', 'English version');
  enBut.setAttribute('aria-pressed', currentLang === 'en' ? 'true' : 'false');
  enBut.onclick = (e) => {
    e.preventDefault();
    onLanguageChange('en');
  };

  langToggle.appendChild(deBut);
  langToggle.appendChild(enBut);
  langLi.appendChild(langToggle);
  navActions.appendChild(langLi);

  // Home link in nav actions
  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = 'https://mg-networking.com';
  homeLink.textContent = localization.t('contact.website');
  homeLink.setAttribute('target', '_blank');
  homeLink.setAttribute('rel', 'noopener noreferrer');
  homeLi.appendChild(homeLink);
  navActions.appendChild(homeLi);

  container.appendChild(brand);
  container.appendChild(navMenu);
  container.appendChild(navActions);
  nav.appendChild(container);
  header.appendChild(nav);

  return header;
}
