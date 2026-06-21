import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '027'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', 'b13'),
    exact: true
  },
  {
    path: '/blog/tags/architecture',
    component: ComponentCreator('/blog/tags/architecture', '070'),
    exact: true
  },
  {
    path: '/blog/tags/engineering',
    component: ComponentCreator('/blog/tags/engineering', 'ea5'),
    exact: true
  },
  {
    path: '/blog/tags/strategy',
    component: ComponentCreator('/blog/tags/strategy', 'f3f'),
    exact: true
  },
  {
    path: '/blog/tech-radar-q1-2026',
    component: ComponentCreator('/blog/tech-radar-q1-2026', 'c38'),
    exact: true
  },
  {
    path: '/blog/what-is-a-100x-ai-engineer',
    component: ComponentCreator('/blog/what-is-a-100x-ai-engineer', '334'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd18'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1af'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2ba'),
            routes: [
              {
                path: '/docs/ai-perspective',
                component: ComponentCreator('/docs/ai-perspective', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/global-context',
                component: ComponentCreator('/docs/global-context', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge-shelf',
                component: ComponentCreator('/docs/knowledge-shelf', '999'),
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
