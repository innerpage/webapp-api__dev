import * as postmark from "postmark";
import { ConfigVar } from "../../../../global/vars";

export const mailAccountChangeConfirmationHelper = async (
  email: string,
  field: string,
  name: string
) => {
  const postmarkClient = new postmark.Client(ConfigVar.postmark.token);
  let isAccountChangeConfirmationSent: boolean = false;
  let payload: any;

  await postmarkClient.sendEmailWithTemplate(
    {
      From: `${ConfigVar.app.name} no-reply@${ConfigVar.app.domain}`,
      TemplateId: ConfigVar.postmark.template.accountChangeConfirmation.id,
      To: email,
      TemplateModel: {
        name: name,
        field: field,
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
