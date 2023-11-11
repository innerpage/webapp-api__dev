## Clone repo

- `git clone git@github.com-projckt:projckt/starter_webapp-api-dev.git dev`
- `cd dev`

## Edit repo remote

- `git remote set-url origin git@github.com-{username}:{username}/{repo_name}-api-dev.git`

## Install dependencies

- `npm install`

## Edit ./package.json

- Change `name`
- Change `repository.url`

## Edit ./.env

- Copy `.env-bak` to `.env`
- Edit `.env` values
  <br/><br/>
  **App** <br/>
  `APP_NAME` <br/>
  `APP_WEBSITE` <br/>
  `APP_URL` <br/>
  `APP_EMAIL` <br/>
  `APP_SUPPORT_URL` <br/>
  `APP_TOS` <br/>
  `APP_PRIVACY_POLICY` <br/>
  `APP_CANCELLATION_AND_REFUND` <br/>
  `APP_SESSION_KEY` <br/>
  `APP_MAILER_DOMAIN` <br/>
  `BUSINESS_NAME` <br/>
  `BUSINESS_WEBSITE` <br/>
  `BUSINESS_ADDRESS` <br/>
  `BUSINESS_EMAIL` <br/>
  <hr/>

  **Express Session** <br/>
  `EXPRESS_SESSION_NAME` <br/>
  `EXPRESS_SESSION_SECRET` <br/>
  `EXPRESS_SESSION_TIMEOUT`
    <hr/>

  **Node** <br/>
  `NODE_ENV` <br/>
  `NODE_PORT` <br/>
    <hr/>

  **Postgres** <br/>
  `POSTGRES_HOST` <br/>
  `POSTGRES_PORT` <br/>
  `POSTGRES_DATABASE` <br/>
  `POSTGRES_USER` <br/>
  `POSTGRES_PASSWORD` <br/>
    <hr/>

  **Postmark** <br/>
  `POSTMARK_TOKEN` <br/>
  `POSTMARK_TEMPLATE_EMAIL_VERIFICATION_CODE` <br/>
  `POSTMARK_TEMPLATE_PASSWORD_RESET_CODE` <br/>
  `POSTMARK_TEMPLATE_CONFIRM_PASSWORD_RESET` <br/>
    <hr/>

  **Redis** <br/>
  `REDIS_HOST` <br/>
  `REDIS_PORT` <br/>
     <hr/>

  **Stripe** <br/>
  `STRIPE_PUBLIC_KEY` <br/>
  `STRIPE_SECRET_KEY` <br/>
  `STRIPE_WEBHOOK_SECRET` <br/>
  `STRIPE_PROCESSING_FEE` <br/>

## Edit ./build.sh

- Change production repo to `git remote set-url origin git@github.com-{username}:{username}/{repo_name}-api-prod.git`
