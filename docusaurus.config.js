/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cloud3 Documentation',
  tagline: 'Store in IPFS W3Bucket, Decentralized, Guaranteed & Alive.',
  url: 'https://docs.cloud3.cc',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav.png',
  organizationName: 'decooio', // Usually your GitHub org/user name.
  projectName: 'cloud3-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['java'],
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Cloud3 Logo',
        src: 'img/logo.svg',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.

          // editUrl: 'https://github.com/decooio/cloud3-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/decooio/cloud3-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
