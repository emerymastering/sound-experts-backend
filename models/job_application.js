"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job_application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      job_application.belongsTo(models.job, { foreignKey: "given_id" });
    }
  }
  job_application.init(
    {
      job_id: DataTypes.INTEGER,
      user_expert_id: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      delivery_date: DataTypes.DATEONLY,
      accepted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "job_application",
    }
  );
  return job_application;
};
