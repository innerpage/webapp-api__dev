import * as postmark from "postmark";
import { Var } from "../../../../global/var";

export const mailVerificationLink = async (
  name: string,
  email: string,
  verificationLink: string,
  mailType: string
) => {
  const postmarkClient = new postmark.Client(Var.postmark.token);
  let isSuccessful: boolean = false;
  let returnData: any;
  let templateId: number = 0;

  if (mailType === "emailVerificationLink") {
    templateId = Var.postmark.template.emailVerificationLink.id;
  } else if (mailType === "passwordResetLink") {
    templateId = Var.postmark.template.passwordResetLink.id;
  }

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${Var.app.name} no-reply@${Var.app.domain}`,
      TemplateId: templateId,
      To: email,
      TemplateModel: {
        verificationLink: verificationLink,
        name: name,
        app: Var.app,
      },
    },
    (error, success) => {
      if (error) {
        returnData = error;
        isSuccessful = false;
      }

      if (success) {
        returnData = success;
        isSuccessful = true;
      }
    }
  );

  return {
    success: isSuccessful,
    message: isSuccessful
      ? `${Var.app.emoji.success} Verification link sent to ${email}`
      : `${Var.app.emoji.failure} Could not send verification link. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
