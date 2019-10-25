#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# git config --global user.name "ceynri"
# git config --global user.email "347670115@qq.com"

# git remote add origin git@github.com:ceynri/ceynri.github.io.git

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:ceynri/ceynri.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 返回上一次的工作目录
cd -
