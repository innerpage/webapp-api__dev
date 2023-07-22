import { Router } from "express";
import { controller_App_Get_App_Details } from "../../controllers";

import {
  Middleware_Extract_Origin_From_Request,
  Middleware_Block_Request_By_Origin,
  Middleware_Extract_IP_From_Origin,
  Middleware_Extract_Country_From_IP,
} from "../../../../global/middlewares";

export const route_App_Get_App_Details = Router();

route_App_Get_App_Details.get(
  "/app",
  Middleware_Extract_Origin_From_Request,
  Middleware_Block_Request_By_Origin,
  Middleware_Extract_IP_From_Origin,
  Middleware_Extract_Country_From_IP,
  controller_App_Get_App_Details
);
