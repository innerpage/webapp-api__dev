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
  `APP_WEBSITE`
  `APP_URL`
  `APP_EMAIL`
  `APP_SUPPORT_URL`
  `APP_TOS`
  `APP_PRIVACY_POLICY` `APP_CANCELLATION_AND_REFUND`
  `APP_SESSION_KEY`
  `BUSINESS_NAME`
  `BUSINESS_WEBSITE`
  `BUSINESS_ADDRESS`
  `BUSINESS_EMAIL`
  <hr/>

  **Express Session**
  `EXPRESS_SESSION_NAME`
  `EXPRESS_SESSION_SECRET`
  `ExpressSession_Timeout`
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
