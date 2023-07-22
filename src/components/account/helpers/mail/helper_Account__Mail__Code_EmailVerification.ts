import * as postmark from "postmark";
import { Postmark_Config } from "../../../../config";

interface obj_Loose {
  [key: string]: any;
}

export const helper_Account__Mail__Code_EmailVerification = async (
  subscriber_Name_First: string,
  subscriber_Email: string,
  code_EmailVerification: number,
  publisher_Website: string,
  publisher_ProductName: string,
  publisher_BusinessName: string,
  publisher_BusinessAddress: string,
  publisher_SupportEmail: string
) => {
  const client_Postmark = new postmark.Client(Postmark_Config.token);
  let id_Template = 30914127;
  let isSent_VerificationMail: boolean = false;
  let returnObj: obj_Loose = {};
  let payload: any;

  await client_Postmark.sendEmailWithTemplate(
    {
      From: `${publisher_ProductName} no-reply@${publisher_Website}`,
      TemplateId: id_Template,
      To: subscriber_Email,
      TemplateModel: {
        code_EmailVerification: code_EmailVerification,
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
        isSent_VerificationMail = false;
      }

      if (success) {
        payload = success;
        isSent_VerificationMail = true;
      }
    }
  );

  if (isSent_VerificationMail) {
    returnObj.success = true;
    returnObj.message = "Email verification code SENT";
    returnObj.payload = payload;
  } else {
    returnObj.success = false;
    returnObj.message = "Email verification code NOT_SENT";
    returnObj.payload = payload;
  }

  return returnObj;
};
