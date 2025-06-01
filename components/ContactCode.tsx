import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'kouyateissa.fr',
    href: 'https://kouyateissa.fr',
  },
  {
    social: 'email',
    link: 'issakouyate1012@gmail.com',
    href: 'mailto:issakouyate1012@gmail.com',
  },
  {
    social: 'email',
    link: 'issa.kouyate@e-cdp.com',
    href: 'mailto:issa.kouyate@e-cdp.com',
  },
  {
    social: 'github',
    link: 'MrSiuuu',
    href: 'https://github.com/MrSiuuu',
  },
  {
    social: 'linkedin',
    link: 'issa-kouyate',
    href: 'https://www.linkedin.com/in/issa-kouyate-07a996285/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
