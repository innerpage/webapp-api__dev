import { Router } from "express";

import {
  Middleware_Block_Account_LoggedOut,
  Middleware_Extract_AccountId,
  Middleware_Block_Account_NonExistence_ByAccountId,
  Middleware_Block_Account_IsDisabled_ByAccountId,
  Middleware_Block_Account_IsNotPublisher_ByAccountId,
} from "../../../../global/middlewares";

export const route_Publication_Create = Router();

route_Publication_Create.post("/publication", (req, res) => {
  res.send("HIT on /publication");
});
