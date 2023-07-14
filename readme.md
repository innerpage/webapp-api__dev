## Git

- Change project remote

## package.json

- Change `name`
- Change `repository.url`

## Copy .env-bak to .env, then add following values

- Add env values for Node <br/> `NODE_ENV` <br/>`NODE_PORT`
- Add env values for Postgres <br/> `POSTGRES_HOST`<br/> `POSTGRES_PORT`<br/> `POSTGRES_DATABASE`<br/> `POSTGRES_USER`<br/> `POSTGRES_PASSWORD`
- Add env values for Postmark <br/> `POSTMARK_TOKEN`
- Add env values for Redis <br/> `REDIS_HOST`<br/> `REDIS_PORT`
- Add env values for Session <br/> `SESSION_NAME`<br/> `SESSION_SECRET`<br/> `SESSION_TIMEOUT`
- Add env values for Stripe <br/> `PUBLIC_KEY`<br/> `SECRET_KEY`<br/> `WEBHOOK_SECRET` `PROCESSING_FEE`
- Add env values for App<br/> `APP_PORT`<br/> `APP_NAME`<br/> `APP_WEBSITE_URL`<br/> `APP_URL` `APP_EMAIL`<br/> `BUSINESS_NAME`<br/> `BUSINESS_WEBSITE_URL`<br/> `BUSINESS_ADDRESS`<br/> `BUSINESS_EMAIL`

## build.sh

- Change remote to prod_repo

## /src/config/server/config_Cors.ts

- Change `config_Cors.origin` (if required)
