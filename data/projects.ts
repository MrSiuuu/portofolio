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
    title: 'LPDG – Lieux & Partage des Générations',
    description: 'Plateforme communautaire avec authentification Supabase et interface moderne en DaisyUI.',
    logo: '/logos/perso.png',
    link: 'https://github.com/MrSiuuu/LPDG',
    slug: 'lpdg',
    longDescription: `LPDG est une plateforme communautaire permettant de publier, commenter et aimer des articles ou des lieux.
  
  Elle intègre :
  - un système d’authentification via Supabase,
  - la gestion des utilisateurs et des profils (édition, avatar),
  - un éditeur de texte riche pour les publications,
  - la possibilité d’ajouter des lieux, d’y associer des images et de les commenter.
  
  Seuls les **blogueurs** peuvent publier des articles, tandis que les **contributeurs** peuvent uniquement proposer des lieux.
  
  L’interface utilise Vue.js avec Vite, stylisée avec Tailwind CSS et DaisyUI pour des composants rapides, accessibles et responsives. Le backend Express fournit une API REST complète pour gérer toutes les entités.
  
  Ce projet montre ma capacité à concevoir une application fullstack complète avec des rôles bien définis et une UI moderne.`,
    technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express', 'Supabase', 'REST API']
  }, 

  {
    title: 'Jobiz',
    description: 'Plateforme de gestion d’offres d’emploi développée avec Symfony, EasyAdmin et MySQL.',
    logo: '/logos/perso.png',
    link: 'https://github.com/MrSiuuu/jobiz',
    slug: 'jobiz',
    longDescription: `Jobiz est une application web développée avec Symfony 6.4 pour centraliser la gestion d’offres d’emploi et permettre aux administrateurs de gérer les utilisateurs, les annonces, et les candidatures via une interface EasyAdmin.
  
  L’interface permet :
  - la création/modification/suppression d’offres d’emploi,
  - la gestion des rôles (candidats, recruteurs, super admin),
  - un affichage clair et moderne grâce à Tailwind CSS.
  
  Le projet utilise MySQL comme base de données via Doctrine ORM, et l’ensemble est conteneurisé avec Docker pour faciliter le déploiement. J’ai conçu et développé cette application seul, en respectant les bonnes pratiques Symfony.`,
    technologies: ['Symfony 6.4', 'Doctrine ORM', 'MySQL', 'EasyAdmin', 'Tailwind CSS', 'Docker', 'Twig']
  }, 

  {
    title: 'All Game',
    description: 'Application Symfony de gestion de jeux vidéo avec interface admin EasyAdmin.',
    logo: '/logos/perso.png',
    link: 'https://github.com/MrSiuuu/All_game',
    slug: 'all-game',
    longDescription: `All Game est une application web développée avec Symfony 6.4, permettant de gérer un catalogue de jeux vidéo via une interface administrateur complète.
  
  L'interface d'administration est construite avec EasyAdmin, ce qui permet la création, modification et suppression rapide de jeux.
  
  Le projet utilise Doctrine ORM pour la gestion des entités, une base de données PostgreSQL, et est entièrement stylisé avec Tailwind CSS. Il est conçu pour être facilement déployé grâce à Docker Compose.
  
  Ce projet m’a permis de consolider mes compétences Symfony, notamment sur les bundles, la configuration multi-environnement et la gestion CRUD.`,
    technologies: ['Symfony 6.4', 'Doctrine ORM', 'EasyAdmin', 'PostgreSQL', 'Tailwind CSS', 'Docker']
  }, 

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
    title: 'Citation App',
    description: 'Application web de gestion de citations avec Vue.js et Express.',
    logo: '/logos/perso.png',
    link: 'https://citation-production.up.railway.app/',
    slug: 'citation-app',
    longDescription: `Citation App est une application web simple et élégante qui permet d’afficher, d’ajouter et de supprimer des citations inspirantes.
  
  Le frontend est développé en Vue.js avec Vite et Tailwind CSS. Le backend repose sur Express et stocke les données dans un fichier JSON.
  
  L’application est dockerisée et déployée sur Railway. Elle inclut un routeur côté client, une gestion des erreurs, et une interface intuitive.
  
  Ce projet montre ma capacité à créer des applications fullstack simples, bien structurées, avec un déploiement Docker prêt pour la production.
  
  🔗 Démo : [citation-production.up.railway.app](https://citation-production.up.railway.app/)
  📦 Code source : [github.com/MrSiuuu/citation](https://github.com/MrSiuuu/citation)`,
    technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Docker', 'Railway']
  }, 

  {
    title: 'Microservices E-commerce (Projet en équipe)',
    description: 'Architecture microservices complète pour une plateforme e-commerce avec API Gateway.',
    logo: '/logos/perso.png',
    link: 'https://github.com/MrSiuuu/microservice-docker-nodejs',
    slug: 'microservices-ecommerce',
    longDescription: `Ce projet collaboratif met en place une architecture microservices pour simuler une plateforme e-commerce complète.
  
  Chaque fonctionnalité (authentification, panier, gestion des produits, tokens, historique de transactions) est décomposée en service indépendant, chacun avec sa propre technologie : Node.js/TypeScript, Python ou PHP.
  
  Les services sont orchestrés à travers Docker, et les appels sont centralisés via un API Gateway développé en Node.js. Le tout est conçu pour la scalabilité, la maintenance et les déploiements indépendants.
  
  J'ai participé activement à la conception et au développement de certains services ainsi qu'à l'intégration du système via Docker.`,
    technologies: ['Node.js', 'Express', 'TypeScript', 'Python', 'PHP', 'Docker', 'API Gateway', 'Microservices']
  },
  {
    title: 'IT Game – Analyseur réseau automatisé',
    description: 'Outil d’analyse PCAP intelligent avec enrichissement VirusTotal, MITRE ATT&CK et dashboard interactif.',
    logo: '/logos/perso.png',
    link: 'https://github.com/MrSiuuu/it_game',
    slug: 'it-game-analyseur',
    longDescription: `IT Game est un outil complet d’analyse réseau, développé pour automatiser la détection de comportements suspects dans des fichiers PCAP.
  
  Il combine plusieurs technologies :
  - PyShark pour l’analyse réseau locale,
  - VirusTotal pour l’enrichissement des hashs,
  - Framework MITRE ATT&CK pour repérer des techniques d’attaque connues,
  - Dashboard interactif via Streamlit pour visualiser les anomalies.
  
  Le script est capable d’extraire l’IP, le MAC, l’utilisateur Windows infecté, et d’envoyer les résultats vers une API dans un contexte de challenge ou de CTF.
  
  Ce projet a été réalisé dans un cadre pédagogique, avec un haut niveau d’automatisation et de rigueur en cybersécurité.`,
    technologies: ['Python', 'PyShark', 'Streamlit', 'VirusTotal API', 'MITRE ATT&CK', 'CTF Automation', 'PCAP Analysis']
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
  {
    title: 'Infoboost App BackMarket',
    description: 'Application desktop pour générer des fichiers CSV de produits et les envoyer sur Back Market.',
    logo: '/logos/infoboost.webp',
    link: 'https://github.com/MrSiuuu/InfoboostApp',
    slug: 'infoboost-sku-generator',
    longDescription: `Infoboost SKU Generator est une application Python avec interface Tkinter permettant de créer et d’envoyer rapidement des fiches produits vers la marketplace Back Market.
  
  L’utilisateur saisit les informations : quantité, prix, grade, devise, EAN, ID produit et SKU. L’application propose des sélections pour les langues et la qualité des produits, et génère automatiquement un fichier CSV.
  
  Une fois la saisie validée, les données sont automatiquement envoyées vers Back Market via une intégration dédiée. Cette automatisation permet un gain de temps considérable pour la mise en ligne des produits reconditionnés.
  
  Ce projet a été utilisé en interne chez InfoBoost pour optimiser l'import de produits sur Back Market.`,
    technologies: ['Python', 'Tkinter', 'CSV', 'Back Market API', 'Desktop App']
  }
  

 ];

