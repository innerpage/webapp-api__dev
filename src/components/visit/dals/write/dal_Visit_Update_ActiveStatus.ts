import { model_Visit } from "../../models";

export const dal_Visit_Update_ActiveStatus = async (id_Socket: string) => {
  await model_Visit
    .update(
      { is_active: false },
      {
        where: {
          socket_id: id_Socket,
        },
      }
    )
    .then((updated_Visit: any) => {
      console.log();
      console.log(`Connection active status UPDATED: ${id_Socket}`);
      console.log(updated_Visit.dataValues);
      console.log();
    })
    .catch((err) => {
      console.log();
      console.log(`Connection active status NOT_UPDATED: ${id_Socket}`);
      console.log(err);
      console.log();
    });
};
