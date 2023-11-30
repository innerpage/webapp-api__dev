import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailPasswordResetConfirmationHelper = async (
  name: string,
  email: string
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isPasswordResetConfirmationSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: PostmarkConfig.template.passwordResetConfirmation.id,
      To: email,
      TemplateModel: {
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
        isPasswordResetConfirmationSent = false;
      }

      if (success) {
        payload = success;
        isPasswordResetConfirmationSent = true;
      }
    }
  );

  if (isPasswordResetConfirmationSent) {
    return {
      success: true,
      message: "Password rest code sent",
      payload: payload,
    };
  } else {
    return {
      success: false,
      message: "Password reset code not sent",
      payload: payload,
    };
  }
};
