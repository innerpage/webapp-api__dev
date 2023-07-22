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
  `App_Privacy_Policy_Url` `App_Cancellation_And_Refund_Url`
  `App_Session_Key_Name`
  `App_Business_Name`
  `App_Business_Website_Url`
  `App_Business_Address`
  `App_Business_Email`
  <hr/>

  **Express Session**
  `Express_Session_Name`
  `Express_Session_Secret`
  `ExpressSession_Timeout`
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
  `Stripe_Public_Key`
  `Stripe_Secret_Key`
  `Stripe_Webhook_Secret`
  `Stripe_Processing_Fee`

## Changes in <u>build.sh</u>

- Change **git remote** for <u>prod repo</u>
