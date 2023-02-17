import { Router } from "express";
import { controller_Account_Signup } from "../../controllers";

export const route_Account_Signup = Router();

route_Account_Signup.post("/signup", controller_Account_Signup);
