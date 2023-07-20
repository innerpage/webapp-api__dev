import { Router } from "express";
import { controller_App_Get_AppDetails } from "../../controllers/";

import {
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__Request_By_Origin,
  Middleware__Extract__IP_From_Origin,
  Middleware__Extract__Country_From_IP,
} from "../../../../global/middlewares";

export const route_Account_Get_AppDetails = Router();

route_Account_Get_AppDetails.get(
  "/app",
  Middleware__Extract__Origin_From_Request,
  Middleware__Block__Request_By_Origin,
  Middleware__Extract__IP_From_Origin,
  Middleware__Extract__Country_From_IP,
  controller_App_Get_AppDetails
);
