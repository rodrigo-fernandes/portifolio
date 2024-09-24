#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Novo Deploy'
git push -f git@github.com:rodrigo-fernandes/portifolio.git master:gh-pages

cd -