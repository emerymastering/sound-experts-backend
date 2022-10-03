"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      second_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      artist_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "countries", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      phone: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      image_URL: {
        type: Sequelize.STRING,
      },
      is_expert: {
        type: Sequelize.BOOLEAN,
      },
      is_blocked: {
        type: Sequelize.BOOLEAN,
      },
      expert_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("users");
  },
};
