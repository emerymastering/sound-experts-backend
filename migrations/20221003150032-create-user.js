'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      second_name: {
        type: Sequelize.STRING
      },
      artist_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      street_address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      image_URL: {
        type: Sequelize.STRING
      },
      is_expert: {
        type: Sequelize.BOOLEAN
      },
      is_blocked: {
        type: Sequelize.BOOLEAN
      },
      expert_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};