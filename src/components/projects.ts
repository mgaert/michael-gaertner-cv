import { Localization } from '../utils/localization';
import { projects } from '../data/projects';

export function createProjects(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.className = 'light';
  section.id = 'projects';
  section.setAttribute('aria-labelledby', 'projects-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'projects-heading';
  h2.textContent = localization.t('projects.title');

  const grid = document.createElement('div');
  grid.className = 'projects-grid';

  // Show only top 3 Betex projects (exclude backup-emails-imap)
  const topProjects = projects.slice(0, 3);

  topProjects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Title
    const title = document.createElement('h3');
    title.textContent = localization.t(project.titleKey);
    title.className = 'project-title';

    // Role & Period
    const meta = document.createElement('div');
    meta.className = 'project-meta';
    meta.style.display = 'flex';
    meta.style.justifyContent = 'space-between';
    meta.style.marginBottom = 'var(--spacing-md)';
    meta.style.fontSize = 'var(--font-size-sm)';
    meta.style.color = 'var(--color-text-muted)';

    const role = document.createElement('span');
    role.textContent = localization.t(project.roleKey);
    role.style.fontWeight = '500';
    role.style.color = 'var(--color-primary)';

    const period = document.createElement('span');
    period.textContent = project.period;

    meta.appendChild(role);
    meta.appendChild(period);

    // Description
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = localization.t(project.descriptionKey);
    description.style.marginBottom = 'var(--spacing-lg)';
    description.style.lineHeight = '1.6';
    description.style.color = 'var(--color-text)';

    // Technologies
    const techSection = document.createElement('div');
    techSection.style.marginBottom = 'var(--spacing-lg)';

    const techLabel = document.createElement('p');
    techLabel.style.fontSize = 'var(--font-size-sm)';
    techLabel.style.fontWeight = '600';
    techLabel.style.marginBottom = 'var(--spacing-sm)';
    techLabel.style.textTransform = 'uppercase';
    techLabel.style.letterSpacing = '0.05em';
    techLabel.style.color = 'var(--color-primary)';
    techLabel.textContent = 'Technologies';

    const techTags = document.createElement('div');
    techTags.style.display = 'flex';
    techTags.style.flexWrap = 'wrap';
    techTags.style.gap = 'var(--spacing-sm)';

    project.technologies.forEach((tech) => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.style.display = 'inline-block';
      tag.style.padding = '0.25rem 0.75rem';
      tag.style.backgroundColor = 'var(--color-secondary)';
      tag.style.color = 'white';
      tag.style.borderRadius = 'var(--border-radius-sm)';
      tag.style.fontSize = 'var(--font-size-xs)';
      tag.style.fontWeight = '500';
      tag.textContent = tech.name;
      techTags.appendChild(tag);
    });

    techSection.appendChild(techLabel);
    techSection.appendChild(techTags);

    // Challenges
    const challengeSection = document.createElement('div');
    challengeSection.style.marginBottom = 'var(--spacing-lg)';

    const challengeLabel = document.createElement('p');
    challengeLabel.style.fontSize = 'var(--font-size-sm)';
    challengeLabel.style.fontWeight = '600';
    challengeLabel.style.marginBottom = 'var(--spacing-sm)';
    challengeLabel.style.textTransform = 'uppercase';
    challengeLabel.style.letterSpacing = '0.05em';
    challengeLabel.style.color = 'var(--color-primary)';
    challengeLabel.textContent = 'Technical Challenges';

    const challengeList = document.createElement('ul');
    challengeList.style.paddingLeft = 'var(--spacing-lg)';
    challengeList.style.fontSize = 'var(--font-size-sm)';
    challengeList.style.lineHeight = '1.6';

    project.challenges.slice(0, 4).forEach((challenge) => {
      const li = document.createElement('li');
      li.style.marginBottom = 'var(--spacing-sm)';
      li.style.color = 'var(--color-text)';

      const strong = document.createElement('strong');
      strong.textContent = challenge.title + ': ';

      li.appendChild(strong);
      li.appendChild(document.createTextNode(challenge.description));
      challengeList.appendChild(li);
    });

    challengeSection.appendChild(challengeLabel);
    challengeSection.appendChild(challengeList);

    // Links
    const links = document.createElement('div');
    links.className = 'project-links';
    links.style.display = 'flex';
    links.style.gap = 'var(--spacing-md)';
    links.style.marginTop = 'var(--spacing-lg)';
    links.style.paddingTop = 'var(--spacing-lg)';
    links.style.borderTop = '1px solid var(--color-border)';

    if (project.codeLink) {
      const codeLink = document.createElement('a');
      codeLink.href = project.codeLink;
      codeLink.target = '_blank';
      codeLink.rel = 'noopener noreferrer';
      codeLink.className = 'btn-link';
      codeLink.style.display = 'inline-flex';
      codeLink.style.alignItems = 'center';
      codeLink.style.padding = '0.5rem 1rem';
      codeLink.style.backgroundColor = 'var(--color-primary)';
      codeLink.style.color = 'white';
      codeLink.style.textDecoration = 'none';
      codeLink.style.borderRadius = 'var(--border-radius-sm)';
      codeLink.style.fontSize = 'var(--font-size-sm)';
      codeLink.style.fontWeight = '500';
      codeLink.style.transition = 'background-color 0.2s';
      codeLink.textContent = '→ View Code on GitHub';

      codeLink.addEventListener('mouseenter', () => {
        codeLink.style.backgroundColor = 'var(--color-primary-dark)';
      });

      codeLink.addEventListener('mouseleave', () => {
        codeLink.style.backgroundColor = 'var(--color-primary)';
      });

      links.appendChild(codeLink);
    } else {
      const privateNote = document.createElement('p');
      privateNote.style.fontSize = 'var(--font-size-sm)';
      privateNote.style.color = 'var(--color-text-muted)';
      privateNote.style.fontStyle = 'italic';
      privateNote.style.margin = '0';
      privateNote.textContent = '🔒 Private Repository';
      links.appendChild(privateNote);
    }

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
    card.appendChild(techSection);
    card.appendChild(challengeSection);
    card.appendChild(links);

    grid.appendChild(card);
  });

  container.appendChild(h2);
  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
