import axios from "axios";
import * as fs from "fs";
import { Var_Reader } from "../../../global/vars";

export const helper_Reader_Download_Document = async (
  id_Document: string,
  url_Doc: string
) => {
  const path_Output = `./${Var_Reader.download.dir}/${id_Document}.pdf`;
  const writer = fs.createWriteStream(path_Output);

  return axios({
    method: "get",
    url: url_Doc,
    responseType: "stream",
  }).then((response) => {
    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error: any = null;
      writer.on("error", (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on("close", () => {
        if (!error) {
          resolve(true);
        }
      });
    });
  });
};
