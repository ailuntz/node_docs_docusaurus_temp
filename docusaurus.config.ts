import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PluginOptions } from '@docusaurus/plugin-content-docs';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';

const config: Config = {
  title: 'Ailuntz_docs',
  tagline: '不是金子、不会发光 、不用等待、不必期待、不再见、不思念。谢谢',
  favicon: 'img/favicon1.ico',
  
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/node_docs_docusaurus_temp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ailuntz_facebook', // Usually your GitHub org/user name.
  projectName: 'ailuntz_docusaurus', // Usually your repo name.

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
          sidebarPath: 'sidebars/sidebars.ts',
          path: 'docs',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
          // customCss: './src/css/mycustom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'content-docs',
      {
        id: 'ailbasis',
        path: 'ail_basis',
        routeBasePath: 'ailbasis',
        editUrl:
        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        editCurrentVersion: true,
        sidebarPath: 'sidebars/general.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'ailcode',
        path: 'ail_code',
        routeBasePath: 'ailcode',
        editUrl:
        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        editCurrentVersion: true,
        sidebarPath: 'sidebars/general.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'aildepoly',
        path: 'ail_depoly',
        routeBasePath: 'aildepoly',
        editUrl:
        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        editCurrentVersion: true,
        sidebarPath: 'sidebars/general.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'ailtheory',
        path: 'ail_theory',
        routeBasePath: 'ailtheory',
        editUrl:
        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        editCurrentVersion: true,
        sidebarPath: 'sidebars/general.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'ailstudies',
        path: 'ail_studies',
        routeBasePath: 'ailstudies',
        editUrl:
        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        editCurrentVersion: true,
        sidebarPath: 'sidebars/general.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    [
      'content-docs',
      {
        id: 'intelligent',
        path: 'ail_intelligent',
        routeBasePath: 'intelligent',
        editUrl:
        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        editCurrentVersion: true,
        sidebarPath: 'sidebars/general.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // [
    //   'client-redirects',
    //   {
    //     fromExtensions: ['html'],
    //     createRedirects(routePath) {
    //       // Redirect to /docs from /docs/introduction (now docs root doc)
    //       if (routePath === '/docs' || routePath === '/docs/') {
    //         return [`${routePath}/introduction`];
    //       }
    //       return [];
    //     },
    //     redirects: [
    //       {
    //         from: ['/docs/support', '/docs/next/support'],
    //         to: '/community/support',
    //       },
    //       {
    //         from: ['/docs/team', '/docs/next/team'],
    //         to: '/community/team',
    //       },
    //       {
    //         from: ['/docs/resources', '/docs/next/resources'],
    //         to: '/community/resources',
    //       },
    //     ],
    //   } satisfies ClientRedirectsOptions,
    // ],
  ],
  
  

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ailuntz',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '😊',
        },
        {
          to: '/ailbasis/intro',
          position: 'left',
          label: '基础',
          activeBaseRegex: `/ailbasis/`,
        },
        {
          to: '/ailcode/intro',
          position: 'left',
          label: '编程',
          activeBaseRegex: `/ailcode/`,
        },
        {
          to: '/aildepoly/intro',
          position: 'left',
          label: '部署',
          activeBaseRegex: `/aildepoly/`,
        },
        {
          to: '/ailtheory/intro',
          position: 'left',
          label: '理论',
          activeBaseRegex: `/ailtheory/`,
        },
        {
          to: '/ailstudies/intro',
          position: 'left',
          label: '学术',
          activeBaseRegex: `/ailstudies/`,
        },
        {
          to: '/intelligent/intro',
          position: 'left',
          label: 'Intelligent',
          activeBaseRegex: `/intelligent/`,
        },
        // {to: '/blog', label: 'ailuntz_log', position: 'left'},
        {
          position: 'left',
          label: '资料文档',
          to:'.',
          items:[
            {
              label:'github',
              to:'.',
            },
            {
              label:'linux',
              to:'.',
            },
          ],
        },
        {
          href: 'https://github.com/ailuntz',
          label: 'Ailuntz GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ailuntz, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },    
    algolia: {
      // The application ID provided by Algolia
      appId: 'HQIZ0TY9G1',

      // Public API key: it is safe to commit it
      apiKey: '70f626003f176612073e07aa2229182b',

      indexName: 'example',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/docs/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig
};

export default config;
