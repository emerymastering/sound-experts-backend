"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_expert_specialisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_expert_specialisation.belongsTo(models.user_expert, {
        foreignKey: "user_expert_id",
      });
      user_expert_specialisation.belongsTo(models.specialisation, {
        foreignKey: "specialisation_id",
      });
    }
  }
  user_expert_specialisation.init(
    {
      user_expert_id: DataTypes.INTEGER,
      specialisation_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_expert_specialisation",
    }
  );
  return user_expert_specialisation;
};
