import { visitModel } from "../../models";

export const writeVisitStatus = async (socketId: string) => {
  await visitModel
    .update(
      { is_active: false },
      {
        where: {
          socket_id: socketId,
        },
      }
    )
    .then(() => {
      console.log(`✅ Connection active status updated: ${socketId}`);
    })
    .catch((err: any) => {
      console.log(`❌ Connection active status not updated: ${socketId}`);
      console.log(err);
    });
};
