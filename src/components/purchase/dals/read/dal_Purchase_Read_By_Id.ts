import { model__Purchase } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Purchase_Read_By_Id = async (id_Document: string) => {
  let payload: any;
  let obj_Return: LooseObj = {};

  await model__Purchase
    .findOne({
      where: {
        document_id: id_Document,
      },
    })
    .then((purchase: any) => {
      payload = purchase;
    })
    .catch((err) => (payload = err));

  if (payload) {
    obj_Return.success = true;
    obj_Return.message = "Purchase READ";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "Purchase NOT_READ";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
