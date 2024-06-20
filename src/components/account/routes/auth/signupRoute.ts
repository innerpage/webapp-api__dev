import { Router } from "express";
import {
  BlockLoggedInAccount,
  BlockExistingAccountByUserName,
} from "../../../../global/middlewares";
import { validateSignupPayload, formatSignupPayload } from "../../middlewares";
import { signupController } from "../../controllers";

export const signupRoute = Router();

signupRoute.post(
  "/signup",
  BlockLoggedInAccount,
  validateSignupPayload,
  formatSignupPayload,
  BlockExistingAccountByUserName,
  signupController
);
