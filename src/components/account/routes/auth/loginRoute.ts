import { Router } from "express";
import {
  BlockLoggedInAccount,
  BlockNonExistentAccountByEmail,
} from "../../../../global/middlewares";
import { validateLoginPayload, formatLoginPayload } from "../../middlewares";
import { loginController } from "../../controllers";

export const loginRoute = Router();

loginRoute.post(
  "/login",
  BlockLoggedInAccount,
  validateLoginPayload,
  formatLoginPayload,
  BlockNonExistentAccountByEmail,
  loginController
);
