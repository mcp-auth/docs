import Translate, { translate } from '@docusaurus/Translate';
import GetStartedCode from '@site/docs/snippets/_get-started-code.mdx';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { type FC } from 'react';

import styles from './index.module.scss';

const LandingPage: FC = () => {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'MCP Auth - Plug-and-play auth for MCP servers',
        description: 'The homepage page title',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message:
          'MCP Auth gives you everything you need to add production-ready auth to your MCP server. No weeks spent reading specs or wiring things up.',
        description: 'The homepage description',
      })}
    >
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles['background-1']}></div>
          <div className={styles['background-2']}></div>
          <div className={styles.ellipse}></div>
        </div>
        <main className={styles.main}>
          <p className={styles.subheader}>
            <Translate id="homepage.subheader" description="The homepage subheader">
              Python and Node.js SDKs are now available!
            </Translate>
          </p>
          <h1>
            <span className={styles['highlight-1']}>Plug</span>-
            <span className={clsx(styles['highlight-2'], styles.highlightCursive)}>and</span>-
            <span className={styles['highlight-3']}>play</span>{' '}
            <Translate
              id="homepage.title.suffix"
              description="The part after 'Plug-and-play' in the main title ('Plug-and-play auth for MCP servers')"
            >
              auth for MCP servers
            </Translate>
          </h1>
          <p className={styles.description}>
            <Translate id="homepage.description" description="The homepage description">
              MCP Auth gives you everything you need to add production-ready auth to your MCP
              server. No weeks spent reading specs or wiring things up.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <a href="/docs" className={clsx(styles.button, styles.primaryButton)}>
              <Translate id="homepage.getStarted">Get started</Translate>
            </a>
          </div>
        </main>
        <section className={clsx(styles.section, styles.whySection)}>
          <h2>
            <Translate id="homepage.why.title">Why MCP Auth?</Translate>
          </h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div>
                <h3>
                  <Translate
                    id="homepage.why.skipSpecs"
                    description="Title about skipping specs and boilerplate with emphasis on just auth"
                    values={{
                      justAuth: (
                        <span className={styles.highlightCursive}>
                          <Translate
                            id="homepage.why.justAuth"
                            description="Emphasis text saying just auth"
                          >
                            Just auth
                          </Translate>
                        </span>
                      ),
                    }}
                  >
                    {'Skip the specs. Skip the boilerplate. {justAuth}.'}
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.why.mcpSpecDescription"
                    description="Description about MCP spec requirements and benefits"
                    values={{
                      specLink: (
                        <a
                          href="https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization"
                          rel="noopener nofollow"
                        >
                          <Translate
                            id="homepage.why.mcpSpecLink"
                            description="Text for the MCP spec link"
                          >
                            requires OAuth 2.1 and other RFCs
                          </Translate>
                        </a>
                      ),
                    }}
                  >
                    {
                      'The MCP spec {specLink}, providing a solid foundation for auth. With MCP Auth, you can take it further by connecting to a trusted provider in just a few lines of code.'
                    }
                  </Translate>
                </p>
              </div>
              <a href="/docs" className={styles.button}>
                <Translate id="homepage.why.getStarted">Get started</Translate>
              </a>
            </div>
            <div className={styles.card}>
              <div>
                <h3>
                  <Translate
                    id="homepage.why.providerAgnostic"
                    values={{
                      highlight: (
                        <span className={styles.highlightCursive}>
                          <Translate id="homepage.why.providerAgnosticHighlight">
                            provider-agnostic
                          </Translate>
                        </span>
                      ),
                    }}
                  >
                    {"Connect to any provider. It's {highlight}."}
                  </Translate>
                </h3>
                <p>
                  <Translate id="homepage.why.providerAgnosticDescription">
                    MCP Auth works with any compliant OAuth 2.1 or OpenID Connect provider. Choose
                    one from our verified list or use the tool to check if your provider is
                    compliant.
                  </Translate>
                </p>
              </div>
              <a href="/docs/provider-list" className={styles.button}>
                <Translate id="homepage.why.checkOutProviders">Check out providers</Translate>
              </a>
            </div>
          </div>
          <div className={clsx(styles.card, styles.productionCard)}>
            <h3>
              <h3>
                <Translate
                  id="homepage.why.shipFast"
                  values={{
                    highlight: (
                      <span className={styles.highlightCursive}>
                        <Translate id="homepage.why.shipFastHighlight">be secure</Translate>
                      </span>
                    ),
                  }}
                >
                  {"Let's ship fast, and {highlight}."}
                </Translate>
              </h3>
            </h3>
            <p>
              <Translate id="homepage.why.productionDescription">
                Go for production? We've got you covered. MCP Auth follows the spec and best
                practices, so you can launch with confidence.
              </Translate>
            </p>
          </div>
        </section>
        <section className={clsx(styles.section, styles.codeSection)}>
          <h2>
            <Translate id="homepage.code.title">
              It really can be just a few lines of code
            </Translate>
          </h2>
          <GetStartedCode />
        </section>
        <section className={clsx(styles.section, styles.mcpSdkSection)}>
          <div className={styles.card}>
            <div className={styles.dots} />
            <h2>
              <Translate id="homepage.sdk.title">How about the MCP SDKs?</Translate>
            </h2>
            <p>
              <Translate id="homepage.sdk.officialIntro">
                The official MCP SDKs (Python, Node.js, etc.) are a great starting point. MCP Auth
                uses them in all tutorials and it can serve a strong supplement to your existing
                setup.
              </Translate>
            </p>
            <p>
              <strong>
                <Translate id="homepage.sdk.valueProposition">
                  MCP Auth bridges the gap between "it runs" and "it's secure, scalable, and
                  maintainable" for authentication and authorization.
                </Translate>
              </strong>
            </p>
            <p>
              <Translate id="homepage.sdk.offeringIntro">
                It's designed to work alongside the SDKs by offering:
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="homepage.sdk.offering.jwt">First-class JWT support</Translate>
              </li>
              <li>
                <Translate id="homepage.sdk.offering.tools">Provider-agnostic tools</Translate>
              </li>
              <li>
                <Translate id="homepage.sdk.offering.guides">
                  Step-by-step guides for various identity providers
                </Translate>
              </li>
            </ul>
            <p>
              <Translate id="homepage.sdk.maintenance">
                Plus, we keep up with changes to the MCP spec and SDKs, so you don't have to.
              </Translate>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LandingPage;
