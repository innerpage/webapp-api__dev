import { Var } from "../../../../global/var";
import { visitModel } from "../../models";

export const writeNewVisit = async (
  email: string,
  socketId: string,
  ipAddress: string
) => {
  await visitModel
    .create({
      email: email,
      socket_id: socketId,
      ip_address: ipAddress,
    })
    .then((newVisit: any) => {
      if (!newVisit) {
        console.log(
          `${Var.app.emoji.failure} Could not save visit: ${email} (${socketId})`
        );
      }
      console.log(
        `${Var.app.emoji.success} Visit saved: ${email} (${socketId})`
      );
    })
    .catch((err: any) => {
      console.log(
        `${Var.app.emoji.failure} Visit not saved: ${email} (${socketId})`
      );
      console.log(err);
    });
};
