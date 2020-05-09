#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交 .vuepress 修改 ##################

# cd docs/.vuepress

# git add -A
# git commit -m 'update .vuepress'

# cd ../..

# 生成文章最后更新时间 ###################

# 修改.git文件名称（规避权限问题需要使用mkdir+mv）
mkdir docs/notes/origin.git
mv docs/notes/.git/* docs/notes/origin.git
rm -rf docs/notes/.git

# commit以更新文章最后更新时间
git add -A
git commit -m 'update last updated time'

# 复原.git名称
mkdir docs/notes/.git
mv docs/notes/origin.git/* docs/notes/.git
rm -rf docs/notes/origin.git

# 发布到 github page ###################

# 生成静态文件
npm run build
