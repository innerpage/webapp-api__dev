import { Router } from "express";

export const route_Test_Date = Router();

route_Test_Date.get("/test", (req, res) => {
  let date: any = new Date();
  date = date.toString();
  return res.send(date);
});
