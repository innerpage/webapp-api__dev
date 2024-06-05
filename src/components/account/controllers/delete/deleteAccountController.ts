import { Request, Response } from "express";
import {
  readAccountById,
  writeDeletedAccount,
  writeAccountDeletion,
} from "../../dals";

export const deleteAccountController = async (req: Request, res: Response) => {
  let account: any = await readAccountById(res.locals.accountId);

  let deleteAccountReturnObject: any = await writeDeletedAccount(
    account.dataValues.id,
    account.dataValues.name,
    account.dataValues.email,
    account.dataValues.is_email_verified,
    account.dataValues.is_google_oauth_linked,
    account.dataValues.createdAt
  );

  if (!deleteAccountReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: deleteAccountReturnObject.message,
    });
  }
  console.log(deleteAccountReturnObject.message);
  console.log(deleteAccountReturnObject.payload);

  let accountDeletionReturnObject: any = await writeAccountDeletion(
    account.dataValues.id
  );
  if (!accountDeletionReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: accountDeletionReturnObject.message,
    });
  }

  return res.status(200).json({
    success: true,
    message: "✅ Account deleted",
    payload: {},
  });
};
