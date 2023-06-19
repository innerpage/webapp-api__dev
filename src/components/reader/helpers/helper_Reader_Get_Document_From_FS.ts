import * as fs from "fs";
import { Var_Reader } from "../../../global/vars";

export const helper_Reader_Get_Document_From_FS = async (
  id_Document: string
) => {
  const dir = await fs.existsSync(Var_Reader.download.dir);
  if (!dir) {
    fs.mkdirSync(Var_Reader.download.dir);
    return false;
  }

  const file = await fs.existsSync(
    `${Var_Reader.download.dir}/${id_Document}.pdf`
  );
  if (!file) {
    return false;
  }

  const file_As_Bytes: any = await fs.readFileSync(
    `${Var_Reader.download.dir}/${id_Document}.pdf`
  );

  return file_As_Bytes;
};
