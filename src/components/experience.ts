import { Localization } from '../utils/localization';

interface Experience {
  positionKey: string;
  companyKey: string;
  locationKey: string;
  periodKey: string;
  tasksKey: string;
  programKey?: string;
}

export function createExperience(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.id = 'experience';
  section.setAttribute('aria-labelledby', 'experience-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'experience-heading';
  h2.textContent = localization.t('experience.title');

  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  timeline.setAttribute('role', 'list');

  const experiences: Experience[] = [
    {
      positionKey: 'experience.daa.position',
      companyKey: 'experience.daa.company',
      locationKey: 'experience.daa.location',
      periodKey: 'experience.daa.period',
      tasksKey: 'experience.daa.tasks',
      programKey: 'experience.daa.program',
    },
    {
      positionKey: 'experience.axians.position',
      companyKey: 'experience.axians.company',
      locationKey: 'experience.axians.location',
      periodKey: 'experience.axians.period',
      tasksKey: 'experience.axians.tasks',
    },
    {
      positionKey: 'experience.mgnw2.position',
      companyKey: 'experience.mgnw2.company',
      locationKey: 'experience.mgnw2.location',
      periodKey: 'experience.mgnw2.period',
      tasksKey: 'experience.mgnw2.tasks',
    },
    {
      positionKey: 'experience.leuze.position',
      companyKey: 'experience.leuze.company',
      locationKey: 'experience.leuze.location',
      periodKey: 'experience.leuze.period',
      tasksKey: 'experience.leuze.tasks',
    },
    {
      positionKey: 'experience.mgnw1.position',
      companyKey: 'experience.mgnw1.company',
      locationKey: 'experience.mgnw1.location',
      periodKey: 'experience.mgnw1.period',
      tasksKey: 'experience.mgnw1.tasks',
    },
  ];

  experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('role', 'listitem');

    const date = document.createElement('div');
    date.className = 'timeline-date';
    date.textContent = localization.t(exp.periodKey);

    const title = document.createElement('h3');
    title.className = 'timeline-title';
    title.textContent = localization.t(exp.positionKey);

    const subtitle = document.createElement('p');
    subtitle.className = 'timeline-subtitle';
    subtitle.textContent = localization.t(exp.companyKey);

    const description = document.createElement('p');
    description.className = 'timeline-description';
    description.textContent = localization.t(exp.tasksKey);

    const location = document.createElement('p');
    location.className = 'timeline-location';
    location.textContent = localization.t(exp.locationKey);

    item.appendChild(date);
    item.appendChild(title);
    item.appendChild(subtitle);

    if (exp.programKey) {
      const program = document.createElement('p');
      program.className = 'timeline-subtitle';
      program.textContent = localization.t(exp.programKey);
      item.appendChild(program);
    }

    item.appendChild(description);
    item.appendChild(location);
    timeline.appendChild(item);
  });

  container.appendChild(h2);
  container.appendChild(timeline);
  section.appendChild(container);

  return section;
}
