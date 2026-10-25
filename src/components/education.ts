import { Localization } from '../utils/localization';

interface EducationItem {
  titleKey: string;
  schoolKey: string;
  periodKey: string;
  focusKey?: string;
}

export function createEducation(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.className = 'light';
  section.id = 'education';
  section.setAttribute('aria-labelledby', 'education-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'education-heading';
  h2.textContent = localization.t('education.title');

  const grid = document.createElement('div');
  grid.className = 'education-grid';
  grid.setAttribute('role', 'list');

  const items: EducationItem[] = [
    {
      titleKey: 'edu.diploma',
      schoolKey: 'edu.diploma.school',
      periodKey: 'edu.diploma.period',
    },
    {
      titleKey: 'edu.scrum',
      schoolKey: 'edu.scrum.school',
      periodKey: 'edu.scrum.period',
    },
    {
      titleKey: 'edu.abitur',
      schoolKey: 'edu.abitur.school',
      periodKey: 'edu.abitur.period',
      focusKey: 'edu.abitur.focus',
    },
  ];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'education-card';
    card.setAttribute('role', 'listitem');

    const h3 = document.createElement('h3');
    h3.textContent = localization.t(item.titleKey);

    const institution = document.createElement('p');
    institution.className = 'education-institution';
    institution.textContent = localization.t(item.schoolKey);

    const date = document.createElement('p');
    date.className = 'education-date';
    date.textContent = localization.t(item.periodKey);

    card.appendChild(h3);
    card.appendChild(institution);
    card.appendChild(date);

    if (item.focusKey) {
      const details = document.createElement('p');
      details.className = 'education-details';
      details.textContent = localization.t(item.focusKey);
      card.appendChild(details);
    }

    grid.appendChild(card);
  });

  container.appendChild(h2);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
