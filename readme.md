## Project initialization

- `npm install` inside the project directory
- Change **git remote** of the project directory

## Changes in <u>package.json</u>

- Change **name**
- Change **repository.url**

## Prepare <u>.env</u>

- Copy **.env-bak** to **.env**
- Add values to **.env**<br/>
  **App**
  `APP_NAME`
  `APP_WEBSITE_URL`
  `APP_URL`
  `APP_EMAIL`
  `APP_SUPPORT_URL`
  `APP_TOS_URL`
  `APP_PRIVACYPOLICY_URL` `APP_CANCELLATIONANDREFUND_URL`
  `APP_SESSIONKEY_NAME`
  `BUSINESS_NAME`
  `BUSINESS_WEBSITE_URL`
  `BUSINESS_ADDRESS`
  `BUSINESS_EMAIL`
  <hr/>

  **Express Session**
  `EXPRESS_SESSION_NAME`
  `EXPRESS_SESSION_SECRET`
  `EXPRESS_SESSION_TIMEOUT`
  <hr/>

  **Node**
  `NODE_ENV`
  `NODE_PORT`
  <hr/>

  **Postgres**
  `POSTGRES_HOST`
  `POSTGRES_PORT`
  `POSTGRES_DATABASE`
  `POSTGRES_USER`
  `POSTGRES_PASSWORD`
  <hr/>

  **Postmark**
  `POSTMARK_TOKEN`
  <hr/>

  **Redis**
  `REDIS_HOST`
  `REDIS_PORT`
   <hr/>

  **Stripe**
  `STRIPE_PUBLIC_KEY`
  `STRIPE_SECRET_KEY`
  `STRIPE_WEBHOOK_SECRET`
  `STRIPE_PROCESSING_FEE`

## Changes in <u>build.sh</u>

- Change **git remote** for <u>prod repo</u>
