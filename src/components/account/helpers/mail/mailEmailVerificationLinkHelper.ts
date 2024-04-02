import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailEmailVerificationLinkHelper = async (
  name: string,
  email: string,
  emailVerificationLink: string
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isEmailVerificationLinkSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: PostmarkConfig.template.id.emailVerificationLink,
      To: email,
      TemplateModel: {
        emailVerificationLink: emailVerificationLink,
        name: name,
        appWebsiteUrl: AppConfig.appWebsiteUrl,
        appName: AppConfig.appName,
        businessName: AppConfig.businessName,
        businessAddress: AppConfig.businessAddress,
        appSupportUrl: AppConfig.appSupportUrl,
      },
    },
    (error, success) => {
      if (error) {
        payload = error;
        isEmailVerificationLinkSent = false;
      }
      if (success) {
        payload = success;
        isEmailVerificationLinkSent = true;
      }
    }
  );

  if (!isEmailVerificationLinkSent) {
    return {
      sucess: false,
      message: `❌ Could not send verification link. Please contact ${AppConfig.appEmail}`,
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Email verification link sent",
    payload: payload,
  };
};
