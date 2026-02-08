import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Khajan Pandey',
  tagline: 'Context, Insights and Architecting Intelligence',
  customFields: {
    currentFocus: 'Currently exploring: Agentic Workflows & Multi-Modal RAG',
  },
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://iamkhajan.github.io',
  url: 'https://khajanpandey.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iamkhajan', // Usually your GitHub org/user name.
  projectName: 'iamkhajan.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Khajan Pandey Profile',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Blogs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/iamkhajan',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        // {
        //   to: '/docs/intro',
        //   label: 'Contact Us',
        //   position: 'right',
        // }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Blogs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/1689926/godfather',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/khajanpandey',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Send email',
              href: 'mailto:hola@khajanpandey.com',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Khajanpandey, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;