import { Router } from "express";

import { guard_Against_LoggedIn } from "../../../../global/middlewares/";
import { validator_Login_Inputs } from "../../middlewares";
import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post(
  "/login",
  guard_Against_LoggedIn,
  validator_Login_Inputs,
  controller_Account_Login
);
