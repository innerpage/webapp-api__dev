import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailPasswordResetCodeHelper = async (
  firstName: string,
  email: string,
  passwordResetCode: number
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isPasswordResetCodeSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: PostmarkConfig.template.passwordResetCode.id,
      To: email,
      TemplateModel: {
        passwordResetCode: passwordResetCode,
        firstName: firstName,
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
        isPasswordResetCodeSent = false;
      }

      if (success) {
        payload = success;
        isPasswordResetCodeSent = true;
      }
    }
  );

  if (isPasswordResetCodeSent) {
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
