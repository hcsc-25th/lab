module.exports = {
  title: 'HCSC LAB 竹中科研25屆',
  description: '好玩又有趣的科學知識和科學實驗在竹中科研！',
  base: '/lab/',
  head: [
    ['link', { rel: 'icon', href: 'https://hcsc-25th.github.io/about/img/hcsc-lab-logo.png' }]
  ],
  themeConfig: {
    logo: 'https://hcsc-25th.github.io/about/img/hcsc-lab-logo.png',
    nav: [
      { text: '竹中科研 主網站', link: 'https://hcsc-25th.github.io/' },
      { text: 'HCSC BLOG', link: 'https://hcsc-25th.github.io/blog/' },
      { text: '竹中科研 連結頁面', link: 'https://hcsc-25th.github.io/s/' },
    ],
    sidebar: {
      '/experiment/': [
        '',
        'lab-001'
      ],
      '/trivia/': [
        '',
      ],
      '/turning-point/': [
        '',
      ],
      '/': [
        '',
      ]
    },
    sidebarDepth: 2,
    lastUpdated: '最後Commit',
    smoothScroll: true
  }
}