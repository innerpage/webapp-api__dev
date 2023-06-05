import { model_Page } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Page_Write_All = async (array_Pages: any) => {
  let isSuccess_NewPages: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Page
    .bulkCreate(array_Pages)
    .then((new_Pages: any) => {
      isSuccess_NewPages = true;
      payload = new_Pages;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewPages) {
    obj_Return.success = true;
    obj_Return.message = "New pages CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New pages NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
