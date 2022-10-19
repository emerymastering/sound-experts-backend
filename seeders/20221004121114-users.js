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
          image_URL: "/images/dragon.jpg",
          is_expert: true,
          is_blocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Bruno",
          second_name: "Mars",
          artist_name: "Bruno Mars",
          email: "bruno@mars.com",
          password: bcrypt.hashSync("1234", 10),
          street_address: "Bassstraat 11",
          city: "Rotterdam",
          country_id: 1,
          phone: "1234567",
          rating: 4,
          image_URL:
            "https://cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500.jpg",
          is_expert: false,
          is_blocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Calvin",
          second_name: "Broadus",
          artist_name: "Snoop Dogg",
          email: "snoop@dogg.com",
          password: bcrypt.hashSync("1234", 10),
          street_address: "nana 22",
          city: "Utrecht",
          country_id: 1,
          phone: "1234567",
          rating: 3,
          image_URL:
            "https://cdns-images.dzcdn.net/images/artist/a423dd42b7394eeacc882be8ac633eee/500x500.jpg",
          is_expert: false,
          is_blocked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Lewis",
          second_name: "Hopkin",
          artist_name: "",
          email: "info@stardeltamastering.com",
          password: bcrypt.hashSync("1234", 10),
          street_address: "unknown",
          city: "Devon",
          country_id: 4,
          phone: "+44 (0) 1647 252895",
          rating: 5,
          image_URL:
            "http://www.stardeltamastering.com/wp-content/themes/stardelta/images/logo.gif",
          is_expert: true,
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
