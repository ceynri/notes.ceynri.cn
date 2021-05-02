const javascript = [
  '',
  {
    title: 'JavaScript 编程语言',
    collapsable: false,
    children: [
      {
        title: '基础知识',
        collapsable: false,
        children: [
          '/notes/javascript/section-1/basic-introduction',
          '/notes/javascript/section-1/function',
          '/notes/javascript/section-1/data-type',
          '/notes/javascript/section-1/objects-1',
          '/notes/javascript/section-1/objects-2',
          '/notes/javascript/section-1/array',
        ],
      },
      {
        title: '进阶知识',
        collapsable: false,
        children: [
          '/notes/javascript/section-1/type-conversion',
          '/notes/javascript/section-1/higher-order-functions',
          '/notes/javascript/section-1/exception-handling',
        ],
      },
      {
        title: 'ES6',
        collapsable: false,
        children: [
          '/notes/javascript/section-1/es6/arrow-function',
          '/notes/javascript/section-1/es6/three-point-operator',
          '/notes/javascript/section-1/es6/destructuring-assignment',
          '/notes/javascript/section-1/es6/promise',
          '/notes/javascript/section-1/es6/async',
          '/notes/javascript/section-1/es6/class',
          '/notes/javascript/section-1/es6/map&set',
          '/notes/javascript/section-1/es6/symbol',
          // '/notes/javascript/section-1/es6/es6',
        ],
      },
      {
        title: '更多的数据类型',
        collapsable: false,
        children: ['/notes/javascript/section-1/json'],
      },
    ],
  },
  {
    title: 'JavaScript 与 浏览器',
    collapsable: false,
    children: [
      '/notes/javascript/section-2/introduction',
      '/notes/javascript/section-2/html-dom-node',
      '/notes/javascript/section-2/html-dom-event',
      '/notes/javascript/section-2/html-dom-ex',
      '/notes/javascript/section-2/bom',
    ],
  },
  {
    title: 'Vue 框架',
    collapsable: false,
    children: ['/notes/javascript/vue/basic-grammar'],
  },
  {
    title: '其他',
    collapsable: true,
    children: [
      '/notes/javascript/others/coding-standard',
      '/notes/javascript/others/api-cheat-sheet',
      '/notes/javascript/others/debug&test',
      '/notes/javascript/others/performance',
    ],
  },
];

const css = [
  '',
  '/notes/css/cheat-sheet',
  '/notes/css/flex',
  '/notes/css/grid',
  '/notes/css/centering',
  '/notes/css/sass',
  '/notes/css/questions',
];

const html = [
  '',
  '/notes/html/html-tag',
  '/notes/html/h5-structure-tag',
  '/notes/html/emmet',
];

const network = [
  '',
  '/notes/network/from-url-to-loaded',
  '/notes/network/cache',
  '/notes/network/dns',
  '/notes/network/transport-layer-protocol',
  '/notes/network/http',
];

const algorithm = [
  '',
  '/notes/algorithm/leetcode',
  '/notes/algorithm/sort',
  '/notes/algorithm/dichotomy',
];

const git = [
  '/notes/tools/git/git-command',
  '/notes/tools/git/upload2github',
  '/notes/tools/git/commit-standard',
  '/notes/tools/git/abbr',
];

const markdown = [''];

const database = [''];

module.exports = {
  '/notes/javascript/': javascript,
  '/notes/css/': css,
  '/notes/html/': html,
  '/notes/network/': network,
  '/notes/algorithm/': algorithm,
  '/notes/tools/git/': git,
  '/notes/tools/markdown/': markdown,
  '/notes/database/': database,
};
