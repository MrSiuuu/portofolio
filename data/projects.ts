export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  longDescription?: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    title: 'Annuaire Guinea',
    description: 'Plateforme web de référencement des entreprises de Guinée avec avis et messagerie.',
    logo: '/logos/perso.png',
    link: '', // à ajouter si tu as une démo ou repo GitHub
    slug: 'annuaire-guinea',
    longDescription:
      `Développé pour centraliser les entreprises de Guinée, ce projet permet d'accéder à leur profil, de déposer des avis, d'échanger via une messagerie intégrée, et d'évaluer leur présence en ligne.
  
  L'interface est construite en Angular avec un backend Node.js et une base Supabase. Authentification par JWT et rôles distincts (admin, entreprise, utilisateur).`,
    technologies: ['Angular', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'JWT', 'Multer', 'Tailwind CSS']
  },
  {
    title: 'Genesixx Valley',
    description: 'Plateforme IA de génération de CV et lettres pour Campus France et Canada.',
    logo: '/logos/perso.png',
    link: 'https://github.com/MrSiuuu/genesixx-valley', // ou autre lien si privé // ou autre lien si privé
    slug: 'genesixx-valley',
    longDescription:
      `Genesixx Valley est une plateforme intelligente permettant aux étudiants de générer automatiquement un CV et une lettre de motivation adaptés aux démarches Campus France et Canada.
  
  Le projet inclut l'authentification Supabase, la génération IA via OpenAI, l'export PDF avec Puppeteer, et le déploiement complet sur Ubuntu avec Coolify.
  
  J'ai conçu l'architecture, développé le backend, intégré les services IA et géré l'interface multilingue.`,
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'OpenAI API', 'Puppeteer', 'i18n', 'Tailwind CSS', 'Ubuntu', 'Coolify']
  },
  {
    title: 'Virtual Out',
    description: 'Prototype de plateforme de visites virtuelles 3D avec Vue.js et Three.js.',
    logo: '/logos/perso.png',
    link: '', // local uniquement ? ou en ligne ?
    slug: 'virtual-out',
    longDescription:
      `Virtual Out permet de visiter virtuellement des restaurants, hôtels ou lieux publics via des modèles 3D interactifs (.glb).
  
  J'ai intégré Three.js dans Vue.js, organisé l'interface avec Vite, et designé un rendu responsive avec Tailwind CSS. Ce projet est un prototype fonctionnel réalisé pour une démo commerciale.`,
    technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'Three.js', 'GLB Models']
  },

  /*{
    title: 'Driwwwle',
    description:
      'Découvrez des sites web créatifs et des développeurs. Un portail pour partager vos projets.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/MrSiuuu',
    slug: 'driwwwle',
    longDescription: 
      'Driwwwle est une plateforme communautaire pour les développeurs web et designers.\n\n' +
      'Elle permet aux créateurs de partager leurs projets, de recevoir des commentaires et de découvrir de nouvelles inspirations. La plateforme offre également un système de profils personnalisés où les utilisateurs peuvent présenter leur portfolio.\n\n' +
      'Ce projet a été développé pour répondre au besoin de centraliser la découverte de sites web créatifs et innovants.',
    technologies: ['React', 'Next.js', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS']
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/MrSiuuu',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Subtrackt',
    description:
      'Une façon simple et élégante de suivre vos abonnements et économiser de l\'argent.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/MrSiuuu',
    slug: 'subtrackt',
    longDescription: 
      'Subtrackt est une application qui vous aide à garder une trace de tous vos abonnements mensuels et annuels.\n\n' +
      'L\'application calcule automatiquement vos dépenses totales et vous envoie des rappels avant le renouvellement de vos abonnements. Elle propose également des analyses pour vous aider à optimiser vos dépenses.\n\n' +
      'Ce projet a été créé pour résoudre le problème courant de perdre la trace des nombreux services d\'abonnement auxquels nous souscrivons.',
    technologies: ['React', 'Firebase', 'Chart.js', 'Material-UI', 'Redux']
  },
  {
    title: 'Coolify Deployments',
    description:
      'Extension VSCode pour suivre et déployer vos applications Coolify.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/MrSiuuu',
    slug: 'coolify-vscode-extension',
    longDescription: 
      'Cette extension VSCode s\'intègre avec Coolify, une plateforme d\'auto-hébergement open-source.\n\n' +
      'Elle permet aux développeurs de gérer leurs déploiements directement depuis leur éditeur de code, sans avoir à basculer entre différentes interfaces. L\'extension offre des fonctionnalités comme le déploiement en un clic, la visualisation des logs et la gestion des environnements.\n\n' +
      'Ce projet a été développé pour simplifier le workflow des développeurs qui utilisent Coolify pour leurs déploiements.',
    technologies: ['TypeScript', 'VS Code API', 'Coolify API', 'Webpack']
  },
  */
];

