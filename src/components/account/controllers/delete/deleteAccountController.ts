import { Request, Response } from "express";
import { writeAccountDeletionStatus } from "../../dals";

export const deleteAccountController = async (req: Request, res: Response) => {
  let updateAccountDeletionStatusReturnObject: any =
    await writeAccountDeletionStatus(res.locals.accountId);
  console.log(updateAccountDeletionStatusReturnObject.message);
  console.log(updateAccountDeletionStatusReturnObject.payload);

  if (!updateAccountDeletionStatusReturnObject.success) {
    return res.status(400).json({
      success: false,
      message: "❌ Could not update account deletion status",
    });
  }

  return res.status(200).json({
    success: true,
    message: "✅ Account deleted",
    payload: {},
  });
};
