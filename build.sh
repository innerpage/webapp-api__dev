## Delete old /prod
rm -rf ../prod

## Build codebase
npm run build

# Init prod
mv prod ../
cp {.env,.env-bak,.gitignore,package.json} ../prod
npm --prefix ../prod install

# Initialize git in /prod
git init ../prod
git -C ../prod remote add origin git@github.com-innerpage:innerpage/webapp-api__prod.git

# Push codebase to remote
git -C ../prod add --all
git -C ../prod commit -m "Deploy build `date`"
git -C ../prod push origin main --force
