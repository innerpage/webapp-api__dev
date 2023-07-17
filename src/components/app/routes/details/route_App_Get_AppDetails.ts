import { Router } from "express";
import { controller_App_Get_AppDetails } from "../../controllers/";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_By_AccountId,
  Middleware_Block_Account_IsDisabled_By_AccountId,
} from "../../../../global/middlewares";

export const route_Account_Get_AccountDetails = Router();

route_Account_Get_AccountDetails.get("/app", controller_App_Get_AppDetails);
