import fs from "fs";
import { config__Node } from "../../../config";

export const Helper__Include__Routes = async () => {
  let paths__Components: Array<string> = [];
  let paths__Routes: Array<string> = [];
  let paths__Route__Indexes: Array<Object> = [];

  let dir__Root: string = "";
  let file__Index: string = "";

  if (config__Node.env === "dev") {
    dir__Root = "src";
    file__Index = "index.ts";
  } else if (config__Node.env === "prod") {
    dir__Root = ".";
    file__Index = "index.js";
  }

  await fs.readdirSync(`${dir__Root}/components`).map((componentDir) => {
    let path__Dir__Component: string = `${dir__Root}/components/${componentDir}`;
    new Promise<void>((resolve, reject) => {
      let isDirectory: boolean = fs
        .lstatSync(path__Dir__Component)
        .isDirectory();
      resolve();
      if (isDirectory) paths__Components.push(`components/${componentDir}`);
    });
  });

  await paths__Components.forEach((path__Component) => {
    let isEmpty__Dir: boolean = true;
    let isAvailable__Dir__Route: boolean = false;
    let length__Dir: number = fs.readdirSync(
      `${dir__Root}/` + path__Component
    ).length;
    if (length__Dir > 0) {
      isEmpty__Dir = false;
    }

    fs.readdirSync(`${dir__Root}/` + path__Component).map((name__Item) => {
      if (name__Item === "routes") isAvailable__Dir__Route = true;
    });

    if (!isEmpty__Dir && isAvailable__Dir__Route) {
      paths__Routes.push(path__Component + "/routes");
    }
  });

  await paths__Routes.forEach((path__Route) => {
    let path__Route__Index = "";
    path__Route__Index = `${path__Route}/${file__Index}`;
    paths__Route__Indexes.push(path__Route__Index);
  });

  return paths__Route__Indexes;
};
