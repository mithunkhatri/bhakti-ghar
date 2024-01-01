// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '✍ श्रीमती लीला खत्री की कलम से',
  tagline: 'भजन भक्ति माला में आपका स्वागत है',
  url: 'https://bhaktighar.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'bhakti-ghar', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-211677200-1',
          anonymizeIP: true, 
        }
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'भक्ति घर',
        logo: {
          alt: 'भक्ति घर',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'right',
            label: 'प्रस्तावना',
          },
          {
            type: 'doc',
            docId: 'bhajan/gajanand/ganpat-ne-manavan-chalo',
            position: 'right',
            label: 'भजन',
          },
          {
            type: 'doc',
            docId: 'aarti/hingulaj-mata',
            position: 'right',
            label: 'आरती',
          },
          {
            type: 'doc',
            docId: 'katha/vrahaspativar',
            position: 'right',
            label: 'कथा',
          },
          {
            type: 'doc',
            docId: 'extra/hingulaj-stuti',
            position: 'right',
            label: 'अन्य',
          },
          // {to: '/blog', label: 'गतिविधि', position: 'right'},
          // {to: '/me', label: 'परिचय', position: 'right'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'भजन',
        //     items: [
        //       {
        //         label: 'गजानंद',
        //         to: '/docs/bhajan/gajanand/ganraj-gajanand-aaye',
        //       },
        //       {
        //         label: 'कृष्ण',
        //         to: '/docs/bhajan/krishna/manihari-ka-bhesh-banaya',
        //       },
        //       {
        //         label: 'राम जी',
        //         to: '/docs/bhajan/ram/nagri-ho-ayodhya-si',
        //       },
        //       {
        //         label: 'रामदेव जी',
        //         to: '/docs/bhajan/ramdev/sugna-re-ubhi-dagaliye',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'आरती',
        //     items: [
        //       {
        //         label: 'हिंगुलाज',
        //         to: '/docs/aarti/hingulaj-mata',
        //       },
        //       {
        //         label: 'हनुमान जी',
        //         to: '/docs/aarti/hanumanji',
        //       },
        //       {
        //         label: 'गणेश जी',
        //         to: '/docs/aarti/ganeshji',
        //       },
        //       {
        //         label: 'अम्बे माता',
        //         to: '/docs/aarti/ambe-ma',
        //       },
        //     ],
        //   },
        // ],
        copyright: `स्वामित्व © ${new Date().getFullYear()} भक्ति घर. डॉक्यूसॉरस के साथ निर्मित.`,
        // logo: {
        //   src: 'img/logo.svg',
        // },
      },
      // algolia: {
      //   apiKey: 'd31e33c561de4ba2c3828547c90db518',
      //   indexName: 'mithunkhatri',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
