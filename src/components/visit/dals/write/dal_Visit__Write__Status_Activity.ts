import { model_Visit } from "../../models";

export const dal_Visit_Write_Status_Activity = async (id_Socket: string) => {
  await model_Visit
    .update(
      { is_active: false },
      {
        where: {
          socket_id: id_Socket,
        },
      }
    )
    .then(() => {
      console.log(`✅ Connection active status UPDATED: ${id_Socket}`);
    })
    .catch((err: any) => {
      console.log(`❌ Connection active status NOT_UPDATED: ${id_Socket}`);
      console.log(err);
    });
};
