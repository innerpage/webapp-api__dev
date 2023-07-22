import { Router } from "express";
import { controller_App__Get__App_Details } from "../../controllers";

import {
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__Request__By__Origin,
  Middleware__Extract__IP__From__Origin,
  Middleware__Extract__Country__From__IP,
} from "../../../../global/middlewares";

export const route_App__Get__App_Details = Router();

route_App__Get__App_Details.get(
  "/app",
  Middleware__Extract__Origin__From__Request,
  Middleware__Block__Request__By__Origin,
  Middleware__Extract__IP__From__Origin,
  Middleware__Extract__Country__From__IP,
  controller_App__Get__App_Details
);
