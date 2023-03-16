import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '用例', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '用例',
        items: [{ text: 'unique', link: '/unique' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangguanl/package__utils' },
    ],
  },
});
