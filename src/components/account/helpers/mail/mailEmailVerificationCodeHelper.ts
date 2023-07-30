import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailEmailVerificationCodeHelper = async (
  firstName: string,
  email: string,
  emailVerificationCode: number
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isEmailVerificationCodeSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: PostmarkConfig.template.emailVerificationCode.id,
      To: email,
      TemplateModel: {
        emailVerificationCode: emailVerificationCode,
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
        isEmailVerificationCodeSent = false;
      }
      if (success) {
        payload = success;
        isEmailVerificationCodeSent = true;
      }
    }
  );

  if (isEmailVerificationCodeSent) {
    return {
      success: true,
      message: "Email verification code sent",
      payload: payload,
    };
  } else {
    return {
      sucess: false,
      message: "Email verification code not sent",
      payload: payload,
    };
  }
};
