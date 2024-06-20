import { Request, Response } from "express";
import { writeNewAccount } from "../../dals";
import { hashPassword, login } from "../../helpers";
import { Var } from "../../../../global/var";

export const signupController = async (req: Request, res: Response) => {
  let { userName, password } = res.locals;
  let hashedPassword: string = await hashPassword(password);

  let newAccount: any = await writeNewAccount(userName, hashedPassword);
  if (!newAccount.success) {
    return res.status(400).json({
      success: false,
      message: newAccount.message,
    });
  }
  console.log(newAccount.message);
  login(req, res, newAccount.payload.id);

  let responseData = {
    userName: newAccount.payload.userName,
    isSessionActive: true,
  };

  return res.status(200).json({
    success: true,
    message: `${Var.app.emoji.success} User signed up`,
    payload: responseData,
  });
};
