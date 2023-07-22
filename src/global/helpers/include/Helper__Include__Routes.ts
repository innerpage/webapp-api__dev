import fs from "fs";
import { Node_Config } from "../../../config";

export const Helper__Include__Routes = async () => {
  let paths_Components: Array<string> = [];
  let paths_Routes: Array<string> = [];
  let paths_Route_Indexes: Array<Object> = [];

  let dir_Root: string = "";
  let file_Index: string = "";

  if (Node_Config.env === "dev") {
    dir_Root = "src";
    file_Index = "index.ts";
  } else if (Node_Config.env === "prod") {
    dir_Root = ".";
    file_Index = "index.js";
  }

  await fs.readdirSync(`${dir_Root}/components`).map((dir_Component) => {
    let path_dirComponent: string = `${dir_Root}/components/${dir_Component}`;
    new Promise<void>((resolve, reject) => {
      let isDirectory: boolean = fs.lstatSync(path_dirComponent).isDirectory();
      resolve();
      if (isDirectory) paths_Components.push(`components/${dir_Component}`);
    });
  });

  await paths_Components.forEach((path_Component) => {
    let isEmpty_Dir: boolean = true;
    let isAvailable_Dir_Route: boolean = false;
    let length_Dir: number = fs.readdirSync(
      `${dir_Root}/` + path_Component
    ).length;
    if (length_Dir > 0) {
      isEmpty_Dir = false;
    }

    fs.readdirSync(`${dir_Root}/` + path_Component).map((name_Item) => {
      if (name_Item === "routes") isAvailable_Dir_Route = true;
    });

    if (!isEmpty_Dir && isAvailable_Dir_Route) {
      paths_Routes.push(path_Component + "/routes");
    }
  });

  await paths_Routes.forEach((path_Route) => {
    let path_Route_Index = "";
    path_Route_Index = `${path_Route}/${file_Index}`;
    paths_Route_Indexes.push(path_Route_Index);
  });

  return paths_Route_Indexes;
};
