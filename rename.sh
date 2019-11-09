#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成文章最后更新时间 ###################

mv docs/notes/.git docs/notes/origin.git
git add -A
git commit -m 'update updated time'

mv docs/notes/origin.git docs/notes/.git
