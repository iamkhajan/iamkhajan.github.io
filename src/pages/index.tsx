import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons


import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={useBaseUrl('/img/profile.jpg')}
          alt="Khajan Pandey"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            border: '4px solid white',
            marginBottom: '1rem',
            objectFit: 'cover', // Ensures the face isn't stretched
          }}
        />
        
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        
        {/* SOCIAL MEDIA ROW */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '2rem', marginBottom: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/khajan-pandey-3b515035/" target="_blank" style={{ color: 'white' }}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/iamkhajan" target="_blank" style={{ color: 'white' }}>
            <FaGithub />
          </a>
          <a href="mailto:khajanpandey@outlook.com" style={{ color: 'white' }}>
            <FaEnvelope />
          </a>
        </div>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Know more - 5min ⏱️
          </Link>
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
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
