import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HighlightCard from '@site/src/components/HighlightCard';
import Heading from '@theme/Heading';
import SocialMediaRow from '@site/src/components/SocialMediaRow';
import TerminalCard from '@site/src/components/TerminalCard';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {currentFocus} = siteConfig.customFields as {currentFocus: string};
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.profileWrapper}>
          <img
            src={useBaseUrl('/img/profile.jpg')}
            alt="Khajan Pandey"
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              border: '3px solid transparent',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          <p>{currentFocus}</p>
        </Heading>
        
        {/* SOCIAL MEDIA ROW */}
        <SocialMediaRow />

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <TerminalCard />

        {/* --- THREE HIGHLIGHT CARDS --- */}
        <div className="container" style={{marginTop: '3rem'}}>
          <div className="row">
            <HighlightCard
              image="/img/ai-card.png"
              alt="AI Perspectives"
              title="AI Perspectives"
              description="Architecting scalable AI solutions"
              link="/docs/ai-perspective"
            />
            <HighlightCard
              image="/img/mexico-card.png"
              alt="Global Context"
              title="Global Context"
              description="Learning different cultures"
              link="/docs/global-context"
            />
            <HighlightCard
              image="/img/book-card.png"
              alt="Personal Knowledge Shelf"
              title="Knowledge Shelf"
              description="Sharing insights, lessons, and resources from books, ideas, and experiences."
              link="/docs/knowledge-shelf"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
