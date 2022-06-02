const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: '[rsapkf/42]',
  titleDelimiter: '::',
  tagline: "@rsapkf's wiki.",
  url: 'https://rsapkf-wiki.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'rsapkf',
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      style: 'dark',
      title: '[rsapkf/42]',
      hideOnScroll: true,
      logo: {
        alt: 'Logo',
        src: 'img/undraw/notebook.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'links/programming',
          position: 'left',
          label: '/links',
        },
        {
          type: 'doc',
          docId: 'notes/unix/unix',
          position: 'left',
          label: '/notes',
        },
        {
          type: 'dropdown',
          label: 'etc',
          position: 'left',
          items: [
            {
              label: 'Homepage',
              href: 'https://rsapkf.xyz/',
            },
            {
              label: 'Weblog',
              href: 'https://rsapkf.xyz/weblog/',
            },
            {
              label: 'Dotfiles',
              href: 'https://github.com/rsapkf/config/',
            },
            {
              label: 'CFOP algs',
              href: 'https://github.com/rsapkf/20/',
            },
          ],
        },
        {
          href: 'https://github.com/rsapkf/42/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      appId: '96LFYP4M12',
      apiKey: '5bf10e4bb420fac17c5613787a883fb9',
      indexName: 'rsapkf',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick links',
          items: [
            {
              label: 'sed',
              to: '/notes/unix/sed/',
            },
            {
              label: 'awk',
              to: '/notes/unix/awk/',
            },
            {
              label: 'jq',
              to: '/notes/unix/jq/',
            },
            {
              label: 'fzf',
              to: '/notes/unix/fzf/',
            },
            {
              label: 'PGP',
              to: '/notes/unix/pgp/',
            },
            {
              label: 'Speedcubing',
              to: '/notes/recreational-mathematics/speedcubing/',
            },
            {
              label: 'Chess',
              to: '/notes/recreational-mathematics/chess/',
            },
            {
              label: 'Mnemonics',
              to: '/notes/recreational-mathematics/mnemonics/',
            },
            {
              label: 'Poems',
              to: '/notes/misc/poems/',
            },
          ],
        },
        {
          title: 'Categories',
          items: [
            {
              label: '*nix',
              to: 'notes/unix/',
            },
            {
              label: 'Programming',
              to: 'notes/programming/python/',
            },
            {
              label: 'Recreational mathematics',
              to: 'notes/recreational-mathematics/speedcubing/',
            },
            {
              label: 'Misc',
              to: 'notes/misc/websites',
            },
            {
              label: 'Book notes',
              to: 'notes/books/python-tricks',
            },
          ],
        },
        {
          title: 'Etc',
          items: [
            {
              label: '?',
              href: "https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} <a href="https://rsapkf.xyz/">rsapkf</a>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rsapkf/42/blob/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/main.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
}
