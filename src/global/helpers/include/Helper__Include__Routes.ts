import fs from "fs";
import { config_Node } from "../../../config";

export const Helper__Include__Routes = async () => {
  let paths__Components: Array<string> = [];
  let paths__Routes: Array<string> = [];
  let paths__Route_Indexes: Array<Object> = [];

  let dir__Root: string = "";
  let file__Index: string = "";

  if (config_Node.env === "dev") {
    dir__Root = "src";
    file__Index = "index.ts";
  } else if (config_Node.env === "prod") {
    dir__Root = ".";
    file__Index = "index.js";
  }

  await fs.readdirSync(`${dir__Root}/components`).map((dir__Component) => {
    let path__Dir__Component: string = `${dir__Root}/components/${dir__Component}`;
    new Promise<void>((resolve, reject) => {
      let is_Directory: boolean = fs
        .lstatSync(path__Dir__Component)
        .isDirectory();
      resolve();
      if (is_Directory) paths__Components.push(`components/${dir__Component}`);
    });
  });

  await paths__Components.forEach((path__Component) => {
    let is_Empty__Dir: boolean = true;
    let is_Available__Dir__Route: boolean = false;
    let length__Dir: number = fs.readdirSync(
      `${dir__Root}/` + path__Component
    ).length;
    if (length__Dir > 0) {
      is_Empty__Dir = false;
    }

    fs.readdirSync(`${dir__Root}/` + path__Component).map((name__Item) => {
      if (name__Item === "routes") is_Available__Dir__Route = true;
    });

    if (!is_Empty__Dir && is_Available__Dir__Route) {
      paths__Routes.push(path__Component + "/routes");
    }
  });

  await paths__Routes.forEach((path__Route) => {
    let path__Route__Index = "";
    path__Route__Index = `${path__Route}/${file__Index}`;
    paths__Route_Indexes.push(path__Route__Index);
  });

  return paths__Route_Indexes;
};
