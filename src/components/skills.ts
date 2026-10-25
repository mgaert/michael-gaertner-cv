import { Localization } from '../utils/localization';

interface SkillCategory {
  titleKey: string;
  skillsKey: string;
}

export function createSkills(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.className = 'light';
  section.id = 'skills';
  section.setAttribute('aria-labelledby', 'skills-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'skills-heading';
  h2.textContent = localization.t('skills.title');

  const grid = document.createElement('div');
  grid.className = 'skills-grid';
  grid.setAttribute('role', 'list');

  const categories: SkillCategory[] = [
    { titleKey: 'skills.category.languages', skillsKey: 'skills.languages' },
    { titleKey: 'skills.category.frameworks', skillsKey: 'skills.frameworks' },
    { titleKey: 'skills.category.devops', skillsKey: 'skills.devops' },
    { titleKey: 'skills.category.testing', skillsKey: 'skills.testing' },
    { titleKey: 'skills.category.engineering', skillsKey: 'skills.engineering' },
    { titleKey: 'skills.category.databases', skillsKey: 'skills.databases' },
    { titleKey: 'skills.category.agile', skillsKey: 'skills.agile' },
  ];

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('role', 'listitem');

    const h3 = document.createElement('h3');
    h3.textContent = localization.t(cat.titleKey);

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'skill-tags';

    const skillsText = localization.t(cat.skillsKey);
    const skills = skillsText.split(',').map(s => s.trim());

    skills.forEach(skill => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = skill;
      tagsDiv.appendChild(tag);
    });

    card.appendChild(h3);
    card.appendChild(tagsDiv);
    grid.appendChild(card);
  });

  container.appendChild(h2);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
