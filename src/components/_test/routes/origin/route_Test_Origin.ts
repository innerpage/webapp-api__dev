import { Router } from "express";

export const route_Test_Origin = Router();

route_Test_Origin.get("/test-origin", (req, res) => {
  let host = req.header("Host");
  let origin = req.header("Origin");
  let response = `Host: ${host}, Origin: ${origin}`;

  return res.send(response);
});
