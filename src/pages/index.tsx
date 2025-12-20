import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro/overview">
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon, link}: {
  title: string;
  description: string;
  icon: string;
  link: string;
}) {
  return (
    <div className="col col--4">
      <div className="card margin--md padding--lg" style={{minHeight: '200px'}}>
        <div className="card__header">
          <Heading as="h3">{icon} {title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className="container margin-vert--xl">
      <div className="row">
        <FeatureCard
          icon="📡"
          title="Shogun Relay"
          description="The heart of the infrastructure. A unified server running GunDB, IPFS, and blockchain connectivity."
          link="/relay/getting-started"
        />
        <FeatureCard
          icon="📜"
          title="Smart Contracts"
          description="On-chain registry, storage deals, and stealth payments on Base and Optimism."
          link="/contracts/overview"
        />
        <FeatureCard
          icon="🛠️"
          title="SDK & Tools"
          description="JavaScript SDK and REST API to build decentralized applications easily."
          link="/sdk/javascript-sdk"
        />
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Shogun Protocol - Decentralized Data, Storage & Payments">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
