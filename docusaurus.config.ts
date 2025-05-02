import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MCP Auth',
  tagline: 'Integrate MCP Server auth with any compatible provider',
  favicon: 'img/favicon.ico',
  noIndex: true, // Until we are ready

  // Set the production url of your site here
  url: 'https://mcp-auth.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mcp-auth/docs/tree/master/',
          beforeDefaultRehypePlugins: [
            // https://lachieh.github.io/docusaurus-with-shiki-rehype/docs/intro/
            [ 
              rehypeShiki,
              {
                themes: {
                  light: "one-light",
                  dark: "one-dark-pro",
                },
                langs: ["js", "ts", "jsx", "tsx", "bash", "python", "json"],
              } satisfies RehypeShikiOptions,
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MCP Auth',
      logo: {
        alt: 'MCP Auth logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/mcp-auth',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Need help?',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mcp-auth',
            },
            {
              label: 'Create a discussion',
              to: 'https://github.com/orgs/mcp-auth/discussions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MCP Auth`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
