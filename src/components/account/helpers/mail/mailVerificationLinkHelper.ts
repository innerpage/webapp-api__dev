import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailVerificationLinkHelper = async (
  name: string,
  email: string,
  verificationLink: string,
  mailType: string
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isVerificationLinkSent: boolean = false;
  let payload: any;
  let templateId: number = 0;

  if (mailType === "emailVerificationLink") {
    templateId = PostmarkConfig.template.id.emailVerificationLink;
  } else if (mailType === "passwordResetLink") {
    templateId = PostmarkConfig.template.id.passwordResetLink;
  }

  console.log("");
  console.log(`mailType: ${mailType}`);
  console.log(`Template ID: ${templateId}`);
  console.log("");

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: templateId,
      To: email,
      TemplateModel: {
        verificationLink: verificationLink,
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
        isVerificationLinkSent = false;
      }

      if (success) {
        payload = success;
        isVerificationLinkSent = true;
      }
    }
  );

  if (!isVerificationLinkSent) {
    return {
      success: false,
      message: "❌ Verification link not sent",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Verification link sent",
    payload: payload,
  };
};
