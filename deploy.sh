#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

scp -r ./docs/.vuepress/dist/* root@47.116.71.32:/www/wwwroot/docs.ceynri.cn/
