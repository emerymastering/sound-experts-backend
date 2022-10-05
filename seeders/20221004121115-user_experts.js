"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_experts",
      [
        {
          profile_name: "Emery Mastering",
          description: "Welcome to my mastering studio",
          discogs_URL: "https://www.discogs.com/artist/758462-Emery-2",
          soundcloud_URL: "https://soundcloud.com/ambrarecordings",
          news: "New gear incoming!",
          deal: "first time customer gets 10% discount",
          equipment: "I use the best equipment...",
          credits: "Sony, BMG, Prodigy, etc",
          terms: "my term are...",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_experts", null, {});
  },
};
