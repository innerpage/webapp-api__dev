import { model__Visit } from "../../models";

export const dal_Visit__Write__Status_Activity = async (id_Socket: string) => {
  await model__Visit
    .update(
      { is_active: false },
      {
        where: {
          socket_id: id_Socket,
        },
      }
    )
    .then(() => {
      console.log(`Connection active status UPDATED: ${id_Socket}`);
    })
    .catch((err) => {
      console.log(`Connection active status NOT_UPDATED: ${id_Socket}`);
      console.log(err);
    });
};
