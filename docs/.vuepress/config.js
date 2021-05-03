// 网页的头信息
const head = require('./config/head');
// 插件
const plugins = require('./config/plugins');
// 侧边栏
const sidebar = require('./config/sidebar');
// 导航栏
const nav = require('./config/nav');

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '山风笔记集',
      description: '记录并分享个人所整理的学习知识的笔记与教程',
    },
  },
  head,
  plugins,
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
