"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("job_applications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_id: {
        type: Sequelize.INTEGER,
        references: { model: "jobs", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      user_expert_id: {
        type: Sequelize.INTEGER,
        references: { model: "user_experts", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      message: {
        type: Sequelize.TEXT,
      },
      price: { type: Sequelize.INTEGER },
      delivery_date: { type: Sequelize.DATEONLY },
      accepted: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable("job_applications");
  },
};
