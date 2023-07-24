import { Router } from "express";

import {
  BlockLoggedInAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  validateInputsForLogin,
  formatInputsForLogin,
} from "../../middlewares";

import { loginController } from "../../controllers";

export const loginRoute = Router();

loginRoute.post(
  "/login",
  BlockLoggedInAccount,
  validateInputsForLogin,
  formatInputsForLogin,
  BlockNonExistentAccountByEmail,
  loginController
);
