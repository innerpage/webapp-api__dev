import { Request, Response } from "express";
import { login } from "../../helpers";
import {
  readAccountByEmail,
  writeNewAccountFromGoogleOauth,
  writeGoogleOauthStatus,
} from "../../dals";
import jwt from "jsonwebtoken";
import { Var } from "../../../../global/var";

export const googleOauthController = async (req: Request, res: Response) => {
  if (!res.locals.token) {
    return res.status(400).json({
      success: false,
      message: `${Var.app.emoji.failure} Invalid token`,
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
      message: `${Var.app.emoji.failure} Invalid Google account details`,
    });
  }

  // Get account
  let account: any = await readAccountByEmail(email);
  let accountId: string = "";
  let name: string = `${givenName} ${familyName}`;

  if (!account) {
    let newAccount: any = await writeNewAccountFromGoogleOauth(
      name,
      email,
      true,
      true
    );
    console.log(newAccount.message);
    if (!newAccount.payload.id) {
      return res.status(400).json({
        success: false,
        message: newAccount.message,
      });
    }
    accountId = newAccount.payload.id;
  } else {
    if (!account.dataValues.is_google_oauth_linked) {
      let updatedAccountReturnData: any = await writeGoogleOauthStatus(email);
      if (!updatedAccountReturnData.success) {
        return res.status(400).json({
          success: false,
          message: updatedAccountReturnData.message,
        });
      }
    }
    accountId = account.dataValues.id;
  }

  console.log(4);

  login(req, res, accountId);

  let responseData = {
    name: name,
    email: email,
    isEmailVerified: true,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Logged in`,
    payload: responseData,
  });
};
