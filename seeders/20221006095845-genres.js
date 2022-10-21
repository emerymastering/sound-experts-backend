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
          title: "Afrobeat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cinematic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Classical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Electronic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dubstep",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "EDM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Funk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "House",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Reggae",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "RnB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Techno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Trap",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "World",
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
