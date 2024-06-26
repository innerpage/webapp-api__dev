import { Router } from "express";
import {
  BlockLoggedInAccount,
  BlockExistingAccountByUserName,
} from "../../../../global/middlewares";
import {
  validateUserNameAvailabilityPayload,
  formatUserNameAvailabilityPayload,
} from "../../middlewares";

import { getUserNameAvailabilityController } from "../../controllers";

export const getUserNameAvailabilityRoute = Router();

getUserNameAvailabilityRoute.post(
  "/username",
  BlockLoggedInAccount,
  validateUserNameAvailabilityPayload,
  formatUserNameAvailabilityPayload,
  BlockExistingAccountByUserName,
  getUserNameAvailabilityController
);
