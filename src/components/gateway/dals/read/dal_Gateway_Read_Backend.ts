import { model_Gateway } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Gateway_Read_Backend = async (id_Publisher: string) => {
  const gateway = await model_Gateway.findOne({
    attributes: [
      "name",
      "fee_percentage",
      "public_key",
      "secret_key",
      "webhook_secret",
    ],
    where: {
      publisherId: id_Publisher,
    },
  });

  return gateway;
};
