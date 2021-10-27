#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run docs:build
# navigate into the build output directory
cd src/.vuepress/dist
# if you are deploying to a custom domain
echo 'blog.milktruckgaming.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Gamermaker-dev/milktruckgaming-blog.git master:gh-pages
cd -