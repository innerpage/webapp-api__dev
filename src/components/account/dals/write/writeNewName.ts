import { accountModel } from "../../models";

export const writeNewName = async (email: string, newName: string) => {
  let isNameUpdated: boolean = false;
  let payload: any;

  await accountModel
    .update(
      { name: newName },
      {
        where: {
          email: email,
        },
      }
    )
    .then((updatedAccount: any) => {
      isNameUpdated = true;
      payload = updatedAccount;
    })
    .catch((err) => (payload = err));

  if (!isNameUpdated) {
    return {
      success: false,
      message: "❌ Failed to update name",
      payload: payload,
    };
  }

  return {
    success: true,
    message: "✅ Name updated",
    payload: { newName: newName },
  };
};
