export interface ProjectTechnology {
  name: string;
  category?: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
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
        title: 'Cross-Platform Mobile Development',
        description: 'Seamless iOS & Android deployment from single Angular codebase using Capacitor, handling platform-specific APIs.',
      },
      {
        title: 'Native API Integration',
        description: 'Integration of camera, photo gallery, QR code scanner, and file system with comprehensive fallbacks and error handling.',
      },
      {
        title: 'Offline-First Architecture',
        description: 'Implemented local storage with Capacitor Preferences API for seamless offline functionality and data sync on reconnection.',
      },
      {
        title: 'Comprehensive Testing Strategy',
        description: '226 unit tests with Karma/Jasmine and E2E automation using Maestro for iOS/Android native testing.',
      },
      {
        title: 'Multi-Language Support',
        description: 'i18n implementation with ngx-translate supporting Deutsch/English with dynamic language switching.',
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
        title: 'Multi-Tenant Architecture',
        description: 'Designed and implemented complete multi-tenant isolation with customer-level data segregation and access control.',
      },
      {
        title: 'Enterprise JWT Security',
        description: 'RSA certificate-based JWT token management with token refresh, expiration handling, and secure credential storage.',
      },
      {
        title: 'NTLM/SPNEGO Email Integration',
        description: 'Integrated SMTP with NTLM authentication for enterprise email systems, handling complex authentication protocols.',
      },
      {
        title: 'Batch QR Code Generation',
        description: 'Implemented high-performance QR code generation with logo embedding, batch processing, and PIL image manipulation.',
      },
      {
        title: 'Database Versioning & Migrations',
        description: 'Setup Alembic migration system with Flask-Migrate for production-safe database schema evolution.',
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
        title: 'Print-Optimized QR Code Generation',
        description: 'Calculated DPI-based scaling for high-quality print output at specific dimensions (1.8cm @ 300 DPI).',
      },
      {
        title: 'Batch Processing Performance',
        description: 'Optimized CSV parsing and QR generation for handling 100+ products efficiently.',
      },
      {
        title: 'Product Metadata Encoding',
        description: 'Serialized complex product information into JSON format embedded within QR code payloads.',
      },
      {
        title: 'Zint CLI Integration',
        description: 'Seamless integration with external Zint command-line tool with proper error handling and output management.',
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
        title: 'IMAP Protocol Implementation',
        description: 'Implemented robust IMAP client for mailbox traversal and secure email retrieval.',
      },
      {
        title: 'IONOS Integration',
        description: 'Integrated with IONOS mailbox infrastructure with proper credential handling.',
      },
      {
        title: 'Offline Storage',
        description: 'Designed efficient .eml file storage format for offline archival and retrieval.',
      },
    ],
    // codeLink: Public repository on GitHub
    codeLink: 'https://github.com/mgaert/backup-emails-imap',
  },
];
