import * as postmark from "postmark";
import { config_Postmark } from "../../../../config";

interface obj_Loose {
  [key: string]: any;
}

export const helper_Account__Mail__Code_PasswordReset = async (
  subscriber_Name_First: string,
  subscriber_Email: string,
  code_PasswordReset: number,
  publisher_Website: string,
  publisher_ProductName: string,
  publisher_BusinessName: string,
  publisher_BusinessAddress: string,
  publisher_SupportEmail: string
) => {
  const client_Postmark = new postmark.Client(config_Postmark.token);
  let templateId = 30958891;
  let isSent_PasswordResetCode: boolean = false;
  let returnObj: obj_Loose = {};
  let payload: any;

  await client_Postmark.sendEmailWithTemplate(
    {
      From: `${publisher_ProductName} no-reply@${publisher_Website}`,
      TemplateId: templateId,
      To: subscriber_Email,
      TemplateModel: {
        code_PasswordReset: code_PasswordReset,
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
        isSent_PasswordResetCode = false;
      }

      if (success) {
        payload = success;
        isSent_PasswordResetCode = true;
      }
    }
  );

  if (isSent_PasswordResetCode) {
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
