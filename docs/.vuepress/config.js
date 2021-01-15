module.exports = {
  base: '/wheels/',
  title: 'Blue',
  description: 'For Love',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/get-started/' },
      { text: '交流', link: 'https://google.com' },
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: ['install/', '/get-started/'],
      },
      {
        title: '组件',
        collapsable: false,
        children: ['components/icon', 'components/layout', 'components/button', 'components/toast', 'components/tabs', 'components/popover', 'components/collapse', 'components/grid'],
      },
    ],
  },
}
