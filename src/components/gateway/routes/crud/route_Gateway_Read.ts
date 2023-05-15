import { Router } from "express";
import { controller_Gateway_Read } from "../../controllers";

export const route_Gateway_Read = Router();

route_Gateway_Read.get("/gateway", controller_Gateway_Read);
