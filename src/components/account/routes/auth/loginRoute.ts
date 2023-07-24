import { Router } from "express";

import {
  BlockLoggedInAccountMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
} from "../../../../global/middlewares";

import {
  validateInputsForLoginMiddleware,
  formatInputsForLoginMiddleware,
} from "../../middlewares";

import { loginController } from "../../controllers";

export const loginRoute = Router();

loginRoute.post(
  "/login",
  BlockLoggedInAccountMiddleware,
  validateInputsForLoginMiddleware,
  formatInputsForLoginMiddleware,
  BlockNonExistentAccountByEmailMiddleware,
  loginController
);
