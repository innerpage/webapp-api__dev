import { purchaseModel } from "../../models";

interface LooseObject {
  [key: string]: any;
}

export const writePurchaseStatus = async (sessionId: string) => {
  let isPurchaseStatusUpdated: boolean = false;
  let payload: any;
  let returnObject: LooseObject = {};

  await purchaseModel
    .update(
      { is_success: true },
      {
        where: {
          session_id: sessionId,
        },
      }
    )
    .then((updatedPurchase: any) => {
      isPurchaseStatusUpdated = true;
      payload = updatedPurchase;
    })
    .catch((err) => (payload = err));

  if (isPurchaseStatusUpdated) {
    returnObject.success = true;
    returnObject.message = "Purchase status updated";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "Purchase status not update";
    returnObject.payload = payload;
  }
  return returnObject;
};
