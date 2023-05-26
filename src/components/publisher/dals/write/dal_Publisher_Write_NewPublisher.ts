import { model_Publisher } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Publisher_Write_NewPublisher = async (
  business_Name: string,
  business_Address: string,
  support_Email: string,
  url_Website: string,
  url_Dl: string,
  country: string,
  state: string,
  tax_Type: string,
  id_Tax: string,
  tax_Percentage: string,
  accountId: string
) => {
  let isSuccess_NewPublisher: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model_Publisher
    .create({
      business_name: business_Name,
      business_address: business_Address,
      support_email: support_Email,
      url_website: url_Website,
      url_dl: url_Dl,
      country: country,
      state: state,
      tax_type: tax_Type,
      tax_id: id_Tax,
      tax_percentage: tax_Percentage,
      accountId: accountId,
    })
    .then((new_Publisher: any) => {
      isSuccess_NewPublisher = true;
      payload = new_Publisher;
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
