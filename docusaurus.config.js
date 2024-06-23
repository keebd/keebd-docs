// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.oceanicNext;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KEEBD Documentation',
  tagline: 'Documentation for KEEBD.com',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.keebd.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'keebd', // Usually your GitHub org/user name.
  projectName: 'keebd-docs', // Usually your repo name.

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
          path: "docs",
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/keebd/keebd-docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/KEEBDlogo_Light.png',
      navbar: {
        // title: 'KEEBD',
        logo: {
          alt: 'KEEBD.com Logo',
          src: 'img/KEEBDlogo_Light.png',
          srcDark: 'img/KEEBDlogo_dark.png'
        },
        items: [
          {
            href: "https://keebd.com",
            "aria-label": "Shop",
            className: "header-shop-link tooltip-header",
            position: "right",
            "data-tooltip": "Shop",
          },
          {
            href: "https://keebd.com/discord",
            "aria-label": "Discord",
            className: "header-discord-link tooltip-header",
            position: "right",
            "data-tooltip": "Discord",
          },
          {
            href: "https://www.facebook.com/KEEBDcom",
            "aria-label": "Facebook",
            className: "header-facebook-link tooltip-header",
            position: "right",
            "data-tooltip": "Facebook",
          },
          {
            href: "https://www.instagram.com/keebdcom/",
            "aria-label": "Instagram",
            className: "header-instagram-link tooltip-header",
            position: "right",
            "data-tooltip": "Instagram",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // footer: {
      //   // style: 'dark',
      //   copyright: `Copyright © ${new Date().getFullYear()} KEEBD Pty Ltd.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: "02CNVAKHM0",
        // Public API key: it is safe to commit it
        apiKey: "54e11da8716abca932bb1d19348a809a",
        indexName: "docs.keebd.com",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
      },
    }),
};

export default config;
