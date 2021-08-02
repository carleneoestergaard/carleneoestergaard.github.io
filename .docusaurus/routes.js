
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/build/',
  component: ComponentCreator('/build/','aa2'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug',
  component: ComponentCreator('/build/__docusaurus/debug','553'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug/config',
  component: ComponentCreator('/build/__docusaurus/debug/config','c66'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug/content',
  component: ComponentCreator('/build/__docusaurus/debug/content','c02'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug/globalData',
  component: ComponentCreator('/build/__docusaurus/debug/globalData','514'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug/metadata',
  component: ComponentCreator('/build/__docusaurus/debug/metadata','696'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug/registry',
  component: ComponentCreator('/build/__docusaurus/debug/registry','df9'),
  exact: true,
},
{
  path: '/build/__docusaurus/debug/routes',
  component: ComponentCreator('/build/__docusaurus/debug/routes','03b'),
  exact: true,
},
{
  path: '/build/blog',
  component: ComponentCreator('/build/blog','313'),
  exact: true,
},
{
  path: '/build/blog/hello-world',
  component: ComponentCreator('/build/blog/hello-world','45e'),
  exact: true,
},
{
  path: '/build/blog/hola',
  component: ComponentCreator('/build/blog/hola','e8b'),
  exact: true,
},
{
  path: '/build/blog/tags',
  component: ComponentCreator('/build/blog/tags','126'),
  exact: true,
},
{
  path: '/build/blog/tags/docusaurus',
  component: ComponentCreator('/build/blog/tags/docusaurus','67b'),
  exact: true,
},
{
  path: '/build/blog/tags/facebook',
  component: ComponentCreator('/build/blog/tags/facebook','834'),
  exact: true,
},
{
  path: '/build/blog/tags/hello',
  component: ComponentCreator('/build/blog/tags/hello','15b'),
  exact: true,
},
{
  path: '/build/blog/tags/hola',
  component: ComponentCreator('/build/blog/tags/hola','1f5'),
  exact: true,
},
{
  path: '/build/blog/welcome',
  component: ComponentCreator('/build/blog/welcome','bbd'),
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
  component: ComponentCreator('/build/search','aa4'),
  exact: true,
},
{
  path: '/build/reference',
  component: ComponentCreator('/build/reference','900'),
  
  routes: [
{
  path: '/build/reference/Connections/Snowflake',
  component: ComponentCreator('/build/reference/Connections/Snowflake','075'),
  exact: true,
},
{
  path: '/build/reference/intro',
  component: ComponentCreator('/build/reference/intro','6a1'),
  exact: true,
},
{
  path: '/build/reference/tutorial-basics/congratulations',
  component: ComponentCreator('/build/reference/tutorial-basics/congratulations','0ec'),
  exact: true,
},
{
  path: '/build/reference/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/build/reference/tutorial-basics/create-a-blog-post','eef'),
  exact: true,
},
{
  path: '/build/reference/tutorial-basics/create-a-document',
  component: ComponentCreator('/build/reference/tutorial-basics/create-a-document','f19'),
  exact: true,
},
{
  path: '/build/reference/tutorial-basics/create-a-page',
  component: ComponentCreator('/build/reference/tutorial-basics/create-a-page','32d'),
  exact: true,
},
{
  path: '/build/reference/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/build/reference/tutorial-basics/deploy-your-site','f00'),
  exact: true,
},
{
  path: '/build/reference/tutorial-basics/markdown-features',
  component: ComponentCreator('/build/reference/tutorial-basics/markdown-features','aad'),
  exact: true,
},
{
  path: '/build/reference/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/build/reference/tutorial-extras/manage-docs-versions','203'),
  exact: true,
},
{
  path: '/build/reference/tutorial-extras/translate-your-site',
  component: ComponentCreator('/build/reference/tutorial-extras/translate-your-site','13e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
