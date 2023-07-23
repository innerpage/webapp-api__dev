import { Router } from "express";
import { getAppDetailsController } from "../../controllers";

import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
} from "../../../../global/middlewares";

export const getAppDetailsRoute = Router();

getAppDetailsRoute.get(
  "/app",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  getAppDetailsController
);
