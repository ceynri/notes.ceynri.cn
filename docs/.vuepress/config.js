// 侧边栏
const sidebar = require('./config/sidebar');

// 导航栏
const nav = [
  {
    text: '笔记',
    items: [
      {
        text: '笔记导航',
        link: '/notes/',
      },
      {
        text: 'JavaScript',
        link: '/notes/javascript/',
      },
      {
        text: 'CSS',
        link: '/notes/css/',
      },
      {
        text: 'HTML',
        link: '/notes/html/',
      },
      {
        text: '网络',
        link: '/notes/network/',
      },
      {
        text: '算法',
        link: '/notes/algorithm/',
      },
      {
        text: '工具',
        link: '/notes/tools/',
      },
    ],
  },
  // {
  //     text: '随笔',
  //     link: '/essays/'
  // },
  {
    text: '最近',
    link: '/pages/recent',
  },
  {
    text: '留言',
    link: '/pages/msg-board',
  },
  {
    text: '关于',
    link: '/pages/about',
  },
  {
    text: '主页',
    link: 'https://www.ceynri.cn',
  },
  {
    text: 'Github',
    link: 'https://www.github.com/ceynri',
  },
];

const config = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '山风笔记集',
      description: '记录并分享个人所整理的学习知识的笔记与教程',
    },
  },
  head: [
    // 网站图标
    [
      'link',
      {
        rel: 'icon',
        href: '/imgs/favicon.ico',
      },
    ],
    // gtag.js
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-158846445-2',
      },
    ],
    [
      'script',
      {},
      `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-158846445-2');
        `,
    ],
  ],
  // 主题
  themeConfig: {
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    // 嵌套的标题链接深度，默认的深度为1
    sidebarDepth: 2,
    // 随标题链接自动更新URL Hash值
    activeHeaderLinks: true, // 默认值：true
    // 最后更新时间
    lastUpdated: '上次更新',
  },
};

module.exports = config;
