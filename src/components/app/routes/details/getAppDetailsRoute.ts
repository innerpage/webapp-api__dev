import { Router } from "express";
import { getAppDetailsController } from "../../controllers";

import {
  ExtractOriginFromRequestMiddleware,
  BlockRequestByOriginMiddleware,
  ExtractIPAddressFromOriginMiddleware,
  ExtractCountryFromIPAddressMiddleware,
} from "../../../../global/middlewares";

export const getAppDetailsRoute = Router();

getAppDetailsRoute.get(
  "/app",
  ExtractOriginFromRequestMiddleware,
  BlockRequestByOriginMiddleware,
  ExtractIPAddressFromOriginMiddleware,
  ExtractCountryFromIPAddressMiddleware,
  getAppDetailsController
);
