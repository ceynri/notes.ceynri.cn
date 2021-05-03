const conf = require('./secret.json');

module.exports = [
  // 因服务迁移，取消 gitalk 评论功能
  // [
  //   'vuepress-plugin-comment',
  //   {
  //     choosen: 'gitalk',
  //     options: {
  //       clientID: conf.clientID,
  //       clientSecret: conf.clientSecret,
  //       repo: 'ceynri.github.io',
  //       owner: 'ceynri',
  //       admin: ['ceynri'],
  //       title: '「评论」<%- frontmatter.title %>',
  //       id: '<%- window.location.pathname %>',
  //       distractionFreeMode: false,
  //     },
  //   },
  // ],
];
