import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HighlightCard from '@site/src/components/HighlightCard';
import Heading from '@theme/Heading';
import SocialMediaRow from '@site/src/components/SocialMediaRow';


import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {currentFocus} = siteConfig.customFields as {currentFocus: string};
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={useBaseUrl('/img/profile.jpg')}
          alt="Khajan Pandey"
          style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            border: '4px solid white',
            marginBottom: '1rem',
            objectFit: 'cover',
          }}
        />
        
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          <p style={{
          fontStyle: 'italic',
          opacity: 0.7,
          fontSize: '1rem',
          marginBottom: '2rem',
          fontWeight: '300'
        }}>
          {currentFocus}
        </p>
        </Heading>
        
        {/* SOCIAL MEDIA ROW */}
        <SocialMediaRow />

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        
        {/* <div className={styles.buttons} style={{marginBottom: '2rem'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Know more - 5min ⏱️
          </Link>
        </div> */}

        {/* --- THREE HIGHLIGHT CARDS --- */}
        <div className="container" style={{marginTop: '3rem'}}>
          <div className="row">
            <HighlightCard
              image="/img/ai-card.png"
              alt="AI Perspectives"
              title="AI Perspectives"
              description="Architecting scalable LLM solutions and enterprise AI roadmaps for global products."
            />
            <HighlightCard
              image="/img/mexico-card.png"
              alt="Global Context"
              title="Global Context"
              description="10+ years experience in Mexico leading cross-functional teams."
            />
            <HighlightCard
              image="/img/book-card.png"
              alt="Personal Knowledge Shelf"
              title="Knowledge Shelf"
              description="Sharing insights, lessons, and resources from books, ideas, and experiences."
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
