import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig(({ command }) => ({
  lang: 'zh-cmn-Hans',
  base: command === 'build' ? '/page__package-utils/' : '',
  lastUpdated: true,
  title: 'NPM Package',
  description: 'NPM Package',
  themeConfig: {
    siteTitle: '首页',
    lastUpdatedText: '最后更新时间',
    outline: 'deep',
    outlineBadges: false,
    outlineTitle: '目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '用例', link: '/examples/' },
    ],

    sidebar: [
      {
        text: '安装',
        link: '/examples/install',
      },
      {
        text: '用例',
        items: [
          { text: 'index', link: '/examples/index' },
          { text: 'unique', link: '/examples/unique' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangguanl/package__utils' },
    ],
  },
}));
