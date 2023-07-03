import fs from "fs";
import { config_Node } from "../../../config";

export const Helper_Include_Routes = async () => {
  let componentPaths: Array<string> = [];
  let routePaths: Array<string> = [];
  let routeIndexPaths: Array<Object> = [];

  let rootDir: string = "";
  let indexFile: string = "";

  if (config_Node.env === "dev") {
    rootDir = "src";
    indexFile = "index.ts";
  } else if (config_Node.env === "prod") {
    rootDir = ".";
    indexFile = "index.js";
  }

  await fs.readdirSync(`${rootDir}/components`).map((componentDir) => {
    let componentDirPath: string = `${rootDir}/components/${componentDir}`;
    new Promise<void>((resolve, reject) => {
      let isDirectory: boolean = fs.lstatSync(componentDirPath).isDirectory();
      resolve();
      if (isDirectory) componentPaths.push(`components/${componentDir}`);
    });
  });

  await componentPaths.forEach((componentPath) => {
    let isDirEmpty: boolean = true;
    let isRouteDirAvailable: boolean = false;
    let dirLength: number = fs.readdirSync(
      `${rootDir}/` + componentPath
    ).length;
    if (dirLength > 0) {
      isDirEmpty = false;
    }

    fs.readdirSync(`${rootDir}/` + componentPath).map((itemName) => {
      if (itemName === "routes") isRouteDirAvailable = true;
    });

    if (!isDirEmpty && isRouteDirAvailable) {
      routePaths.push(componentPath + "/routes");
    }
  });

  await routePaths.forEach((routePath) => {
    let routeIndexPath = "";
    routeIndexPath = `${routePath}/${indexFile}`;
    routeIndexPaths.push(routeIndexPath);
  });

  return routeIndexPaths;
};
