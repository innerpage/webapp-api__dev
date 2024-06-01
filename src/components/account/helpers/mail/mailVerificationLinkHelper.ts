import * as postmark from "postmark";
import { AppVar } from "../../../../global/vars";

export const mailVerificationLinkHelper = async (
  name: string,
  email: string,
  verificationLink: string,
  mailType: string
) => {
  const postmarkClient = new postmark.Client(AppVar.postmark.token);
  let isVerificationLinkSent: boolean = false;
  let payload: any;
  let templateId: number = 0;

  if (mailType === "emailVerificationLink") {
    templateId = AppVar.postmark.template.emailVerificationLink.id;
  } else if (mailType === "passwordResetLink") {
    templateId = AppVar.postmark.template.passwordResetLink.id;
  }

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppVar.app.name} no-reply@${AppVar.app.domain}`,
      TemplateId: templateId,
      To: email,
      TemplateModel: {
        verificationLink: verificationLink,
        name: name,
        app: {
          name: AppVar.app.name,
          url: {
            website: AppVar.app.website.url,
          },
        },
        businessName: AppVar.app.owner.name,
        businessAddress: AppVar.app.owner.contact.address,
        appSupportUrl: AppVar.app.contact.url,
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
    message: `✅ Verification link sent to ${email}`,
    payload: payload,
  };
};
