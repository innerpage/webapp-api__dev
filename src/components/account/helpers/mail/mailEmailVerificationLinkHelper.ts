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
      TemplateId: PostmarkConfig.template.emailVerificationLink.id,
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

  if (isEmailVerificationLinkSent) {
    return {
      success: true,
      message: "Email verification link sent",
      payload: payload,
    };
  } else {
    return {
      sucess: false,
      message: "Email verification link not sent",
      payload: payload,
    };
  }
};
