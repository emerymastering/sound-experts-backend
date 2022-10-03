"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.country, { foreignKey: "id" });
      user.hasMany(models.review, { foreignKey: "user_id_from" });
      user.hasMany(models.review, { foreignKey: "user_id_to" });
    }
  }
  user.init(
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      second_name: { type: DataTypes.STRING, allowNull: false },
      artist_name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      street_address: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      country_id: { type: DataTypes.STRING, allowNull: false },
      phone: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      image_URL: DataTypes.STRING,
      is_expert: DataTypes.BOOLEAN,
      is_blocked: DataTypes.BOOLEAN,
      expert_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
