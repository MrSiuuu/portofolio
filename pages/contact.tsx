import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Me contacter</h1>
      <p className={styles.pageSubtitle}>
        Que ce soit pour une alternance, un poste ou simplement échanger autour d’un projet tech,
        je suis toujours ouvert aux opportunités et aux rencontres professionnelles.
        N’hésitez pas à me contacter via les plateformes ci-dessous.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
