import { Router } from "express";
import { controller_Purchase_Get } from "../../controllers";

export const route_Purchase_Get_AllPurchases = Router();

route_Purchase_Get_AllPurchases.post("/purchases", controller_Purchase_Get);
