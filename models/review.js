"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.user, { foreignKey: "id" });
    }
  }
  review.init(
    {
      user_id_from: DataTypes.INTEGER,
      user_id_to: DataTypes.INTEGER,
      review_text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
