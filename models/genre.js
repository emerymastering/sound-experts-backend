"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      genre.belongsToMany(models.user_expert, {
        through: "user_expert_genres",
        foreignKey: "genre_id",
      });
      genre.hasMany(models.job, { foreignKey: "genre_id" });
    }
  }
  genre.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "genre",
    }
  );
  return genre;
};
