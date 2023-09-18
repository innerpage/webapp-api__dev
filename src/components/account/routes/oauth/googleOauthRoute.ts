import { Router } from "express";

import { googleOauthController } from "../../controllers";

import { BlockLoggedInAccount } from "../../../../global/middlewares";

export const googleOauthRoute = Router();

googleOauthRoute.post(
  "/google-oauth",
  BlockLoggedInAccount,
  googleOauthController
);
