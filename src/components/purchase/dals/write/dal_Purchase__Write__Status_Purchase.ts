import { model_Purchase } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Purchase__Write__Status_Purchase = async (
  id_Session: string
) => {
  let isSuccess_Updated_PurchaseStatus: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Purchase
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
