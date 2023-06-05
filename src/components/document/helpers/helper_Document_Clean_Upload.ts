import fs from "fs";

export const helper_Document_Clean_Upload = async (id_Document: string) => {
  const name_Folder: string = `upload/${id_Document}`;
  fs.rmSync(name_Folder, { recursive: true, force: true });
};
