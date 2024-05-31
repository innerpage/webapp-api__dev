import * as postmark from "postmark";
import { Vars } from "../../../../global/vars";

export const mailVerificationLinkHelper = async (
  name: string,
  email: string,
  verificationLink: string,
  mailType: string
) => {
  const postmarkClient = new postmark.Client(Vars.postmark.token);
  let isVerificationLinkSent: boolean = false;
  let payload: any;
  let templateId: number = 0;

  if (mailType === "emailVerificationLink") {
    templateId = Vars.postmark.template.emailVerificationLink.id;
  } else if (mailType === "passwordResetLink") {
    templateId = Vars.postmark.template.passwordResetLink.id;
  }

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${Vars.app.name} no-reply@${Vars.app.domain}`,
      TemplateId: templateId,
      To: email,
      TemplateModel: {
        verificationLink: verificationLink,
        name: name,
        app: {
          name: Vars.app.name,
          url: {
            website: Vars.app.website.url,
          },
        },
        businessName: Vars.business.name,
        businessAddress: Vars.business.address,
        appSupportUrl: Vars.app.support.url,
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
