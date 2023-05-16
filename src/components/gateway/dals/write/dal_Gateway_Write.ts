import { model_Gateway } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Gateway_Write = async (
  name: string,
  fee_Percentage: number,
  public_Key: string,
  secret_Key: string,
  webhook_Secret: string,
  publisherId: string
) => {
  let isSuccess_Write_NewGateway: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Gateway
    .create({
      name: name,
      fee_percentage: fee_Percentage,
      public_key: public_Key,
      secret_key: secret_Key,
      webhook_secret: webhook_Secret,
      publisherId: publisherId,
    })
    .then((new_Gateway: any) => {
      isSuccess_Write_NewGateway = true;
      payload = new_Gateway;
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_Write_NewGateway) {
    obj_Return.success = true;
    obj_Return.message = "New gateway CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New gateway NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
