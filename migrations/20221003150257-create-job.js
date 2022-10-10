"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      specialisation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "specialisations", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      genre_id: {
        type: Sequelize.INTEGER,
        references: { model: "genres", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      deadline: {
        type: Sequelize.DATEONLY,
      },
      remote: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      budget: {
        type: Sequelize.INTEGER,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable("jobs");
  },
};
