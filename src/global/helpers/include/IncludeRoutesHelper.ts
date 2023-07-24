import fs from "fs";
import { NodeConfig } from "../../../config";

export const IncludeRoutesHelper = async () => {
  let componentPaths: Array<string> = [];
  let routeDirectoryPaths: Array<string> = [];
  let routeIndexPaths: Array<Object> = [];

  let rootDirectory: string = "";
  let fileIndex: string = "";

  if (NodeConfig.env === "dev") {
    rootDirectory = "src";
    fileIndex = "index.ts";
  } else if (NodeConfig.env === "prod") {
    rootDirectory = ".";
    fileIndex = "index.js";
  }

  await fs
    .readdirSync(`${rootDirectory}/components`)
    .map((componentDirectory) => {
      let componentDirectoryPath: string = `${rootDirectory}/components/${componentDirectory}`;
      new Promise<void>((resolve, reject) => {
        let isDirectory: boolean = fs
          .lstatSync(componentDirectoryPath)
          .isDirectory();
        resolve();
        if (isDirectory)
          componentPaths.push(`components/${componentDirectory}`);
      });
    });

  await componentPaths.forEach((componentPath) => {
    let isDirectoryEmpty: boolean = true;
    let isRouteDirectoryAvailable: boolean = false;
    let directoryLength: number = fs.readdirSync(
      `${rootDirectory}/` + componentPath
    ).length;
    if (directoryLength > 0) {
      isDirectoryEmpty = false;
    }

    fs.readdirSync(`${rootDirectory}/` + componentPath).map((directoryName) => {
      if (directoryName === "routes") isRouteDirectoryAvailable = true;
    });

    if (!isDirectoryEmpty && isRouteDirectoryAvailable) {
      routeDirectoryPaths.push(componentPath + "/routes");
    }
  });

  await routeDirectoryPaths.forEach((routeDirectoryPath) => {
    let routeIndexPath = "";
    routeIndexPath = `${routeDirectoryPath}/${fileIndex}`;
    routeIndexPaths.push(routeIndexPath);
  });

  return routeIndexPaths;
};
