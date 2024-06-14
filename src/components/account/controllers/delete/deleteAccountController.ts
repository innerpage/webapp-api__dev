import { Request, Response } from "express";
import {
  readAccountById,
  writeDeletedAccount,
  writeAccountDeletion,
} from "../../dals";
import { Var } from "../../../../global/var";

export const deleteAccountController = async (req: Request, res: Response) => {
  let account: any = await readAccountById(res.locals.accountId);

  let deletedAccount: any = await writeDeletedAccount(
    account.dataValues.id,
    account.dataValues.name,
    account.dataValues.email,
    account.dataValues.is_email_verified,
    account.dataValues.is_google_oauth_linked,
    account.dataValues.createdAt.toString()
  );

  console.log(deletedAccount.message);
  if (!deletedAccount.success) {
    console.log(deletedAccount.payload);
    return res.status(400).json({
      success: false,
      message: deletedAccount.message,
    });
  }

  let accountDeletionReturnData: any = await writeAccountDeletion(
    account.dataValues.id
  );
  if (!accountDeletionReturnData.success) {
    return res.status(400).json({
      success: false,
      message: accountDeletionReturnData.message,
    });
  }

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} Account deleted`,
    payload: {},
  });
};
