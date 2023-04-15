import { model_Publisher } from "../../models";

export const dal_Publisher_Read_By_DlUrl = async (url_Dl: string) => {
  const publisher = await model_Publisher.findOne({
    where: {
      url_dl: url_Dl,
    },
  });

  return publisher;
};
