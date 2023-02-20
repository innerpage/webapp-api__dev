import { Router } from "express";

import { guard_Against_LoggedIn } from "../../../../global/middlewares/";
import {
  validator_Signup_Inputs,
  checker_Account_Existence,
} from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  guard_Against_LoggedIn,
  validator_Signup_Inputs,
  checker_Account_Existence,
  controller_Account_Signup
);
