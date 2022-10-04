"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      job.hasOne(models.user);
      job.hasOne(models.specialisation);
      job.hasOne(models.genre);
      job.hasOne(models.job_application);
    }
  }
  job.init(
    {
      given_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      specialisation_id: { type: DataTypes.INTEGER, allowNull: false },
      genre_id: DataTypes.INTEGER,
      deadline: DataTypes.DATEONLY,
      remote: { type: DataTypes.BOOLEAN, defaultValue: true },
      description: { type: DataTypes.TEXT, allowNull: false },
      budget: DataTypes.INTEGER,
      completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "job",
    }
  );
  return job;
};
