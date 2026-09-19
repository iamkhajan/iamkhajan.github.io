import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Console from '@site/src/components/Console';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      noFooter
      title={siteConfig.title}
      description="Solutions Architect building AI-native systems — agentic workflows, retrieval at scale, and the plumbing that keeps them honest.">
      <Console />
    </Layout>
  );
}
