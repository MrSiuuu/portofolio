import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Issa Kouyate est un développeur fullstack passionné, créant des applications web et mobiles performantes, des intégrations métiers, des workflows IA et des outils innovants."
      />
      <meta
        name="keywords"
        content="Issa Kouyate, développeur web, fullstack, Node.js, React, Angular, Supabase, Docker, IA, automatisation, outils métiers, portfolio développeur"
      />
      <meta property="og:title" content="Portfolio de Issa Kouyate" />
      <meta
        property="og:description"
        content="Développeur fullstack & chef de projet technique spécialisé en web, mobile, IA et automatisation."
      />
      <meta property="og:image" content="https://kouyateissa.fr/logos/IK.png" />
      <meta property="og:url" content="https://kouyateissa.fr" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'KOUYATE Issa',
};
