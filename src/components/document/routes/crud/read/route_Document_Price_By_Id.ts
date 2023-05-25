import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Extract_Origin,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
} from "../../../../../global/middlewares";

import {
  middleware_Validate_Inputs_For_Document_Price,
  middleware_Format_Inputs_For_Document_Price,
} from "../../../middlewares";

// Controller
import { controller_Document_Price_By_DocumentId } from "../../../controllers";

export const route_Document_Price_By_Id = Router();

route_Document_Price_By_Id.post(
  "/document-price",
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Extract_Origin,
  middleware_Validate_Inputs_For_Document_Price,
  middleware_Format_Inputs_For_Document_Price,
  controller_Document_Price_By_DocumentId
);
