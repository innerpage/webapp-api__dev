import session from "express-session";
import { Request } from "express";

declare module "express-session" {
  export interface SessionData {
    accountId: string;
  }
}
