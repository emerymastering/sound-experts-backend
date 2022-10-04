"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Denis",
          second_name: "Teluchin",
          artist_name: "Emery",
          email: "info@emerymastering.nl",
          password: bcrypt.hashSync("1234", 10),
          street_address: "Kerkplein 33",
          city: "Maassluis",
          country_id: 1,
          phone: "1234567",
          rating: 5,
          image_URL:
            "https://insiderpaper.com/wp-content/uploads/2022/05/apple-music-holiday-990x495.webp",
          is_expert: true,
          is_blocked: false,
          expert_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "John",
          second_name: "Bass",
          artist_name: "Kuka",
          email: "info@kuka.nl",
          password: bcrypt.hashSync("1234", 10),
          street_address: "Bassstraat 11",
          city: "Rotterdam",
          country_id: 1,
          phone: "1234567",
          rating: 4,
          image_URL:
            "https://previews.123rf.com/images/evgeniyam/evgeniyam1701/evgeniyam170100010/69272824-decoration-of-musical-notes-in-the-shape-of-a-circle-with-text-.jpg",
          is_expert: false,
          is_blocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Customer",
          second_name: "Good",
          artist_name: "lala",
          email: "info@lala.nl",
          password: bcrypt.hashSync("1234", 10),
          street_address: "nana 22",
          city: "Utrecht",
          country_id: 1,
          phone: "1234567",
          rating: 3,
          image_URL:
            "https://image.shutterstock.com/image-vector/colorful-music-notes-background-260nw-1072049372.jpg",
          is_expert: false,
          is_blocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
