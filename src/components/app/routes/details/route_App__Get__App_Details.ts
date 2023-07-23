import { Router } from "express";
import { controller_App_Get_App_Details } from "../../controllers";

import {
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
} from "../../../../global/middlewares";

export const route_App_Get_App_Details = Router();

route_App_Get_App_Details.get(
  "/app",
  ExtractOriginFromRequest,
  BlockRequestByOrigin,
  ExtractIPAddressFromOrigin,
  ExtractCountryFromIPAddress,
  controller_App_Get_App_Details
);
