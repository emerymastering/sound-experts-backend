"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          user_id_from: 1,
          user_id_to: 2,
          review_text: "Such a great customer, looking forward to work again",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id_from: 2,
          user_id_to: 1,
          review_text: "Denis did a great job!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
