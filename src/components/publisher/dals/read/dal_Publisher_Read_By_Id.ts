import { model_Publisher } from "../../models";

export const dal_Publisher_Read_By_Id = async (id_Publisher: string) => {
  const publisher = await model_Publisher.findOne({
    where: {
      id: id_Publisher,
    },
  });

  return publisher;
};
