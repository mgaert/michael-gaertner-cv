import { Localization } from '../utils/localization';

interface Certification {
  titleKey: string;
  yearKey: string;
}

export function createCertifications(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.id = 'certifications';
  section.setAttribute('aria-labelledby', 'certifications-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'certifications-heading';
  h2.textContent = localization.t('certifications.title');

  const grid = document.createElement('div');
  grid.className = 'certifications-grid';
  grid.setAttribute('role', 'list');

  const certs: Certification[] = [
    { titleKey: 'cert.psm2', yearKey: 'cert.psm2.year' },
    { titleKey: 'cert.psm1', yearKey: 'cert.psm1.year' },
    { titleKey: 'cert.istqb', yearKey: 'cert.istqb.year' },
  ];

  certs.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.setAttribute('role', 'listitem');

    const icon = document.createElement('div');
    icon.className = 'cert-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '🏆';

    const title = document.createElement('h3');
    title.className = 'cert-title';
    title.textContent = localization.t(cert.titleKey);

    const meta = document.createElement('p');
    meta.className = 'cert-meta';
    meta.textContent = localization.t(cert.yearKey);

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(meta);
    grid.appendChild(card);
  });

  container.appendChild(h2);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
