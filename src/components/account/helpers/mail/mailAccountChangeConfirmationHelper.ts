import * as postmark from "postmark";
import { AppVar } from "../../../../global/vars";

export const mailAccountChangeConfirmationHelper = async (
  email: string,
  field: string,
  name: string
) => {
  const postmarkClient = new postmark.Client(AppVar.postmark.token);
  let isAccountChangeConfirmationSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${AppVar.app.name} no-reply@${AppVar.app.domain}`,
      TemplateId: AppVar.postmark.template.accountChangeConfirmation.id,
      To: email,
      TemplateModel: {
        name: name,
        field: field,
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
