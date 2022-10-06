"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "genres",
      [
        {
          title: "Hip-Hop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Electronic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("genres", null, {});
  },
};
