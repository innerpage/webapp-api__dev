import * as postmark from "postmark";
import { AppConfig, PostmarkConfig } from "../../../../config";

export const mailAccountChangeConfirmationHelper = async (
  email: string,
  field: string,
  name: string
) => {
  const postmarkClient = new postmark.Client(PostmarkConfig.token);
  let isAccountChangeConfirmationSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppConfig.appName} no-reply@${AppConfig.appMailerDomain}`,
      TemplateId: PostmarkConfig.template.id.accountChangeConfirmation,
      To: email,
      TemplateModel: {
        name: name,
        field: field,
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
        isAccountChangeConfirmationSent = false;
      }

      if (success) {
        payload = success;
        isAccountChangeConfirmationSent = true;
      }
    }
  );

  if (!isAccountChangeConfirmationSent) {
    return {
      success: false,
      message: "❌ Account change confirmation not sent",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Account change confirmation sent",
    payload: payload,
  };
};
