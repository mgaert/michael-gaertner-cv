import { Localization } from '../utils/localization';

export function createContact(localization: Localization): HTMLElement {
  const section = document.createElement('section');
  section.className = 'contact-section';
  section.id = 'contact';
  section.setAttribute('aria-labelledby', 'contact-heading');

  const container = document.createElement('div');
  container.className = 'container';

  const h2 = document.createElement('h2');
  h2.id = 'contact-heading';
  h2.textContent = localization.t('contact.title');

  const content = document.createElement('div');
  content.className = 'contact-content';

  const description = document.createElement('p');
  description.className = 'contact-description';
  description.textContent = localization.t('contact.description');

  const emailDiv = document.createElement('div');
  emailDiv.className = 'contact-email';
  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:michael@mg-networking.de';
  emailLink.textContent = localization.t('contact.email');
  emailDiv.appendChild(emailLink);

  const links = document.createElement('div');
  links.className = 'contact-links';
  links.setAttribute('role', 'list');

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/mgaert';
  githubLink.target = '_blank';
  githubLink.rel = 'noopener noreferrer';
  githubLink.textContent = localization.t('contact.github');
  githubLink.setAttribute('role', 'listitem');

  const websiteLink = document.createElement('a');
  websiteLink.href = 'https://mg-networking.com';
  websiteLink.target = '_blank';
  websiteLink.rel = 'noopener noreferrer';
  websiteLink.textContent = localization.t('contact.website');
  websiteLink.setAttribute('role', 'listitem');

  links.appendChild(githubLink);
  links.appendChild(websiteLink);

  content.appendChild(description);
  content.appendChild(emailDiv);
  content.appendChild(links);

  container.appendChild(h2);
  container.appendChild(content);
  section.appendChild(container);

  return section;
}
