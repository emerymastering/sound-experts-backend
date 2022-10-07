"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "specialisations",
      [
        {
          title: "Mastering Engineers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mixing Engineers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Female Singers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Male Singers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beatmakers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Producers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Session Musicians",
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
