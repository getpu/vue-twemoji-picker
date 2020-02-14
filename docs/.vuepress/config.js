module.exports = {
  title: 'Vue Twemoji Picker',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'My Portfolio', link: 'https://kevinfaveri.now.sh/' }
    ],
    sidebar: {
      '/docs/': getSidebar('Docs'),
    }
  },
  plugins: ['vuepress-plugin-smooth-scroll', 'vuepress-plugin-nprogress', '@vuepress/back-to-top'],
}

function getSidebar(groupName) {
  return [
    {
      title: groupName,
      collapsable: false,
      children: [
        '',
        'getting-started/',
        'twemoji-picker-api/',
        'twemoji-textarea-api/',
        'emoji-datasets/',
        'localization/',
        'services/',
        'changelog/',
        'roadmap/',
      ]
    }
  ]
}

// TODO: API SIDEBAR