import session from "express-session";

declare module "express-session" {
  export interface SessionData {
    id_Account: string;
  }
}
