import { Router } from "express";
import { validate_Signup_Inputs } from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";
import { guard_Against_LoggedIn } from "../../../../global/middlewares/";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  guard_Against_LoggedIn,
  validate_Signup_Inputs,
  controller_Account_Signup
);
