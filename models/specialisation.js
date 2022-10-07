"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specialisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      specialisation.hasMany(models.job, { foreignKey: "specialisation_id" });
      specialisation.belongsToMany(models.user_expert, {
        through: "user_expert_specialisations",
        foreignKey: "specialisation_id",
      });
    }
  }
  specialisation.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "specialisation",
    }
  );
  return specialisation;
};
