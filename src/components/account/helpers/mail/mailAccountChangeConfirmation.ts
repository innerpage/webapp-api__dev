import * as postmark from "postmark";
import { Var } from "../../../../global/var";

export const mailAccountChangeConfirmation = async (
  email: string,
  field: string,
  name: string
) => {
  const postmarkClient = new postmark.Client(Var.postmark.token);
  let isSuccessful: boolean = false;
  let returnData: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${Var.app.name} no-reply@${Var.app.domain}`,
      TemplateId: Var.postmark.template.accountChangeConfirmation.id,
      To: email,
      TemplateModel: {
        name: name,
        field: field,
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
      ? `${Var.app.emoji.success} Account change confirmation sent`
      : `${Var.app.emoji.failure} Account change confirmation not sent. Please contact ${Var.app.contact.email}`,
    payload: returnData,
  };
};
