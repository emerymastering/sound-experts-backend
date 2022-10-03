'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    first_name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    artist_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    country_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    image_URL: DataTypes.STRING,
    is_expert: DataTypes.BOOLEAN,
    is_blocked: DataTypes.BOOLEAN,
    expert_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};