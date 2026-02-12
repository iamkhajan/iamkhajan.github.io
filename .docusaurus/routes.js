import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4af'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/awesome-architect-q1-2026',
    component: ComponentCreator('/blog/awesome-architect-q1-2026', '759'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', 'eb1'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture', '070'),
    exact: true
  },
  {
    path: '/blog/tags/awesome-copilot',
    component: ComponentCreator('/blog/tags/awesome-copilot', '2a0'),
    exact: true
  },
  {
    path: '/blog/tags/strategy',
    component: ComponentCreator('/blog/tags/strategy', 'c15'),
    exact: true
  },
  {
    path: '/blog/tech-radar-q1-2026',
    component: ComponentCreator('/blog/tech-radar-q1-2026', 'c38'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '06b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '231'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f3b'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
