const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MilkTruckThoughts',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#7a01ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: 'modern-blog',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sitemap: true,
    hostname: "https://blog.milktruckgaming.com/",
    heroImage: "/images/hero.pngpublic",
    googleAnalytics: "G-F2VHJMXFFS",
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ['/', 'Home'],
            ['/using-vue', 'Using Vue']
          ]
        }
      ],
    },
    socialShare: true,
    socialShareNetworks: ["facebook", "twitter", "instagram"]
  },

  footer: {
    contact: [
      {
        type: 'github',
        link: 'https://github.com/Gamermaker-dev',
      },
      {
        type: 'twitch',
        link: 'https://twitch.tv/MilkTruckGaming'
      }
    ],
    copyright: [
      {
        text: 'Privacy Policy',
        link: 'https://policies.google.com/privacy?hl=en-US',
      },
      {
        text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        link: '',
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    'crisp',
    'seo',
    'smooth-scroll',
    'reading-progress',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'social-share',
    '@vuepress/google-analytics',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://blog.milktruckgaming.com',
      }
    ]
  ]
}
