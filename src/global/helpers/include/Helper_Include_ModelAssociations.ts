// Model imports
import { model_Account } from "../../../components/account/models";
import { model_Document } from "../../../components/document/models";
import { model_Gateway } from "../../../components/gateway/models";
import { model_Publisher } from "../../../components/publisher/models";
import { model_Purchase } from "../../../components/purchase/models";
import { model_Subscriber } from "../../../components/subscriber/models";
import { model_Publication } from "../../../components/publication/models";

export const Helper_Include_ModelAssociations = () => {
  // Account - Publisher Associations
  model_Account.hasOne(model_Publisher, { foreignKey: { allowNull: false } });
  model_Publisher.belongsTo(model_Account);

  // Account - Purchase Association
  model_Account.hasMany(model_Purchase);
  model_Purchase.belongsTo(model_Account);

  // Publisher - Publication Associations
  model_Publisher.hasMany(model_Publication);
  model_Publication.belongsTo(model_Publisher);

  // Publisher - Gateway Associations
  model_Publisher.hasOne(model_Gateway);
  model_Gateway.belongsTo(model_Publisher);

  // Publisher - Subscriber Associations
  model_Publisher.hasMany(model_Subscriber);
  model_Subscriber.belongsTo(model_Publisher);

  // Publication - Document Associations
  model_Publication.hasMany(model_Document);
  model_Document.belongsTo(model_Publication);
};
