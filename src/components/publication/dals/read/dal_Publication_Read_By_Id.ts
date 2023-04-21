import { model_Publication } from "../../models";

export const dal_Publication_Read_By_Id = async (id_Publication: string) => {
  const publication = await model_Publication.findOne({
    where: {
      id: id_Publication,
    },
  });

  return publication;
};
