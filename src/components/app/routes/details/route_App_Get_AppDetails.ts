import { Router } from "express";
import { controller_App_Get_AppDetails } from "../../controllers/";

import {
  Middleware_Extract_Origin,
  Middleware_Block_Request_Not_From_Origin,
  Middleware_Extract_IP_From_Origin,
  Middleware_Extract_Country_From_IP,
} from "../../../../global/middlewares";

export const route_Account_Get_AppDetails = Router();

route_Account_Get_AppDetails.get(
  "/app",
  Middleware_Extract_Origin,
  Middleware_Block_Request_Not_From_Origin,
  Middleware_Extract_IP_From_Origin,
  Middleware_Extract_Country_From_IP,
  controller_App_Get_AppDetails
);
