import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [router.pathname]);

  return (
    <>
      {!isDesktop && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileMessage}>
            <h2>Ce portfolio n'est accessible que sur ordinateur 💻</h2>
            <p>Merci de revenir sur un écran plus large pour profiter de l'expérience complète.</p>
          </div>
        </div>
      )}
      {isDesktop && (
        <>
          <Titlebar />
          <div className={styles.main}>
            <Sidebar />
            <Explorer />
            <div style={{ width: '100%' }}>
              <Tabsbar />
              <main id="main-editor" className={styles.content}>
                {children}
              </main>
            </div>
          </div>
          <Bottombar />
        </>
      )}
    </>
  );
};

export default Layout;
