# Cleanup previous prod
rm -rf prod
cd ..
rm -rf prod

# Build
cd dev
npm run build

# Copy build
mv prod ../

# Copy configs
cp {.env,.env-bak,.gitignore,package.json} ../prod

# Install build modules
cd ..
cd prod
npm install

# Initialize Git
git init
git add --all
git commit -m "Deploy build `date`"
git remote add origin git@github.com-projckt:projckt/starter_webapp-api-prod.git

# Push codebase
git push -f origin main

# Restore
cd ..
cd dev