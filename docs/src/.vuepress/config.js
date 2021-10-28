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
    heroImage: "/images/hero.png",
    googleAnalytics: "UA-211335054-1",
    summary: true,
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'el-icon-house'
      },
      {
        text: 'Video Games',
        link: '/games/',
        icon: 'el-icon-folder'
      },
      {
        text: 'Anime',
        link: '/anime/',
        icon: 'el-icon-folder'
      },
      {
        text: 'Devotions',
        link: '/devotions/',
        icon: 'el-icon-folder'
      },
      {
        text: 'Projects',
        link: '/projects/',
        icon: 'el-icon-folder'
      }
    ],
    about: {
      fullName: 'MilkTruckMark',
      bio: 'Just a guy who loves video games, anime, and Jesus!',
      image: '/images/sprite_avatar.PNG'
    },
    socialShare: true,
    socialShareNetworks: ["facebook", "twitter"],
    footer: {
      contact: [
        {
          type: 'twitch',
          link: 'https://twitch.tv/MilkTruckGaming'
        },
        {
          type: 'github',
          link: 'https://github.com/Gamermaker-dev',
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
    }
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
