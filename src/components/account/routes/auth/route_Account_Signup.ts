import { Router } from "express";
import { validate_Signup_Inputs } from "../../middlewares";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post(
  "/signup",
  validate_Signup_Inputs,
  controller_Account_Signup
);
