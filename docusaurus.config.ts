import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeShiki, { RehypeShikiOptions } from '@shikijs/rehype';
import { transformerNotationHighlight, transformerMetaHighlight } from '@shikijs/transformers';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MCP Auth',
  tagline: 'Integrate MCP Server auth with any compatible provider',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mcp-auth.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,


  i18n: {
    defaultLocale: 'en',
    locales: ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'zh-CN', 'zh-TW'],
    localeConfigs:{
      'zh-CN': { label: '简体中文' },
      'zh-TW': { label: '繁體中文（台灣）' },
    },
  },

  customFields: {
    providerTestUrl: process.env.PROVIDER_TEST_URL || 'https://api.mcp-auth.dev/test-providers',
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],
  plugins: ['docusaurus-plugin-sass'],

  scripts: [
    {
      src: 'https://plausible.io/js/script.outbound-links.js',
      defer: true,
      'data-domain': 'mcp-auth.dev',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/mcp-auth/docs/tree/master/',
          beforeDefaultRehypePlugins: [
            // https://lachieh.github.io/docusaurus-with-shiki-rehype/docs/intro/
            [
              rehypeShiki,
              {
                themes: {
                  light: 'one-light',
                  dark: 'one-dark-pro',
                },
                langs: ['js', 'ts', 'jsx', 'tsx', 'bash', 'python', 'json'],
                transformers: [transformerMetaHighlight(), transformerNotationHighlight()],
              } satisfies RehypeShikiOptions,
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          ignorePatterns: ['/tags/**'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
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
          position: 'right',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: '/category/tutorials',
          label: 'Tutorials',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'provider-list',
          label: 'Provider list',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<a href="https://github.com/mcp-auth" target="_blank" rel="noopener nofollow" class="navbar__link github"><div class="icon"></div><span>GitHub</span></a>',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} MCP Auth`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
