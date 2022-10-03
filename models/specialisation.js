'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class specialisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  specialisation.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'specialisation',
  });
  return specialisation;
};