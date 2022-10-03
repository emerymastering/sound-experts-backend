'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job.init({
    given_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    specialisation_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER,
    deadline: DataTypes.DATEONLY,
    remote: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    budget: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'job',
  });
  return job;
};