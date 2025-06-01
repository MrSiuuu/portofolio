import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Experience as ExperienceType } from '@/types';

import styles from '@/styles/Experience.module.css';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const ExperienceItem = ({ experience, index }: { experience: ExperienceType, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const isRight = experience.isRight !== undefined ? experience.isRight : index % 2 === 0;

  return (
    <div 
      ref={ref} 
      className={`${styles.experienceItem} ${isVisible ? styles.visible : ''} ${isRight ? styles.right : styles.left}`}
    >
      <div className={styles.timelinePoint}>
        <div className={styles.logoContainer}>
          <Image 
            src={experience.logo} 
            alt={`${experience.company} logo`} 
            width={50} 
            height={50} 
            className={styles.logo}
          />
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.period}>{experience.period}</div>
        <div className={styles.details}>
          <h3 className={styles.title}>{experience.title}</h3>
          <h4 className={styles.company}>{experience.company}</h4>
          <p className={styles.description}>{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Mes expériences</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience; 