"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "countries",
      [
        {
          name: "The Netherlands",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Germany",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "France",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Switzerland",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italy",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lithuania",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "USA",
          continent_name: "North America",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UK",
          continent_name: "Europe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
