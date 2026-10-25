import { localization, Language } from './utils/localization';
import { deStrings } from './data/de';
import { enStrings } from './data/en';
import { createHeader } from './components/header';
import { createHero } from './components/hero';
import { createProfile } from './components/profile';
import { createSkills } from './components/skills';
import { createExperience } from './components/experience';
import { createProjects } from './components/projects';
import { createCertifications } from './components/certifications';
import { createEducation } from './components/education';
import { createContact } from './components/contact';
import { createFooter } from './components/footer';

// Initialize localization
localization.registerStrings('de', deStrings);
localization.registerStrings('en', enStrings);

// Determine initial language from URL or localization
const path = window.location.pathname;
let initialLang: Language = 'de';

if (path.includes('/en/')) {
  initialLang = 'en';
  localization.setLanguage('en');
} else if (path.includes('/de/')) {
  initialLang = 'de';
  localization.setLanguage('de');
}

// Build the application
function buildApp(lang: Language): void {
  localization.setLanguage(lang);

  const app = document.getElementById('app');
  if (!app) return;

  // Clear previous content
  app.innerHTML = '';

  // Update HTML lang and meta tags
  document.documentElement.lang = lang === 'de' ? 'de' : 'en';
  document.title = localization.t('seo.title');

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', localization.t('seo.description'));
  }

  // Create components
  const header = createHeader(localization, handleLanguageChange);
  const hero = createHero(localization);
  const profile = createProfile(localization);
  const skills = createSkills(localization);
  const experience = createExperience(localization);
  const projects = createProjects(localization);
  const certifications = createCertifications(localization);
  const education = createEducation(localization);
  const contact = createContact(localization);
  const footer = createFooter(localization);

  // Append to app
  app.appendChild(header);

  const main = document.createElement('main');
  main.id = 'main-content';
  main.appendChild(hero);
  main.appendChild(profile);
  main.appendChild(skills);
  main.appendChild(experience);
  main.appendChild(projects);
  main.appendChild(certifications);
  main.appendChild(education);
  main.appendChild(contact);

  app.appendChild(main);
  app.appendChild(footer);

  // Setup smooth scroll navigation
  setupNavigation();

  // Update language toggle in header
  updateLanguageToggle(lang);
}

function handleLanguageChange(lang: Language): void {
  // Update URL without page reload
  const newPath = lang === 'de' ? '/de/' : '/en/';
  window.history.replaceState({}, '', newPath);

  // Rebuild app
  buildApp(lang);
}

function setupNavigation(): void {
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

function updateLanguageToggle(lang: Language): void {
  const langButtons = document.querySelectorAll('.lang-toggle button');
  langButtons.forEach(btn => {
    const button = btn as HTMLButtonElement;
    if (lang === 'de' && button.textContent === 'DE') {
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    } else if (lang === 'en' && button.textContent === 'EN') {
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    }
  });
}

// Initialize app
buildApp(initialLang);

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  const lang = path.includes('/en/') ? 'en' : 'de';
  buildApp(lang);
});
