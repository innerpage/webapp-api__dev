import { Request, Response } from "express";
import { dal_Create_Account } from "../../dals";
import { helper_Login } from "../../helpers";

interface LooseObj {
  [key: string]: any;
}

export const controller_Account_Signup = (req: Request, res: Response) => {
  // let accountId: string = "27f25442-a8bb-4e7e-8c62-e006980b0d49";
  // helper_Login(req, res, accountId);

  // let responseObj = {
  //   success: true,
  //   message: "User is signed up",
  // };
  // res.json(responseObj);

  let returnObj: LooseObj = dal_Create_Account(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password
  );

  let responseObj: LooseObj = {};
  if (returnObj.success) {
    console.log();
  } else {
  }
};
