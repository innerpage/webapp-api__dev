import { model_Toc } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Document_Write_NewToc = async (
  data_Toc: any,
  id_Document: string
) => {
  let isSuccess_NewToc: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Toc
    .create({
      toc: data_Toc,
      documentId: id_Document,
    })
    .then((new_Toc: any) => {
      isSuccess_NewToc = true;
      payload = new_Toc;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewToc) {
    obj_Return.success = true;
    obj_Return.message = "New toc CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New toc NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
