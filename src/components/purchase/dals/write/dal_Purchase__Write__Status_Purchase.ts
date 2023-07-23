import { purchaseModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const dal_Purchase_Write_Status_Purchase = async (
  id_Session: string
) => {
  let isSuccess_Updated_PurchaseStatus: boolean = false;
  let payload: any;
  let obj_Return: obj_Loose = {};

  await purchaseModel
    .update(
      { is_success: true },
      {
        where: {
          session_id: id_Session,
        },
      }
    )
    .then((updated_Purchase: any) => {
      isSuccess_Updated_PurchaseStatus = true;
      payload = updated_Purchase;
    })
    .catch((err) => (payload = err));

  if (isSuccess_Updated_PurchaseStatus) {
    obj_Return.success = true;
    obj_Return.message = "Purchase status UPDATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "Purchase status NOT_UPDATED";
    obj_Return.payload = payload;
  }
  return obj_Return;
};
