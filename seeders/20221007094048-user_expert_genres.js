"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_expert_genres",
      [
        {
          user_expert_id: 1,
          genre_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_expert_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_expert_id: 2,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_expert_id: 2,
          genre_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_expert_genres", null, {});
  },
};
