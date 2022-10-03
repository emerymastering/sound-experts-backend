'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_expert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_expert.init({
    profile_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    discogs_URL: DataTypes.STRING,
    soundcloud_URL: DataTypes.STRING,
    news: DataTypes.TEXT,
    deal: DataTypes.TEXT,
    equipment: DataTypes.TEXT,
    credits: DataTypes.TEXT,
    terms: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user_expert',
  });
  return user_expert;
};