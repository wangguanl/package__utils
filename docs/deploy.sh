set -e

npm run build

cd .vitepress/dist

git init
git add -A
git commit -m "自动部署"
git push -f git@github.com:wangguanl/page__package-utils.git master:gh-pages


