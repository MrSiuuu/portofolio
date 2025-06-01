import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { VscArrowLeft, VscLinkExternal } from 'react-icons/vsc';

import { projects } from '@/data/projects';
import { Project } from '@/types';

import styles from '@/styles/ProjectPage.module.css';

const ProjectPage = ({ project }: { project: Project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className={styles.loading}>Chargement...</div>;
  }

  if (!project) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Projet non trouvé</h1>
        <p>Le projet que vous recherchez n&apos;existe pas.</p>
        <Link href="/projects" className={styles.backLink}>
          <VscArrowLeft className={styles.backIcon} /> Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/projects" className={styles.backLink}>
          <VscArrowLeft className={styles.backIcon} /> Retour aux projets
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.logoContainer}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={80}
            height={80}
            className={styles.logo}
          />
        </div>

        <div className={styles.description}>
          <p>{project.description}</p>
          {project.longDescription && (
            <div className={styles.longDescription}>
              {project.longDescription.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>

        {project.technologies && (
          <div className={styles.technologies}>
            <h3>Technologies utilisées</h3>
            <div className={styles.techList}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Voir le projet <VscLinkExternal className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: project.title,
      project,
    },
  };
}

export default ProjectPage; 