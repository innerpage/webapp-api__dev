import * as postmark from "postmark";
import { ConfigVar } from "../../../../global/vars";

export const mailVerificationLinkHelper = async (
  name: string,
  email: string,
  verificationLink: string,
  mailType: string
) => {
  const postmarkClient = new postmark.Client(ConfigVar.postmark.token);
  let isVerificationLinkSent: boolean = false;
  let payload: any;
  let templateId: number = 0;

  if (mailType === "emailVerificationLink") {
    templateId = ConfigVar.postmark.template.emailVerificationLink.id;
  } else if (mailType === "passwordResetLink") {
    templateId = ConfigVar.postmark.template.passwordResetLink.id;
  }

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${ConfigVar.app.name} no-reply@${ConfigVar.app.domain}`,
      TemplateId: templateId,
      To: email,
      TemplateModel: {
        verificationLink: verificationLink,
        name: name,
        app: {
          name: ConfigVar.app.name,
          url: {
            website: ConfigVar.app.website.url,
          },
        },
        businessName: ConfigVar.business.name,
        businessAddress: ConfigVar.business.contact.address,
        appSupportUrl: ConfigVar.app.contact.url,
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
