import { purchaseModel } from "../../models";

interface LooseObject {
  [key: string]: any;
}

export const readPurchaseBySessionId = async (sessionId: string) => {
  let payload: any;
  let returnObject: LooseObject = {};

  await purchaseModel
    .findOne({
      where: {
        session_id: sessionId,
      },
    })
    .then((purchase: any) => {
      payload = purchase;
    })
    .catch((err) => (payload = err));

  if (payload) {
    returnObject.success = true;
    returnObject.message = "✅ Purchase read";
    returnObject.payload = payload;
  } else {
    returnObject.success = false;
    returnObject.message = "❌ Purchase not read";
    returnObject.payload = payload;
  }

  return returnObject;
};
