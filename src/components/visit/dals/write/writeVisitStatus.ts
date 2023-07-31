import { visitModel } from "../../models";

export const writeVisitStatus = async (socketId: string) => {
  await visitModel
    .update(
      { isActive: false },
      {
        where: {
          socketId: socketId,
        },
      }
    )
    .then(() => {
      console.log(`✅ Visit status updated: ${socketId}`);
    })
    .catch((err: any) => {
      console.log(`❌ Visit status not updated: ${socketId}`);
      console.log(err);
    });
};
