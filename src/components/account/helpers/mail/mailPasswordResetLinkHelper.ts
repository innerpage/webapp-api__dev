import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailPasswordResetLinkHelper = async (
  name: string,
  email: string,
  passwordResetLink: string
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isPasswordResetLinkSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: PostmarkConfig.template.passwordResetLink.id,
      To: email,
      TemplateModel: {
        passwordResetLink: passwordResetLink,
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
        isPasswordResetLinkSent = false;
      }

      if (success) {
        payload = success;
        isPasswordResetLinkSent = true;
      }
    }
  );

  if (isPasswordResetLinkSent) {
    return {
      success: true,
      message: "✅ Password rest link sent",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "❌ Password reset link not sent",
      payload: payload,
    };
  }
};
