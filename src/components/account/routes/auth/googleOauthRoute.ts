import { Router } from "express";
import { BlockLoggedInAccount } from "../../../../global/middlewares";
import { googleOauthController } from "../../controllers";
import {
  validateInputsForGoogleOauthMiddleware,
  formatInputsForGoogleOauthMiddleware,
} from "../../middlewares";

export const googleOauthRoute = Router();

googleOauthRoute.post(
  "/google-oauth",
  BlockLoggedInAccount,
  validateInputsForGoogleOauthMiddleware,
  formatInputsForGoogleOauthMiddleware,
  googleOauthController
);
