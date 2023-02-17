import { Router } from "express";
import { controller_Account_Login } from "../../controllers";

export const route_Account_Login = Router();

route_Account_Login.post("/login", controller_Account_Login);
