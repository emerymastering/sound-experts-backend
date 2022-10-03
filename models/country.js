"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      country.hasMany(models.user, { foreignKey: "country_id" });
    }
  }
  country.init(
    {
      name: DataTypes.STRING,
      continent_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "country",
    }
  );
  return country;
};
