import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Issa Kouyate</h1>
        <div className={styles.subtitle}>
          Développeur Fullstack & Chef de projet digital
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Bonjour ! Je suis un développeur fullstack passionné par le web,
              l’automatisation, l’IA et les outils métiers. Je conçois des solutions concrètes, utiles, et orientées production.
            </p>
            <p className={styles.paragraph}>
              Aujourd’hui, je suis à la recherche d’une <strong>alternance</strong> ou d’un <strong>poste</strong> dans une entreprise
              qui me permettra de continuer à apprendre, tout en apportant mes compétences sur des projets réels.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Expérience</h2>
            <p className={styles.paragraph}>
              Chez <span className={styles.highlight}>InfoBoost</span>,en CDD, j’ai occupé un rôle transversal :
              développement web (WordPress natif), automatisation (n8n, Bash, IA), intégration
              complète d’Odoo, et pilotage de campagnes marketing (Google Ads, Merchant Center).
            </p>
            <p className={styles.paragraph}>
              J’ai également encadré plusieurs stagiaires, livré des outils internes concrets
              (workflow, agents IA) et fait gagner du temps aux équipes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projets perso</h2>
            <p className={styles.paragraph}>
              Je suis le co-créateur de <span className={styles.highlight}>Genesixx Valley</span>, une plateforme IA de génération de CV et lettres
              pour Campus France, et développe plusieurs projets personnels.
            </p>
            <p className={styles.paragraph}>
              Mon stack favori : <strong>Node.js, VueJs, ReactJs, Python, Supabase(PostgreSQL), Tailwind, Docker</strong>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Au-delà du code</h2>
            <p className={styles.paragraph}>
              J’aime suivre les dernières tendances tech (chaînes YouTube, Twitter, formations Udemy),
              contribuer à des projets utiles, et partager mes connaissances avec mes collègues.
              À côté, je suis passionné de football, de musique et de jeux vidéo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
