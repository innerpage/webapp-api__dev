import * as postmark from "postmark";
import { postmarkConfig } from "../../../../config";

export const mail_Account_EmailVerification = async (
  subscriber_FirstName: string,
  subscriber_Email: string,
  link_EmailVerification: string,
  publisher_Website: string,
  publisher_ProductName: string,
  publisher_BusinessName: string,
  publisher_BusinessAddress: string,
  publisher_SupportEmail: string
) => {
  const client_Postmark = new postmark.Client(postmarkConfig.token);
  let templateId = 30914127;

  await client_Postmark.sendEmailWithTemplate(
    {
      From: `${publisher_ProductName} no-reply@${publisher_Website}`,
      TemplateId: templateId,
      To: subscriber_Email,
      TemplateModel: {
        link_EmailVerification: link_EmailVerification,
        subscriber_FirstName: subscriber_FirstName,
        publisher_Website: publisher_Website,
        publisher_ProductName: publisher_ProductName,
        publisher_BusinessName: publisher_BusinessName,
        publisher_BusinessAddress: publisher_BusinessAddress,
        publisher_SupportEmail: publisher_SupportEmail,
      },
    },
    (error, success) => {
      if (error) {
        console.log(`Error while sending email verification mail`);
        console.log(error);
        return false;
      } else if (success) {
        console.log(`Success while sending email verification mail`);
        return true;
      } else {
        return false;
      }
    }
  );
};
