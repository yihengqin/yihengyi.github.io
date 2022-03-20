import { defineConfig } from "vuepress/config";

export default defineConfig({
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    logo: "/assets/img/logo-blog.png",
    nav: [
      { text: 'Java', link: '/java/' },
      { text: '工具', link: '/tools/' },
      { text: 'about me', link: '/about'}
    ],
    sidebar: 'auto'
  },
  title: "刘成",
  description: "blog"
});
