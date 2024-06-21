import { accountModel } from "../../../components/account/models";
import { noteModel } from "../../../components/note/models";

export const IncludeModelAssociations = () => {
  accountModel.hasMany(noteModel);
};
