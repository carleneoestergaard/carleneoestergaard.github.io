
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/build/',
  component: ComponentCreator('/build/','aa2'),
  exact: true,
},
{
  path: '/build/blog',
  component: ComponentCreator('/build/blog','930'),
  exact: true,
},
{
  path: '/build/blog/hello-world',
  component: ComponentCreator('/build/blog/hello-world','f9d'),
  exact: true,
},
{
  path: '/build/blog/hola',
  component: ComponentCreator('/build/blog/hola','d75'),
  exact: true,
},
{
  path: '/build/blog/tags',
  component: ComponentCreator('/build/blog/tags','2f7'),
  exact: true,
},
{
  path: '/build/blog/tags/docusaurus',
  component: ComponentCreator('/build/blog/tags/docusaurus','008'),
  exact: true,
},
{
  path: '/build/blog/tags/facebook',
  component: ComponentCreator('/build/blog/tags/facebook','954'),
  exact: true,
},
{
  path: '/build/blog/tags/hello',
  component: ComponentCreator('/build/blog/tags/hello','826'),
  exact: true,
},
{
  path: '/build/blog/tags/hola',
  component: ComponentCreator('/build/blog/tags/hola','e31'),
  exact: true,
},
{
  path: '/build/blog/welcome',
  component: ComponentCreator('/build/blog/welcome','c0a'),
  exact: true,
},
{
  path: '/build/markdown-page',
  component: ComponentCreator('/build/markdown-page','d23'),
  exact: true,
},
{
  path: '/build/my-react-page',
  component: ComponentCreator('/build/my-react-page','d92'),
  exact: true,
},
{
  path: '/build/search',
  component: ComponentCreator('/build/search','44c'),
  exact: true,
},
{
  path: '/build/docs',
  component: ComponentCreator('/build/docs','61a'),
  
  routes: [
{
  path: '/build/docs/Connections/Bubble',
  component: ComponentCreator('/build/docs/Connections/Bubble','dda'),
  exact: true,
},
{
  path: '/build/docs/Connections/Economic',
  component: ComponentCreator('/build/docs/Connections/Economic','82d'),
  exact: true,
},
{
  path: '/build/docs/Connections/Forecast',
  component: ComponentCreator('/build/docs/Connections/Forecast','2e8'),
  exact: true,
},
{
  path: '/build/docs/Connections/Hubspot',
  component: ComponentCreator('/build/docs/Connections/Hubspot','bc6'),
  exact: true,
},
{
  path: '/build/docs/Connections/Maconomy',
  component: ComponentCreator('/build/docs/Connections/Maconomy','ece'),
  exact: true,
},
{
  path: '/build/docs/Connections/Microsoft Dynamics',
  component: ComponentCreator('/build/docs/Connections/Microsoft Dynamics','dd8'),
  exact: true,
},
{
  path: '/build/docs/Connections/Oracle',
  component: ComponentCreator('/build/docs/Connections/Oracle','5a5'),
  exact: true,
},
{
  path: '/build/docs/Connections/Rackbeat',
  component: ComponentCreator('/build/docs/Connections/Rackbeat','258'),
  exact: true,
},
{
  path: '/build/docs/Connections/Snowflake',
  component: ComponentCreator('/build/docs/Connections/Snowflake','7f7'),
  exact: true,
},
{
  path: '/build/docs/Connections/WebCRM',
  component: ComponentCreator('/build/docs/Connections/WebCRM','d1c'),
  exact: true,
},
{
  path: '/build/docs/intro',
  component: ComponentCreator('/build/docs/intro','071'),
  exact: true,
},
{
  path: '/build/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/build/docs/tutorial-basics/congratulations','731'),
  exact: true,
},
{
  path: '/build/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/build/docs/tutorial-basics/create-a-blog-post','9c7'),
  exact: true,
},
{
  path: '/build/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/build/docs/tutorial-basics/create-a-document','b7c'),
  exact: true,
},
{
  path: '/build/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/build/docs/tutorial-basics/create-a-page','519'),
  exact: true,
},
{
  path: '/build/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/build/docs/tutorial-basics/deploy-your-site','4cb'),
  exact: true,
},
{
  path: '/build/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/build/docs/tutorial-basics/markdown-features','ffb'),
  exact: true,
},
{
  path: '/build/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/build/docs/tutorial-extras/manage-docs-versions','c3f'),
  exact: true,
},
{
  path: '/build/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/build/docs/tutorial-extras/translate-your-site','1c7'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
