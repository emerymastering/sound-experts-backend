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
          title: "Singer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Drummer",
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
