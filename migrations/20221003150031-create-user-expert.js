"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_experts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      profile_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      discogs_URL: {
        type: Sequelize.STRING,
      },
      soundcloud_URL: {
        type: Sequelize.STRING,
      },
      news: {
        type: Sequelize.TEXT,
      },
      deal: {
        type: Sequelize.TEXT,
      },
      equipment: {
        type: Sequelize.TEXT,
      },
      credits: {
        type: Sequelize.TEXT,
      },
      terms: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_experts");
  },
};
