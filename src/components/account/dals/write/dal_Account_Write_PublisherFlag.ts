import { model__Account } from "../../models";

interface LooseObj {
  [key: string]: any;
}

export const dal_Account_Write_PublisherFlag = async (
  id_Account: string,
  flag_IsPublisher: boolean
) => {
  let isSuccess_PublisherFlag_Saved: boolean = false;
  let payload: any;
  let obj_Return: LooseObj = {};

  await model__Account
    .update(
      { is_publisher: flag_IsPublisher },
      {
        where: {
          id: id_Account,
        },
      }
    )
    .then((updated_Account: any) => {
      isSuccess_PublisherFlag_Saved = true;
      payload = updated_Account;
    })
    .catch((err) => (payload = err));

  if (isSuccess_PublisherFlag_Saved) {
    obj_Return.success = true;
    obj_Return.message = "New publisher status SAVED";
    obj_Return.payload = payload;
  } else {
    obj_Return.success = false;
    obj_Return.message = "Publisher status NOT_SAVED";
    obj_Return.payload = payload;
  }

  return obj_Return;
};
