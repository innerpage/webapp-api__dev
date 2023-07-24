import { accountModel } from "../../../components/account/models";
import { purchaseModel } from "../../../components/purchase/models";

export const IncludeModelAssociationsHelper = () => {
  accountModel.hasMany(purchaseModel);
  purchaseModel.belongsTo(accountModel);
};
