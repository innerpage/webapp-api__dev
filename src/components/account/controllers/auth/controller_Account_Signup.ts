import { Request, Response } from "express";
import { dal_Create_Account } from "../../dals";
import { helper_Login } from "../../helpers";

export const controller_Account_Signup = async (
  req: Request,
  res: Response
) => {
  let returnObj_Create_Account: any = await dal_Create_Account(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password
  );

  // helper_Login(req, res, accountId);

  console.log("");
  console.log("isCreated");
  console.log(returnObj_Create_Account.isCreated_Account);
  console.log("Message");
  console.log(returnObj_Create_Account.message);
  console.log("Payload");
  console.log(returnObj_Create_Account.payload);
  console.log("");

  // let responseObj: LooseObj = {};
  // if (returnObj_Create_Account.success) {
  //   console.log();
  // } else {
  // }
};
