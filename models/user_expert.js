"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_expert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_expert.belongsTo(models.user, { foreignKey: "expert_id" });
      user_expert.belongsToMany(models.genre, {
        through: "user_expert_genres",
        foreignKey: "user_expert_id",
      });
      user_expert.belongsToMany(models.specialisation, {
        through: "user_expert_specialisations",
        foreignKey: "user_expert_id",
      });
    }
  }
  user_expert.init(
    {
      profile_name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      discogs_URL: DataTypes.STRING,
      soundcloud_URL: DataTypes.STRING,
      news: DataTypes.TEXT,
      deal: DataTypes.TEXT,
      equipment: DataTypes.TEXT,
      credits: DataTypes.TEXT,
      terms: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "user_expert",
    }
  );
  return user_expert;
};
