export type JobStatus = 'live' | 'example';

export type Job = {
  slug: string;
  title: string;
  spor: 'sosu' | 'bygge';
  niveauKey: string;
  niveauLabel: string;
  omraadeKey: 'fyn';
  omraadeLabel: string;
  type: string;
  status: JobStatus;
  company: string;
  start: string;
  varighed: string;
  beskrivelse: string;
  krav: string[];
};

export const jobs: Job[] = [
  {
    slug: 'sosu-hjaelper-odense-eksempel',
    title: 'SOSU-hjælper til ældrepleje',
    spor: 'sosu',
    niveauKey: 'sosu_hjaelper',
    niveauLabel: 'SOSU-hjælper',
    omraadeKey: 'fyn',
    omraadeLabel: 'Fyn',
    type: 'Vikariat',
    status: 'example',
    company: 'Nordhavn Omsorg ApS',
    start: 'Snarest',
    varighed: '4–8 uger',
    beskrivelse:
      'Eksempel-opslag: hjælp til daglige rutiner og nærvær hos beboere. Vi matcher dig, hvis spor, niveau og timing passer.',
    krav: ['SOSU-hjælper eller under uddannelse', 'Tryghed i omsorg', 'Fleksibel hverdag'],
  },
  {
    slug: 'sosu-assistent-svendborg-eksempel',
    title: 'SOSU-assistent — midlertidig dækning',
    spor: 'sosu',
    niveauKey: 'sosu_assistent',
    niveauLabel: 'SOSU-assistent',
    omraadeKey: 'fyn',
    omraadeLabel: 'Fyn',
    type: 'Vikariat',
    status: 'example',
    company: 'Lillebælt Sundhedshus',
    start: 'Inden 2 uger',
    varighed: 'Projekt / vikariat',
    beskrivelse:
      'Eksempel-opslag: assistent-niveau i sundhedssporet. Ingen rigtig ansøgning her — opret dig, så vi kan matche.',
    krav: ['SOSU-assistent', 'Dokumentation efter aftale', 'Område Fyn'],
  },
  {
    slug: 'bygge-ufaglaert-odense-eksempel',
    title: 'Ufaglært på byggeplads',
    spor: 'bygge',
    niveauKey: 'ufaglaert',
    niveauLabel: 'Ufaglært',
    omraadeKey: 'fyn',
    omraadeLabel: 'Fyn',
    type: 'Vikariat',
    status: 'example',
    company: 'Kystlinjen Entreprise',
    start: 'Med det samme',
    varighed: '2–6 uger',
    beskrivelse:
      'Eksempel-opslag: praktisk hjælp på plads. Fiktiv virksomhed — intet CVR. CTA går til opret, ikke fake ansøgning.',
    krav: ['Klar til fysisk arbejde', 'Sikkerhedssko', 'Møde til tiden'],
  },
  {
    slug: 'bygge-faglaert-middelfart-eksempel',
    title: 'Faglært håndværker til renovering',
    spor: 'bygge',
    niveauKey: 'faglaert',
    niveauLabel: 'Faglært',
    omraadeKey: 'fyn',
    omraadeLabel: 'Fyn',
    type: 'Projekt',
    status: 'example',
    company: 'Brobyggerne Fyn IVS',
    start: 'Efter aftale',
    varighed: 'Projektforløb',
    beskrivelse:
      'Eksempel-opslag: faglært niveau i byggesporet på Fyn. Visning til layout og match-flow.',
    krav: ['Faglært i relevant fag', 'Egen værktøj efter aftale', 'Kørekort er plus'],
  },
];

export function sortJobs(list: Job[]): Job[] {
  return [...list].sort((a, b) => {
    if (a.status === b.status) return a.title.localeCompare(b.title, 'da');
    if (a.status === 'live') return -1;
    if (b.status === 'live') return 1;
    return 0;
  });
}

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
