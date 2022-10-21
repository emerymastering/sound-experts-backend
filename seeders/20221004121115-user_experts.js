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
        {
          profile_name: "Stardelta Mastering",
          description: "Best London Mastering",
          discogs_URL:
            "https://www.discogs.com/label/444324-StarDelta-Audio-Mastering",
          soundcloud_URL: "",
          news: "New cables!",
          deal: "albums get discount",
          equipment: "I use the best analogue equipment...",
          credits: "Sony, WarnerMusic, Tiesto, etc",
          terms: "my terms are...",
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profile_name: "Stevie Wonder Vocalist",
          description: "Professional singer",
          discogs_URL: "https://www.discogs.com/artist/18956-Stevie-Wonder",
          soundcloud_URL: "",
          news: "I can see!",
          deal: "very expencive",
          equipment: "me and my microphone",
          credits: "Stevie Wonder",
          terms: "my terms are...",
          user_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profile_name: "Chad Smith RHCP drummer",
          description: "Professional drummer",
          discogs_URL: "https://www.discogs.com/artist/225315-Chad-Smith",
          soundcloud_URL: "",
          news: "New cimballs sound so good!",
          deal: "no deals",
          equipment: "DW drums",
          credits: "Red Hot Chili Peppers",
          terms: "my terms are...",
          user_id: 6,
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
