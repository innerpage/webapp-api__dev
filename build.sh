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
cp {.env,.env-blank,.gitignore,package.json} ../prod

# Install build modules
cd ..
cd prod
npm install

# Initialize Git
git init
git add --all
git commit -m "Pre-deploy"
git remote add origin git@github.com-slim-dl:slim-dl/app-api-prod.git

# Push codebase
git push origin main --force

# Restore
cd ..
cd dev