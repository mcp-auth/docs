import Layout from '@theme/Layout';
import type React from 'react';

import styles from './index.module.scss';

const LandingPage: React.FC = () => {
  return (
    <Layout title="MCP Auth" description="Plug-and-play auth for MCP servers">
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.subheader}>Skip the specs. Skip the boilerplate. Just auth.</p>
          <h1>
            👉 <span className={styles['highlight-1']}>Plug</span>-
            <span className={styles['highlight-2']}>and</span>-
            <span className={styles['highlight-3']}>play</span> auth for MCP servers
          </h1>
          <p className={styles.description}>
            MCP Auth gives you everything you need to add production-ready auth to your MCP server,
            without losing weeks to spec docs and edge cases.
          </p>
          <div className={styles.buttons}>
            <a href="/docs/get-started" className={styles.primaryButton}>
              Get started
            </a>
          </div>
        </main>

        <section className={styles.whySection}>
          <h2>Why MCP Auth?</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles['highlight-1']}>Skip the boilerplate</h3>
              <p>
                No need to build OAuth 2.1 auth from scratch. MCP Auth connects your server to
                trusted providers in just a few lines of code.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles['highlight-2']}>Provider-agnostic</h3>
              <p>
                Works with any compliant OAuth 2.1 or OpenID Connect provider. Bring your own or
                choose from a verified list.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles['highlight-3']}>Production-ready</h3>
              <p>
                Don't worry about the edge cases. MCP Auth follows the spec and best practices, so
                you can deploy with confidence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LandingPage;
