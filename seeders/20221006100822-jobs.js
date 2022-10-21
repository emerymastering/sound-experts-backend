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
          deadline: "2022-12-21",
          remote: true,
          description: "I want you to master one song for me",
          budget: 100,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   user_id: 3,
        //   specialisation_id: 2,
        //   genre_id: 2,
        //   deadline: "2022-11-11",
        //   remote: true,
        //   description: "I want you to mix one song for me",
        //   budget: 200,
        //   completed: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        {
          user_id: 7,
          specialisation_id: 7,
          genre_id: 13,
          deadline: "2022-12-13",
          remote: false,
          description: "I am looking for a pro drummer",
          budget: 2000,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          specialisation_id: 4,
          genre_id: 1,
          deadline: "2022-12-24",
          remote: false,
          description: "Yo, great singer please",
          budget: 10000,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          specialisation_id: 2,
          genre_id: 8,
          deadline: "2022-12-22",
          remote: true,
          description: "I need help mixing my song",
          budget: 1000,
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
