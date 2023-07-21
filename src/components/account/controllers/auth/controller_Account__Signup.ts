import { Request, Response } from "express";
import { dal_Account__Write__New_Account } from "../../dals";
import {
  helper_Account__Hash__Password,
  helper_Account__Mail__Code_EmailVerification,
  helper_Account__Login,
} from "../../helpers";
import { Helper__Generate__4DigitCode } from "../../../../global/helpers";
import { config__App } from "../../../../config";

export const controller_Account__Signup = async (
  req: Request,
  res: Response
) => {
  let { name__First, name__Last, email, password } = res.locals;

  let code__Email_Verification: number = Helper__Generate__4DigitCode();
  let hashed__Password: string = await helper_Account__Hash__Password(password);

  let returnObj__New_Account: any = await dal_Account__Write__New_Account(
    name__First,
    name__Last,
    email,
    hashed__Password,
    code__Email_Verification
  );

  console.log(returnObj__New_Account.message);
  console.log(returnObj__New_Account.payload);
  helper_Account__Login(req, returnObj__New_Account.payload.id);

  let returnObj__Mail__Code__Email_Verification: any =
    await helper_Account__Mail__Code_EmailVerification(
      returnObj__New_Account.payload.name__First,
      returnObj__New_Account.payload.email,
      code__Email_Verification,
      config__App.url__App__Website,
      config__App.name__App,
      config__App.name__Business,
      config__App.address__Business,
      config__App.email__App
    );
  console.log(returnObj__Mail__Code__Email_Verification.message);
  console.log(returnObj__Mail__Code__Email_Verification.payload);

  let payload__AccountSignup = {
    name__First: returnObj__New_Account.payload.name__First,
    name__Last: returnObj__New_Account.payload.name__Last,
    email: returnObj__New_Account.payload.email,
    is_Verified__Email: returnObj__New_Account.payload.is_Verified__Email,
    is_Active__Session: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Signed up",
    payload: payload__AccountSignup,
  });
};
