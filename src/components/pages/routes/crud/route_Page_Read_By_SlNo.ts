import { Router } from "express";

export const route_Page_Read_By_SlNo = Router();

route_Page_Read_By_SlNo.post("/page", (req, res) => {
  res.send("HIT on /page");
});
