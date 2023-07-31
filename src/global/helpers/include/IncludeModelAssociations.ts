import { accountModel } from "../../../components/account/models";
import { purchaseModel } from "../../../components/purchase/models";

export const IncludeModelAssociations = () => {
  accountModel.hasMany(purchaseModel);
  purchaseModel.belongsTo(accountModel);
};
