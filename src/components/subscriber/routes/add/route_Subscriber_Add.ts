import { Router } from "express";
import { controller_Subscriber_Add } from "../../controllers";

export const route_Subscriber_Add = Router();

route_Subscriber_Add.post("/subscriber", controller_Subscriber_Add);
