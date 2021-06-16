
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/build/index.html/',
  component: ComponentCreator('/build/index.html/','6a7'),
  exact: true,
},
{
  path: '/build/index.html/blog',
  component: ComponentCreator('/build/index.html/blog','fb7'),
  exact: true,
},
{
  path: '/build/index.html/blog/hello-world',
  component: ComponentCreator('/build/index.html/blog/hello-world','dce'),
  exact: true,
},
{
  path: '/build/index.html/blog/hola',
  component: ComponentCreator('/build/index.html/blog/hola','b43'),
  exact: true,
},
{
  path: '/build/index.html/blog/tags',
  component: ComponentCreator('/build/index.html/blog/tags','ecf'),
  exact: true,
},
{
  path: '/build/index.html/blog/tags/docusaurus',
  component: ComponentCreator('/build/index.html/blog/tags/docusaurus','069'),
  exact: true,
},
{
  path: '/build/index.html/blog/tags/facebook',
  component: ComponentCreator('/build/index.html/blog/tags/facebook','e46'),
  exact: true,
},
{
  path: '/build/index.html/blog/tags/hello',
  component: ComponentCreator('/build/index.html/blog/tags/hello','b96'),
  exact: true,
},
{
  path: '/build/index.html/blog/tags/hola',
  component: ComponentCreator('/build/index.html/blog/tags/hola','257'),
  exact: true,
},
{
  path: '/build/index.html/blog/welcome',
  component: ComponentCreator('/build/index.html/blog/welcome','755'),
  exact: true,
},
{
  path: '/build/index.html/markdown-page',
  component: ComponentCreator('/build/index.html/markdown-page','07d'),
  exact: true,
},
{
  path: '/build/index.html/my-react-page',
  component: ComponentCreator('/build/index.html/my-react-page','b62'),
  exact: true,
},
{
  path: '/build/index.html/docs',
  component: ComponentCreator('/build/index.html/docs','eed'),
  
  routes: [
{
  path: '/build/index.html/docs/intro',
  component: ComponentCreator('/build/index.html/docs/intro','739'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/build/index.html/docs/tutorial-basics/congratulations','10e'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/build/index.html/docs/tutorial-basics/create-a-blog-post','fc9'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/build/index.html/docs/tutorial-basics/create-a-document','040'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/build/index.html/docs/tutorial-basics/create-a-page','170'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/build/index.html/docs/tutorial-basics/deploy-your-site','47d'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/build/index.html/docs/tutorial-basics/markdown-features','b93'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/build/index.html/docs/tutorial-extras/manage-docs-versions','940'),
  exact: true,
},
{
  path: '/build/index.html/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/build/index.html/docs/tutorial-extras/translate-your-site','fab'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
