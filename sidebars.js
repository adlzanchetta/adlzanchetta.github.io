/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}]
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Intro',
      id: 'portfolio'
    },
    {
      type: 'category',
      label: 'My Authorship',
      link: {
        type: 'generated-index',
        title: 'My Authorship',
        description: "Some projects I've started from scratch.",
        slug: '/authorship'
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'authorship'
        }
      ]
    },
    {
      type: 'category',
      label: 'My Contributions',
      link: {
        type: 'generated-index',
        title: 'My Contributions',
        description: 'Just because open-source!',
        slug: '/contributions'
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'contributions'
        }
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
