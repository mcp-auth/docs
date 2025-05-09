import GetStartedCode from '@site/docs/snippets/_get-started-code.mdx';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { type FC } from 'react';

import styles from './index.module.scss';

const description =
  'MCP Auth gives you everything you need to add production-ready auth to your MCP server, without losing weeks to spec docs and implementations.';

const LandingPage: FC = () => {
  return (
    <Layout title="MCP Auth - Plug-and-play auth for MCP servers" description={description}>
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
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            <a href="/docs" className={clsx(styles.button, styles.primaryButton)}>
              Get started
            </a>
          </div>
        </main>
        <section className={clsx(styles.section, styles.whySection)}>
          <h2>Why MCP Auth?</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div>
                <h3>
                  Skip the specs. Skip the boilerplate.{' '}
                  <span className={styles.highlightCursive}>Just auth.</span>
                </h3>
                <p>
                  The MCP spec{' '}
                  <a
                    href="https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization"
                    rel="noopener nofollow"
                  >
                    requires OAuth 2.1 and other RFCs
                  </a>{' '}
                  for auth. Instead of spending weeks on them, use MCP Auth to connect to an trusted
                  provider with a few lines of code.
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
                  MCP Auth works with any compliant OAuth 2.1 or OpenID Connect provider. Choose one
                  from our verified list or use the tool to check if your provider is compliant.
                </p>
              </div>
              <a href="/docs/provider-list" className={styles.button}>
                Check out providers
              </a>
            </div>
          </div>
          <div className={clsx(styles.card, styles.productionCard)}>
            <h3>
              Let's ship fast, and <span className={styles.highlightCursive}>be secure.</span>
            </h3>
            <p>
              Go for production? We've got you covered. MCP Auth follows the spec and best
              practices, so you can launch with confidence.
            </p>
          </div>
        </section>
        <section className={clsx(styles.section, styles.codeSection)}>
          <h2>It really can be just a few lines of code</h2>
          <GetStartedCode />
        </section>
        <section className={clsx(styles.section, styles.mcpSdkSection)}>
          <div className={styles.card}>
            <div className={styles.dots} />
            <h2>How about the MCP SDKs?</h2>
            <p>
              The official MCP SDKs (Python, Node.js, etc.) are a solid starting point. But when
              you're building something for production, especially around authentication and
              authorization, you'll quickly hit limitations.
            </p>
            <p>
              <strong>
                MCP Auth fills the gap between "it runs" and "it's secure, scalable, and
                maintainable".
              </strong>
            </p>
            <p>It's built to work with the SDKs and bridge the gaps through:</p>
            <ul>
              <li>First-class JWT support</li>
              <li>Provider-agnostic tooling</li>
              <li>Step-by-step tutorials for various identity providers</li>
            </ul>
            <p>
              And we'll stay on top of changes to the MCP spec and SDK ecosystem, so you don't have
              to.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LandingPage;
