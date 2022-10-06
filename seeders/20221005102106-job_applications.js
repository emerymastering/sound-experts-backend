"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "job_applications",
      [
        {
          job_id: 1,
          user_expert_id: 1,
          price: 100,
          delivery_date: "2022-11-10",
          message: "I can do this job for you:)",
          accepted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          job_id: 2,
          user_expert_id: 2,
          price: 150,
          delivery_date: "2022-11-15",
          message: "I will deliver high quality results!!",
          accepted: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("job_applications", null, {});
  },
};
