import { Localization } from '../utils/localization';

export function createFooter(localization: Localization): HTMLElement {
  const footer = document.createElement('footer');

  const container = document.createElement('div');
  container.className = 'container';

  const copyright = document.createElement('p');
  copyright.textContent = localization.t('footer.copyright');

  const builtWith = document.createElement('p');
  builtWith.textContent = localization.t('footer.builtWith');

  container.appendChild(copyright);
  container.appendChild(builtWith);
  footer.appendChild(container);

  return footer;
}
