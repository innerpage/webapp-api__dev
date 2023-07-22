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
  `App_Name`
  `App_Website_Url`
  `App_Url`
  `App_Email`
  `App_Support_Url`
  `App_Tos_Url`
  `App_PrivacyPolicy_Url` `App_CancellationAndRefund_Url`
  `App_SessionKey_Name`
  `App_Business_Name`
  `App_Business_Website_Url`
  `App_Business_Address`
  `App_Business_Email`
  <hr/>

  **Express Session**
  `ExpressSession_Name`
  `ExpressSession_Secret`
  `ExpressSession_TImeout`
  <hr/>

  **Node**
  `Node_Env`
  `Node_Port`
  <hr/>

  **Postgres**
  `Postgres_Host`
  `Postgres_Port`
  `Postgres_Database`
  `Postgres_User`
  `Postgres_Password`
  <hr/>

  **Postmark**
  `Postmark_Token`
  <hr/>

  **Redis**
  `Redis_Host`
  `Redis_Port`
   <hr/>

  **Stripe**
  `Stripe_PublicKey`
  `Stripe_SecretKey`
  `Stripe_WebhookSecret`
  `Stripe_ProcessingFee`

## Changes in <u>build.sh</u>

- Change **git remote** for <u>prod repo</u>
