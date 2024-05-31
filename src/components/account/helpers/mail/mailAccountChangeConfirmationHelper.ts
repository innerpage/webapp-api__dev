import * as postmark from "postmark";
import { Vars } from "../../../../global/vars";

export const mailAccountChangeConfirmationHelper = async (
  email: string,
  field: string,
  name: string
) => {
  const postmarkClient = new postmark.Client(Vars.postmark.token);
  let isAccountChangeConfirmationSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${Vars.app.name} no-reply@${Vars.app.domain}`,
      TemplateId: Vars.postmark.template.accountChangeConfirmation.id,
      To: email,
      TemplateModel: {
        name: name,
        field: field,
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
