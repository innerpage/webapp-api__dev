# Delete previous /prod
cd ..
rm -rf prod

# Build the codebase
cd dev
npm run build

# Move /prod out of /dev
mv prod ../

# Copy configs to /prod
cp {.env,.env-bak,.gitignore,package.json} ../prod

# Install npm dependencies in /prod
cd ..
cd prod
npm install

# Initialize git in /prod
git init
git add --all
git commit -m "Prod build - `date`"
git remote add origin git@github.com-projckt:projckt/starter_webapp-api-prod.git

# Push codebase to remote
git push -f origin main
