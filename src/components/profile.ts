import { Localization } from '../utils/localization';

export function createProfile(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.id = 'about';
  section.setAttribute('aria-labelledby', 'profile-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'profile-heading';
  h2.textContent = localization.t('profile.title');

  const content = document.createElement('div');
  content.className = 'profile-content';

  const p = document.createElement('p');
  p.textContent = localization.t('profile.description');

  content.appendChild(p);
  container.appendChild(h2);
  container.appendChild(content);
  section.appendChild(container);

  return section;
}
