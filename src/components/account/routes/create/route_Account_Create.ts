import { Router } from "express";
import { controller_Account_Create } from "../../controllers";

export const route_Account_Create = Router();

route_Account_Create.post("/account", controller_Account_Create);
