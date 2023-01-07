import fs from "fs";

export const includeRoutesHelper = async () => {
  let componentPaths: Array<string> = [];
  let routePaths: Array<string> = [];
  let routeIndexPaths: Array<Object> = [];

  await fs.readdirSync("src/components").map((componentDir) => {
    let componentDirPath: string = `src/components/${componentDir}`;
    new Promise<void>((resolve, reject) => {
      let isDirectory: boolean = fs.lstatSync(componentDirPath).isDirectory();
      resolve();
      if (isDirectory) componentPaths.push(`components/${componentDir}`);
    });
  });

  await componentPaths.forEach((componentPath) => {
    let isDirEmpty: boolean = true;
    let isRouteDirAvailable: boolean = false;
    let dirLength: number = fs.readdirSync("src/" + componentPath).length;
    if (dirLength > 0) {
      isDirEmpty = false;
    }

    fs.readdirSync("src/" + componentPath).map((itemName) => {
      if (itemName === "routes") isRouteDirAvailable = true;
    });

    if (!isDirEmpty && isRouteDirAvailable) {
      routePaths.push(componentPath + "/routes");
    }
  });

  await routePaths.forEach((routePath) => {
    let routeIndexPath = `${routePath}/index.ts`;
    routeIndexPaths.push(routeIndexPath);
  });

  return routeIndexPaths;
};
