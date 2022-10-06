"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "jobs",
      [
        {
          user_id: 2,
          specialisation_id: 1,
          genre_id: 1,
          deadline: null,
          remote: true,
          description: "I want you to master one song for me",
          budget: 100,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          specialisation_id: 2,
          genre_id: 2,
          deadline: null,
          remote: true,
          description: "I want you to mix one song for me",
          budget: 200,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jobs", null, {});
  },
};
