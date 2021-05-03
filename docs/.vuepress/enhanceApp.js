// const conf = require('./config/secret.json');

// function integrateGitalk(router) {
//     const linkGitalk = document.createElement('link');
//     linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
//     linkGitalk.rel = 'stylesheet';
//     document.body.appendChild(linkGitalk);
//     const scriptGitalk = document.createElement('script');
//     scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
//     document.body.appendChild(scriptGitalk);
//     var path = '';

//     router.afterEach((to) => {
//         if (scriptGitalk.onload) {
//             setTimeout(loadGitalk, 5, to)
//         } else {
//             scriptGitalk.onload = () => {
//                 loadGitalk(to.fullPath);
//             }
//         }
//     });

//     function loadGitalk(to) {
//         if (to.path !== path) {
//             path = to.path;
//             let commentsContainer = document.getElementById('gitalk-container');
//             const $page = document.querySelector('.page');
//             if (commentsContainer && $page) {
//                 $page.removeChild(commentsContainer)
//             }
//             commentsContainer = document.createElement('div');
//             commentsContainer.id = 'gitalk-container';
//             commentsContainer.classList.add('content');
//             if ($page) {
//                 $page.appendChild(commentsContainer);
//                 if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
//                     renderGitalk();
//                 }
//             }
//         }
//     }

//     function renderGitalk() {
//         const gitalk = new Gitalk({
//             clientID: conf.clientID,
//             clientSecret: conf.clientSecret,
//             repo: 'ceynri.github.io',
//             owner: 'ceynri',
//             admin: ['ceynri'],
//             title: getTitle(),
//             id: getId(), // Ensure uniqueness and length less than 50
//             language: 'zh-CN',
//         });
//         gitalk.render('gitalk-container');
//     }

//     // 自定义标题
//     function getTitle() {
//         let title = document.title;
//         return '「评论」' + title.substring(0, title.lastIndexOf("|"));
//     }

//     // 自定义 ID
//     function getId() {
//         let id = location.pathname;
//         if (id[id.length - 1] == '/') {
//             id = id.substr(0, id.length - 1);
//         }
//         let idx1 = id.lastIndexOf("/");
//         let idx2 = id.lastIndexOf("/", idx1 - 1);
//         id = idx2 != -1 ? id.substr(idx2) : id.substr(idx1);
//         if (id.includes(".")) {
//             id = id.substr(0, id.lastIndexOf("."));
//         }
//         if (id.length > 50) {
//             id = '2long-' + id.substr(id.length - 44, 44);
//         }
//         return id;
//     }

//     window.loadGitalk = loadGitalk;
// }

// export default ({
//     Vue,
//     options,
//     router
// }) => {
//     try {
//         document && integrateGitalk(router)
//     } catch (e) {
//         console.error(e.message)
//     }
// }
