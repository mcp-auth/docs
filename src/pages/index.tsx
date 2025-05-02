import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

const Home = (): ReactNode => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <center style={{ margin: '4rem' }}>
          <h1>MCP Auth</h1>
          <p>
            <i>Plug-and-play auth for Model Context Protocol (MCP) servers.</i>
          </p>
          <p>
            MCP Auth provides a set of tools and libraries to easily integrate your MCP server with
            any spec-compliant OAuth 2 or OpenID Connect provider.
          </p>
          <p>
            We are launching soon! In the meantime, follow our{' '}
            <a href="https://github.com/mcp-auth">GitHub organization</a> for updates.
          </p>
        </center>
      </main>
    </Layout>
  );
};

export default Home;
