import { Router } from "express";

import {
  BlockLoggedInAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";

import {
  validateInputsForLoginMiddleware,
  formatInputsForLoginMiddleware,
} from "../../middlewares";

import { loginController } from "../../controllers";

export const loginRoute = Router();

loginRoute.post(
  "/login",
  BlockLoggedInAccount,
  validateInputsForLoginMiddleware,
  formatInputsForLoginMiddleware,
  BlockNonExistentAccountByEmail,
  loginController
);
