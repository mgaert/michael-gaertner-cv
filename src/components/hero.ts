import { Localization } from '../utils/localization';

export function createHero(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'hero';
  section.setAttribute('aria-label', 'Hero section');

  const container = document.createElement('div');
  container.className = 'container';

  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  const h1 = document.createElement('h1');
  h1.textContent = localization.t('hero.name');

  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = localization.t('hero.title');

  const expertise = document.createElement('div');
  expertise.className = 'expertise';
  expertise.setAttribute('role', 'list');
  expertise.setAttribute('aria-label', 'Expertise areas');

  for (let i = 1; i <= 6; i++) {
    const item = document.createElement('div');
    item.className = 'expertise-item';
    item.setAttribute('role', 'listitem');
    item.textContent = localization.t(`hero.expertise.${i}`);
    expertise.appendChild(item);
  }

  const actions = document.createElement('div');
  actions.className = 'hero-actions';

  const dlBtn = document.createElement('button');
  dlBtn.className = 'btn-primary';
  dlBtn.textContent = localization.t('hero.cta.download');
  dlBtn.onclick = () => downloadCV(localization);

  const ghBtn = document.createElement('button');
  ghBtn.className = 'btn-secondary';
  ghBtn.textContent = localization.t('hero.cta.github');
  ghBtn.onclick = () => window.open('https://github.com/mgaert', '_blank');

  const ctBtn = document.createElement('button');
  ctBtn.className = 'btn-outline';
  ctBtn.textContent = localization.t('hero.cta.contact');
  ctBtn.onclick = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  actions.appendChild(dlBtn);
  actions.appendChild(ghBtn);
  actions.appendChild(ctBtn);

  heroContent.appendChild(h1);
  heroContent.appendChild(subtitle);
  heroContent.appendChild(expertise);
  heroContent.appendChild(actions);

  container.appendChild(heroContent);
  section.appendChild(container);

  return section;
}

function downloadCV(localization: Localization): void {
  const lang = localization.getLanguage();
  const pdfPath = lang === 'de' 
    ? '/cv/lebenslauf-de.pdf' 
    : '/cv/michael-gaertner-cv-en.pdf';

  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = lang === 'de' ? 'lebenslauf-de.pdf' : 'michael-gaertner-cv-en.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
