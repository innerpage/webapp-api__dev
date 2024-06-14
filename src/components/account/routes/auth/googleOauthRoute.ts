import { Router } from "express";
import { BlockLoggedInAccount } from "../../../../global/middlewares";
import { googleOauthController } from "../../controllers";
import {
  validateGoogleOauthPayload,
  formatGoogleOauthPayload,
} from "../../middlewares";

export const googleOauthRoute = Router();

googleOauthRoute.post(
  "/google-oauth",
  BlockLoggedInAccount,
  validateGoogleOauthPayload,
  formatGoogleOauthPayload,
  googleOauthController
);
