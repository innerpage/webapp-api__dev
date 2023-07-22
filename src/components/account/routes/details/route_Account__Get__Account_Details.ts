import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_Id_Account_From_Request,
  Middleware_Block_Account_NonExistence_By_Id_Account,
  Middleware_Block_Account_Disabled_By_Id_Account,
} from "../../../../global/middlewares";

import { controller_Account_Get_Account_Details } from "../../controllers";

export const route_Account_Get_Account_Details = Router();

route_Account_Get_Account_Details.get(
  "/account",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_Id_Account_From_Request,
  Middleware_Block_Account_NonExistence_By_Id_Account,
  Middleware_Block_Account_Disabled_By_Id_Account,
  controller_Account_Get_Account_Details
);
