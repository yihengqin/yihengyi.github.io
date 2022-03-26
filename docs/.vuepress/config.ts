import { defineConfig } from 'vuepress/config';

export default defineConfig({
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    logo: '/assets/img/logo-blog.png',
    nav: [
      { text: '概述', link: '/' },
      {
        text: '语言',
        items: [
          { text: 'java', link: '/lang/java/' },
          { text: 'javascript', link: '/lang/javascript/' }
        ]
      },
      {
        text: '工具',
        items: [
          { text: '环境配置', link: '/tools/envsetting/' }
        ]
      },
      { text: 'about me', link: '/about' }
    ],
    sidebar: {
      '/lang/java/': [
        {
          title: '基础',
          children: ['base/type', 'base/while']
        },
        {
          title: '高级',
          children: ['advance/jvm', 'advance/io']
        }
      ],
      '/lang/javascript/': [
        {
          title: 'javascript',
          children: ['function']
        }
      ],
      '/tools/envsetting/': [
        {
          title: '环境配置',
          children: ['terminal', 'vim']
        }
      ],
      '/': ['']
    }
  },
  title: '刘成',
  description: 'blog'
});
