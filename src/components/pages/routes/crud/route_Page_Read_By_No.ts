import { Router } from "express";

export const route_Page_Read_By_No = Router();

route_Page_Read_By_No.post("/page", (req, res) => {
  res.send("HIT on /page");
});
