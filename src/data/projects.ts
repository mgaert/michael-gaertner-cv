export interface ProjectTechnology {
  name: string;
  category?: string;
}

export interface ProjectChallenge {
  titleKey: string;
  descriptionKey: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  roleKey: string;
  periodKey: string;
  period: string;
  shortDescriptionKey: string;
  technologiesKey: string;
  challengesKey: string;
  technologies: ProjectTechnology[];
  challenges: ProjectChallenge[];
  codeLink?: string;
  demoLink?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'betexapp',
    titleKey: 'project.betexapp.title',
    descriptionKey: 'project.betexapp.description',
    roleKey: 'project.betexapp.role',
    periodKey: 'project.betexapp.period',
    period: '2025-2026',
    shortDescriptionKey: 'project.betexapp.shortDescription',
    technologiesKey: 'project.betexapp.technologies',
    challengesKey: 'project.betexapp.challenges',
    technologies: [
      { name: 'Angular 19.1', category: 'Frontend Framework' },
      { name: 'TypeScript 5.7', category: 'Language' },
      { name: 'Capacitor 7.2', category: 'Mobile' },
      { name: 'Angular Material 19', category: 'UI Framework' },
      { name: 'ngx-translate 16', category: 'i18n' },
      { name: 'RxJS 7.8', category: 'Async Handling' },
      { name: 'ZXing Scanner 19', category: 'QR Code' },
      { name: 'jsPDF 3.0', category: 'PDF Generation' },
      { name: 'Karma/Jasmine', category: 'Testing' },
      { name: 'Capacitor CLI', category: 'Build Tools' },
    ],
    challenges: [
      {
        titleKey: 'project.betexapp.challenge.1.title',
        descriptionKey: 'project.betexapp.challenge.1.description',
      },
      {
        titleKey: 'project.betexapp.challenge.2.title',
        descriptionKey: 'project.betexapp.challenge.2.description',
      },
      {
        titleKey: 'project.betexapp.challenge.3.title',
        descriptionKey: 'project.betexapp.challenge.3.description',
      },
      {
        titleKey: 'project.betexapp.challenge.4.title',
        descriptionKey: 'project.betexapp.challenge.4.description',
      },
      {
        titleKey: 'project.betexapp.challenge.5.title',
        descriptionKey: 'project.betexapp.challenge.5.description',
      },
    ],
    // codeLink: Private repository
  },
  {
    id: 'betexserver',
    titleKey: 'project.betexserver.title',
    descriptionKey: 'project.betexserver.description',
    roleKey: 'project.betexserver.role',
    periodKey: 'project.betexserver.period',
    period: '2025-2026',
    shortDescriptionKey: 'project.betexserver.shortDescription',
    technologiesKey: 'project.betexserver.technologies',
    challengesKey: 'project.betexserver.challenges',
    technologies: [
      { name: 'Python 3', category: 'Language' },
      { name: 'Flask 3.1', category: 'Web Framework' },
      { name: 'SQLAlchemy 2.0', category: 'ORM' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Alembic', category: 'Migrations' },
      { name: 'Flask-JWT-Extended', category: 'Authentication' },
      { name: 'Flask-CORS', category: 'Security' },
      { name: 'Pillow/PIL', category: 'Image Processing' },
      { name: 'Waitress/Gunicorn', category: 'WSGI Server' },
      { name: 'Docker', category: 'Deployment' },
    ],
    challenges: [
      {
        titleKey: 'project.betexserver.challenge.1.title',
        descriptionKey: 'project.betexserver.challenge.1.description',
      },
      {
        titleKey: 'project.betexserver.challenge.2.title',
        descriptionKey: 'project.betexserver.challenge.2.description',
      },
      {
        titleKey: 'project.betexserver.challenge.3.title',
        descriptionKey: 'project.betexserver.challenge.3.description',
      },
      {
        titleKey: 'project.betexserver.challenge.4.title',
        descriptionKey: 'project.betexserver.challenge.4.description',
      },
      {
        titleKey: 'project.betexserver.challenge.5.title',
        descriptionKey: 'project.betexserver.challenge.5.description',
      },
    ],
    // codeLink: Private repository
  },
  {
    id: 'betexqrcodegenerator',
    titleKey: 'project.betexqrcodegenerator.title',
    descriptionKey: 'project.betexqrcodegenerator.description',
    roleKey: 'project.betexqrcodegenerator.role',
    periodKey: 'project.betexqrcodegenerator.period',
    period: '2025-2026',
    shortDescriptionKey: 'project.betexqrcodegenerator.shortDescription',
    technologiesKey: 'project.betexqrcodegenerator.technologies',
    challengesKey: 'project.betexqrcodegenerator.challenges',
    technologies: [
      { name: 'Python 3', category: 'Language' },
      { name: 'Zint QR Engine', category: 'QR Generation' },
      { name: 'Pillow/PIL', category: 'Image Processing' },
      { name: 'CSV Processing', category: 'Data Handling' },
      { name: 'CLI Tools', category: 'Command Line' },
    ],
    challenges: [
      {
        titleKey: 'project.betexqrcodegenerator.challenge.1.title',
        descriptionKey: 'project.betexqrcodegenerator.challenge.1.description',
      },
      {
        titleKey: 'project.betexqrcodegenerator.challenge.2.title',
        descriptionKey: 'project.betexqrcodegenerator.challenge.2.description',
      },
      {
        titleKey: 'project.betexqrcodegenerator.challenge.3.title',
        descriptionKey: 'project.betexqrcodegenerator.challenge.3.description',
      },
      {
        titleKey: 'project.betexqrcodegenerator.challenge.4.title',
        descriptionKey: 'project.betexqrcodegenerator.challenge.4.description',
      },
    ],
    // codeLink: Private repository
  },
  {
    id: 'backup-emails-imap',
    titleKey: 'project.backupemails.title',
    descriptionKey: 'project.backupemails.description',
    roleKey: 'project.backupemails.role',
    periodKey: 'project.backupemails.period',
    period: '2026',
    shortDescriptionKey: 'project.backupemails.shortDescription',
    technologiesKey: 'project.backupemails.technologies',
    challengesKey: 'project.backupemails.challenges',
    technologies: [
      { name: 'Python 3', category: 'Language' },
      { name: 'IMAP Protocol', category: 'Email' },
      { name: 'IONOS API', category: 'Integration' },
      { name: 'File System', category: 'Storage' },
    ],
    challenges: [
      {
        titleKey: 'project.backupemails.challenge.1.title',
        descriptionKey: 'project.backupemails.challenge.1.description',
      },
      {
        titleKey: 'project.backupemails.challenge.2.title',
        descriptionKey: 'project.backupemails.challenge.2.description',
      },
      {
        titleKey: 'project.backupemails.challenge.3.title',
        descriptionKey: 'project.backupemails.challenge.3.description',
      },
    ],
    // codeLink: Public repository on GitHub
    codeLink: 'https://github.com/mgaert/backup-emails-imap',
  },
];
