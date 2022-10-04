"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_expert_genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_expert_genre.belongsTo(models.user_expert);
      user_expert_genre.belongsTo(models.genre);
    }
  }
  user_expert_genre.init(
    {
      user_expert_id: DataTypes.INTEGER,
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_expert_genre",
    }
  );
  return user_expert_genre;
};
