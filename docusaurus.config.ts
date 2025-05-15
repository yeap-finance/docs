// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yeap Finance',
  tagline: 'The Multi-Protocol Engine for Decentralized Lending',
  favicon: 'img/favicon.ico', // You'll need to create this favicon

  // Set the production url of your site here
  url: 'https://doc.yeap.finance',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // TODO: Update if deploying to a subdirectory (e.g., '/yeap-docs/')

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yeap-finance', // TODO: Usually your GitHub org/user name.
  projectName: 'docs', // TODO: Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yeap-finance/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yeap-finance/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true, // Enable Mermaid diagrams
  },
  themes: [
    '@docusaurus/theme-mermaid', // Uncomment if you want to use the Docusaurus theme for Mermaid
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/yeap-social-card.jpg', // TODO: Create this image
      navbar: {
        title: 'Yeap Finance',
        logo: {
          alt: 'Yeap Finance Logo',
          src: 'img/yeap-logo.jpg', // TODO: Place your logo here (SVG preferred)
                                   // If using the JPG: 'img/yeap-logo.jpg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // This ID should match the ID in sidebars.js
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'}, // Uncomment if you want a blog
          {
            href: 'https://github.com/yeap-finance/docs',
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
                to: '/docs/introduction', // Link to your main introduction page
              },
              {
                label: 'Architecture',
                to: '/docs/architecture',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6mE7CZ6v', // From your whitepaper
              },
              {
                label: 'Twitter',
                href: 'https://x.com/YeapFinance', // TODO: Update this
              },
              // Add Telegram if you have a link
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/yeap-finance/docs', // TODO: Update this
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Yeap Finance. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      // Algolia DocSearch config (optional)
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true,
      // },
    }),
};

export default config;
