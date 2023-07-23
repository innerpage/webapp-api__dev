import { purchaseModel } from "../../models";

interface obj_Loose {
  [key: string]: any;
}

export const writePurchaseStatus = async (sessionId: string) => {
  let isSuccess_Updated_PurchaseStatus: boolean = false;
  let payload: any;
  let returnObject: obj_Loose = {};

  await purchaseModel
    .update(
      { is_success: true },
      {
        where: {
          session_id: sessionId,
        },
      }
    )
    .then((updated_Purchase: any) => {
      isSuccess_Updated_PurchaseStatus = true;
      payload = updated_Purchase;
    })
    .catch((err) => (payload = err));

  if (isSuccess_Updated_PurchaseStatus) {
    returnObject.success = true;
    returnObject.message = "Purchase status UPDATED";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "Purchase status NOT_UPDATED";
    returnObject.payload = payload;
  }
  return returnObject;
};
