import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shogun Protocol',
  tagline: 'Decentralized Data, Storage & Payments',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages URL
  url: 'https://scobru.github.io',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'scobru',
  projectName: 'shogun-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/scobru/shogun-docs/tree/main/',
          routeBasePath: '/', // Docs at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/shogun-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Shogun Protocol',
      logo: {
        alt: 'Shogun Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/scobru/shogun-relay',
          label: 'Relay',
          position: 'right',
        },
        {
          href: 'https://github.com/scobru/shogun-contracts',
          label: 'Contracts',
          position: 'right',
        },
        {
          href: 'https://github.com/scobru/shogun-core',
          label: 'Core',
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
              to: '/intro/overview',
            },
            {
              label: 'Relay Guide',
              to: '/relay/getting-started',
            },
            {
              label: 'Smart Contracts',
              to: '/contracts/overview',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Shogun Relay',
              href: 'https://github.com/scobru/shogun-relay',
            },
            {
              label: 'Shogun Contracts',
              href: 'https://github.com/scobru/shogun-contracts',
            },
            {
              label: 'Shogun Core',
              href: 'https://github.com/scobru/shogun-core',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Shogun Deals',
              href: 'https://github.com/scobru/shogun-deals',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shogun Protocol. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
