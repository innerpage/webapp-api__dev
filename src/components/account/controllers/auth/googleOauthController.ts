import { Request, Response } from "express";
import { loginHelper } from "../../helpers";
import {
  readAccountByEmail,
  writeNewAccountFromGoogleOauth,
  writeGoogleOauthStatus,
} from "../../dals";
import jwt from "jsonwebtoken";

export const googleOauthController = async (req: Request, res: Response) => {
  if (!res.locals.token) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not complete authorization",
    });
  }

  let decodedToken: any = jwt.decode(res.locals.token);

  let email: string = decodedToken.email;
  let isEmailVerified: boolean = decodedToken.email_verified;
  let givenName: string = decodedToken.given_name;
  let familyName: string = decodedToken.family_name;

  if (!email || !isEmailVerified || !givenName || !familyName) {
    return res.status(400).json({
      success: false,
      message: "❌ Invalid Google account details",
    });
  }

  // Get account
  let account: any = await readAccountByEmail(email);
  let accountId: string = "";
  let name: string = `${givenName} ${familyName}`;

  if (!account) {
    let newAccountReturnObject: any = await writeNewAccountFromGoogleOauth(
      name,
      email,
      true,
      true
    );
    console.log(newAccountReturnObject.message);
    console.log(newAccountReturnObject.payload);
    if (!newAccountReturnObject.payload.id) {
      return res.status(400).json({
        success: false,
        message: newAccountReturnObject.payload.message,
      });
    }
    accountId = newAccountReturnObject.payload.id;
  } else {
    if (!account.dataValues.is_google_oauth_linked) {
      let updateAccountReturnObject: any = await writeGoogleOauthStatus(email);
      if (!updateAccountReturnObject.payload.id) {
        return res.status(400).json({
          success: false,
          message: updateAccountReturnObject.payload.message,
        });
      }
    }
    accountId = account.dataValues.id;
  }

  loginHelper(req, res, accountId);

  let responseObject = {
    name: name,
    email: email,
    isEmailVerified: true,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Logged in",
    payload: responseObject,
  });
};
