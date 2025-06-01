import Image from 'next/image';
import styles from '@/styles/ToolsGrid.module.css';

export interface Tool {
  name: string;
  logo: string;
  category?: string;
}

interface ToolsGridProps {
  title: string;
  tools: Tool[];
}

const ToolsGrid = ({ title, tools }: ToolsGridProps) => {
  return (
    <div className={styles.toolsSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.toolsGrid}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolCard}>
            <div className={styles.toolLogo}>
              <Image 
                src={tool.logo} 
                alt={`${tool.name} logo`} 
                width={80} 
                height={80}
                className={styles.logo}
              />
            </div>
            <p className={styles.toolName}>{tool.name}</p>
            {tool.category && <span className={styles.toolCategory}>{tool.category}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid; 