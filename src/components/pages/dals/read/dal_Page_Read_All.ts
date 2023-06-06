import { model_Page } from "../../models";

export const dal_Page_Read_All = async (id_Document: string) => {
  const pages: any = await model_Page.findAll({
    where: {
      documentId: id_Document,
    },
  });

  return pages;
};
