import { Router } from "express";

import {
  BlockLoggedInAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  validateInputsForLogin,
  formatInputsForLogin,
} from "../../middlewares";

import { controller_Account_Login } from "../../controllers";

export const loginRoute = Router();

loginRoute.post(
  "/login",
  BlockLoggedInAccount,
  validateInputsForLogin,
  formatInputsForLogin,
  BlockNonExistentAccountByEmail,
  controller_Account_Login
);
