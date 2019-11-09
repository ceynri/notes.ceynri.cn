#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文章最后更新时间 ###################

mkdir docs/notes/origin.git
mv docs/notes/.git/* docs/notes/origin.git
rm -rf docs/notes/.git

git add -A
git commit -m 'update updated time'

mkdir docs/notes/.git
mv docs/notes/origin.git/* docs/notes/.git
rm -rf docs/notes/origin.git
