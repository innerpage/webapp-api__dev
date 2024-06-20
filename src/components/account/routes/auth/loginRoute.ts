import { Router } from "express";
import {
  BlockLoggedInAccount,
  BlockNonExistentAccountByUserName,
} from "../../../../global/middlewares";
import { validateLoginPayload, formatLoginPayload } from "../../middlewares";
import { loginController } from "../../controllers";

export const loginRoute = Router();

loginRoute.post(
  "/login",
  BlockLoggedInAccount,
  validateLoginPayload,
  formatLoginPayload,
  BlockNonExistentAccountByUserName,
  loginController
);
