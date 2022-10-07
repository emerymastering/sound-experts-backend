"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_expert_specialisations",
      [
        {
          user_expert_id: 1,
          specialisation_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_expert_id: 2,
          specialisation_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_expert_specialisations", null, {});
  },
};
