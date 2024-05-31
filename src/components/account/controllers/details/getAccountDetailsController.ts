import { Request, Response } from "express";
import { readAccountById } from "../../dals";

export const getAccountDetailsController = async (
  req: Request,
  res: Response
) => {
  let account: any = await readAccountById(res.locals.accountId);

  let accountDetailsPayload: any = {
    name: account.name,
    email: account.email,
    isEmailVerified: account.is_email_verified,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched account & app details",
    payload: accountDetailsPayload,
  });
};
