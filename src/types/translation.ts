export type ProjectKey = "refakt-erp" | "stox" | "sim-upa";

type CaseStudy = {
  problem: string;
  solution: string;
  challenges: string[];
  technicalDecisions: string[];
  architecture: string[];
  results: string[];
  futureImprovements: string[];
};

export type ProjectItem = {
  key: ProjectKey;
  title: string;
  desc: string;
  problem: string;
  caseStudy: CaseStudy;
};

type SkillCategory = {
  cat: string;
  items: string[];
};

export type Translation = {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    cta: string;
    cta2: string;
    downloadCV: string;
    cvFile: string;
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    differentials: string[];
  };
  projects: {
    label: string;
    heading: string;
    featuredBadge: string;
    inProgress: string;
    inProduction: string;
    done: string;
    onRequest: string;
    viewProject: string;
    viewCode: string;
    caseButton: string;
    caseStudyLabel: string;
    problemLabel: string;
    solutionLabel: string;
    challengesLabel: string;
    decisionsLabel: string;
    architectureLabel: string;
    resultsLabel: string;
    futureLabel: string;
    items: ProjectItem[];
  };
  mindset: {
    label: string;
    heading: string;
    cards: { title: string; desc: string }[];
  };
  behindCode: {
    label: string;
    heading: string;
    items: string[];
  };
  studying: {
    label: string;
    heading: string;
    topics: string[];
  };
  skills: {
    heading: string;
    sub: string;
    categories: SkillCategory[];
  };
  contact: {
    label: string;
    heading: string;
    sub: string;
    email: string;
    or: string;
  };
};
