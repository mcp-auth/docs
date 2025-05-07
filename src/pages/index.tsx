import Layout from '@theme/Layout';
import clsx from 'clsx';
import type React from 'react';

import styles from './index.module.scss';

const LandingPage: React.FC = () => {
  return (
    <Layout
      title="MCP Auth - Plug-and-play auth for MCP servers"
      description="MCP Auth gives you everything you need to add production-ready auth to your MCP server,
            without losing weeks to spec docs and edge cases."
    >
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles['background-1']}></div>
          <div className={styles['background-2']}></div>
          <div className={styles.ellipse}></div>
        </div>
        <main className={styles.main}>
          <p className={styles.subheader}>Python and Node.js SDKs are now available!</p>
          <h1>
            <span className={styles['highlight-1']}>Plug</span>-
            <span className={clsx(styles['highlight-2'], styles.highlightCursive)}>and</span>-
            <span className={styles['highlight-3']}>play</span> auth for MCP servers
          </h1>
          <p className={styles.description}>
            MCP Auth gives you everything you need to add production-ready auth to your MCP server,
            without losing weeks to spec docs and implementations.
          </p>
          <div className={styles.buttons}>
            <a href="/docs/get-started" className={clsx(styles.button, styles.primaryButton)}>
              Get started
            </a>
          </div>
        </main>
        <section className={styles.whySection}>
          <h2>Why MCP Auth?</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div>
                <h3>
                  Skip the specs. Skip the boilerplate.{' '}
                  <span className={styles.highlightCursive}>Just auth.</span>
                </h3>
                <p>
                  The spec{' '}
                  <a
                    href="https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization"
                    rel="noopener nofollow"
                  >
                    requires OAuth 2.1 and other RFCs
                  </a>{' '}
                  for auth. Instead of spending weeks on them, use MCP Auth to connect to trusted
                  providers with a few lines of code.
                </p>
              </div>
              <a href="/docs" className={styles.button}>
                Get started
              </a>
            </div>
            <div className={styles.card}>
              <div>
                <h3>
                  Connect to any provider. It's{' '}
                  <span className={styles.highlightCursive}>provider-agnostic.</span>
                </h3>
                <p>
                  MCP Auth works with any compliant OAuth 2.1 or OpenID Connect provider. Choose
                  from the list or use our tool to check if your provider is compliant.
                </p>
              </div>
              <a href="/docs/provider-list" className={styles.button}>
                Check out the providers
              </a>
            </div>
          </div>
          <div className={clsx(styles.card, styles.productionCard)}>
            <div>
              <h3>
                Let's ship fast, and <span className={styles.highlightCursive}>be secure.</span>
              </h3>
              <p>
                Go for production? We've got you covered. MCP Auth follows the spec and best
                practices, so you can launch with confidence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LandingPage;
