import { Request, Response } from "express";
import { dal_Account_Create } from "../../dals";
import {
  helper_Account_Login,
  helper_Account_HashPassword,
  helper_Account_MailEmailVerificationCode,
  helper_Account_GenerateEmailVerificationCode,
} from "../../helpers";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let { firstName, lastName, email, password } = res.locals;

  let code_EmailVerification: number =
    helper_Account_GenerateEmailVerificationCode();
  let hashed_Password: string = await helper_Account_HashPassword(password);

  let returnObj_AccountCreate: any = await dal_Account_Create(
    firstName,
    lastName,
    email,
    hashed_Password,
    code_EmailVerification
  );

  console.log(returnObj_AccountCreate.message);
  console.log(returnObj_AccountCreate.payload);
  helper_Account_Login(req, res, returnObj_AccountCreate.payload.id);

  let returnObj_MailVerificationLink: any =
    await helper_Account_MailEmailVerificationCode(
      returnObj_AccountCreate.payload.firstName,
      returnObj_AccountCreate.payload.email,
      code_EmailVerification,
      "aitihyatheheritage.in",
      "Aitihya - The Heritage",
      "Aitihya Samstha Foundation",
      "Dr. P. Goswami, Aitihya Samstha Foundation, Kahilipara Colony, P.O. Binova Nagar, Guwahati-781018, Assam, India",
      "aitihya.webmaster@gmail.com"
    );
  console.log(returnObj_MailVerificationLink.message);
  console.log(returnObj_MailVerificationLink.payload);

  res.status(200).json({
    success: true,
    message: "Signed up",
  });
};
