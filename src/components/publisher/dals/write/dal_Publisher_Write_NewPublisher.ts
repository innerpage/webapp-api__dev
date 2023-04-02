import { model_Publisher } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Publisher_Write_NewPublisher = async (
  business_name: string,
  business_address: string,
  product_name: string,
  support_email: string,
  url_website: string,
  url_dl: string,
  country: string,
  state: string,
  tax_type: string,
  tax_id: string,
  tax_value: number
) => {
  let isSuccess_NewPublisher: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Publisher
    .create({
      business_name: business_name,
      business_address: business_address,
      product_name: product_name,
      support_email: support_email,
      url_website: url_website,
      url_dl: url_dl,
      country: country,
      state: state,
      tax_type: tax_type,
      tax_id: tax_id,
      tax_value: tax_value,
    })
    .then((new_Publisher: any) => {
      isSuccess_NewPublisher = true;
      payload = {
        id: new_Publisher.dataValues.id,
      };
    })
    .catch((err) => {
      payload = err;
    });

  if (isSuccess_NewPublisher) {
    obj_Return.success = true;
    obj_Return.message = "New publisher CREATED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "New publisher NOT_CREATED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
