"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "specialisations",
      [
        {
          title: "Mastering Engineer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mixing Engineer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Female Singer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Male Singer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beatmaker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Producer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Drummer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bass Guitarist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Keyboard Player",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("specialisations", null, {});
  },
};
