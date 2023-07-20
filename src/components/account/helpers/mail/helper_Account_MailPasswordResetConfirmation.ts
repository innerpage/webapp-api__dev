import * as postmark from "postmark";
import { config__Postmark } from "../../../../config";

interface LooseObj {
  [key: string]: any;
}

export const helper_Account_MailPasswordResetConfirmation = async (
  subscriber_Name_First: string,
  subscriber_Email: string,
  publisher_Website: string,
  publisher_ProductName: string,
  publisher_BusinessName: string,
  publisher_BusinessAddress: string,
  publisher_SupportEmail: string
) => {
  const client_Postmark = new postmark.Client(config__Postmark.token);
  let id_Template = 30958892;
  let isSent_PasswordResetConfirmation: boolean = false;
  let returnObj: LooseObj = {};
  let payload: any;

  await client_Postmark.sendEmailWithTemplate(
    {
      From: `${publisher_ProductName} no-reply@${publisher_Website}`,
      TemplateId: id_Template,
      To: subscriber_Email,
      TemplateModel: {
        subscriber_Name_First: subscriber_Name_First,
        publisher_Website: publisher_Website,
        publisher_ProductName: publisher_ProductName,
        publisher_BusinessName: publisher_BusinessName,
        publisher_BusinessAddress: publisher_BusinessAddress,
        publisher_SupportEmail: publisher_SupportEmail,
      },
    },
    (error, success) => {
      if (error) {
        payload = error;
        isSent_PasswordResetConfirmation = false;
      }

      if (success) {
        payload = success;
        isSent_PasswordResetConfirmation = true;
      }
    }
  );

  if (isSent_PasswordResetConfirmation) {
    returnObj.success = true;
    returnObj.message = "Password rest code SENT";
    returnObj.payload = payload;
  } else {
    returnObj.success = false;
    returnObj.message = "Password reset code NOT_SENT";
    returnObj.payload = payload;
  }

  return returnObj;
};
