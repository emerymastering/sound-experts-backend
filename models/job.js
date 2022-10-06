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
      job.belongsTo(models.user, { foreignKey: "user_id" });
      job.hasOne(models.specialisation);
      job.hasOne(models.genre);
      job.hasMany(models.job_application, { foreignKey: "job_id" });
    }
  }
  job.init(
    {
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
