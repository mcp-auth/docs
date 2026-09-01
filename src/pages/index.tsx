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
            <Translate id="homepage.subheader.v1" description="The homepage subheader">
              MCP Auth 1.0 for Node.js is here, built for the MCP TypeScript SDK v2!
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
                          href="https://modelcontextprotocol.io/specification/latest/basic/authorization"
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
              <a href="/provider-list" className={styles.button}>
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
              <Translate
                id="homepage.sdk.sdkShips"
                description="What the official MCP SDKs already cover"
              >
                The official MCP SDKs now ship the HTTP layer of MCP authorization themselves:
                bearer auth middleware, metadata endpoints, and framework adapters. What they ask
                you to bring is provider integration: a token verifier and your auth metadata.
              </Translate>
            </p>
            <p>
              <strong>
                <Translate id="homepage.sdk.bringsBoth" description="The MCP Auth one-liner">
                  MCP Auth gives you both, for any OAuth 2.0 / OpenID Connect provider.
                </Translate>
              </strong>
            </p>
            <p>
              <Translate id="homepage.sdk.diy" description="Intro to the list of verifier pitfalls">
                You could write the verifier yourself; a correct one is about a hundred lines with a
                JWT library. These are the parts that tend to go wrong silently:
              </Translate>
            </p>
            <ul>
              <li>
                <Translate
                  id="homepage.sdk.pitfalls.audience"
                  description="Pitfall: audience binding"
                  values={{ aud: <code>aud</code> }}
                >
                  {
                    'Audience binding (RFC 8707): required by the MCP spec, left to the verifier by the SDK. MCP Auth always validates the {aud} claim against your resource identifier, with no opt-out.'
                  }
                </Translate>
              </li>
              <li>
                <Translate
                  id="homepage.sdk.pitfalls.expiration"
                  description="Pitfall: expiration mapping"
                  values={{ exp: <code>exp</code>, expiresAt: <code>expiresAt</code> }}
                >
                  {
                    'Expiration mapping: miss the {exp} → {expiresAt} mapping and the SDK rejects every token. MCP Auth maps it automatically.'
                  }
                </Translate>
              </li>
              <li>
                <Translate id="homepage.sdk.pitfalls.errors" description="Pitfall: error mapping">
                  Error mapping: raw JWT-library errors surface as 500s with no challenge, so
                  clients never re-authorize. MCP Auth turns verification failures into proper 401
                  challenges.
                </Translate>
              </li>
              <li>
                <Translate
                  id="homepage.sdk.pitfalls.claims"
                  description="Pitfall: claim format differences between providers"
                  values={{
                    scope: <code>scope</code>,
                    scopes: <code>scopes</code>,
                    clientId: <code>client_id</code>,
                    azp: <code>azp</code>,
                  }}
                >
                  {
                    'Claim quirks across providers: {scope} strings vs. {scopes} arrays, {clientId} vs. {azp}: all handled.'
                  }
                </Translate>
              </li>
              <li>
                <Translate
                  id="homepage.sdk.pitfalls.discovery"
                  description="Pitfall: metadata discovery hygiene"
                >
                  Discovery hygiene: issuer validation, cached metadata and JWKS fetches, and cache
                  reset on transient failures, all built in.
                </Translate>
              </li>
            </ul>
            <p>
              <Translate
                id="homepage.sdk.closing"
                description="Closing line of the SDK section"
                values={{ mcpAuth: <code>MCPAuth</code> }}
              >
                {
                  'Or: all of the above is one {mcpAuth} instance, tested and kept up to date as the MCP spec and SDKs evolve.'
                }
              </Translate>
            </p>
            <p>
              <Translate
                id="homepage.sdk.yours"
                description="What remains the developer's own work"
              >
                What stays in your hands: provider-side configuration (audience, scopes, client
                registration), permission design, and your app-level authorization. That is exactly
                what the tutorials and provider guides walk you through.
              </Translate>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LandingPage;
