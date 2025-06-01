import Experience from '@/components/Experience';
import ToolsGrid from '@/components/ToolsGrid';
import { experiences } from '@/data/experiences';
import { tools, languages } from '@/data/tools';
import { VscServer, VscSymbolMethod, VscTools, VscCode } from 'react-icons/vsc';

import styles from '@/styles/ExperiencesPage.module.css';

const ExperiencesPage = () => {
  return (
    <div className={styles.container}>
      <Experience experiences={experiences} />
      
      <div className={styles.expertiseSection}>
        <h2 className={styles.expertiseTitle}>Mon expertise</h2>
        
        <div className={styles.expertiseGrid}>
          <div className={styles.expertiseCard}>
            <div className={styles.expertiseIcon}>
              <VscCode />
            </div>
            <h3 className={styles.expertiseCardTitle}>Développement Full Stack</h3>
            <p className={styles.expertiseDescription}>
              Développement complet d&apos;applications avec Node.js, Express, Vue, React, Angular et Supabase. Intégration API, sécurité, authentification, responsive UI.
            </p>
          </div>

          <div className={styles.expertiseCard}>
            <div className={styles.expertiseIcon}>
              <VscServer />
            </div>
            <h3 className={styles.expertiseCardTitle}>Conteneurisation & Déploiement</h3>
            <p className={styles.expertiseDescription}>
              Déploiement d&apos;applications web sur VPS (Ubuntu), Coolify, Vercel et autres plateformes. Maîtrise de Docker, gestion complète du cycle de vie des applications.
            </p>
          </div>

          <div className={styles.expertiseCard}>
            <div className={styles.expertiseIcon}>
              <VscSymbolMethod />
            </div>
            <h3 className={styles.expertiseCardTitle}>Automatisation & IA</h3>
            <p className={styles.expertiseDescription}>
              Création de workflows avec n8n, intégration de chatbots IA, automatisation de tâches, génération de contenus et actions via API ou OpenAI.
            </p>
          </div>

          <div className={styles.expertiseCard}>
            <div className={styles.expertiseIcon}>
              <VscTools />
            </div>
            <h3 className={styles.expertiseCardTitle}>Outils métiers & No-code</h3>
            <p className={styles.expertiseDescription}>
              Utilisation avancée de CMS (WordPress), ERP (Odoo), CRM et outils no-code comme N8N, MAKE, WebFlow, Elementor ou Bubble pour répondre aux besoins métiers.
            </p>
          </div>
        </div>
      </div>
      
      <ToolsGrid title="Outils utilisés" tools={tools} />
      <ToolsGrid title="Langages de programmation" tools={languages} />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Expériences' },
  };
}

export default ExperiencesPage;
