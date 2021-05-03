module.exports = [
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
];
