const { Router } = require("express");
const User = require("../models").user;
const Expert = require("../models").user_expert;
const Review = require("../models").review;
const Job = require("../models").job;
const Application = require("../models").job_application;
const Specialisation = require("../models").specialisation;
const Country = require("../models").country;

const router = new Router();

//Get all users with job, review and expert models
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [["id", "ASC"]],
      attributes: { exclude: ["password"] },
      include: [
        { model: Job, include: Application },
        { model: Review },
        { model: Expert, include: Specialisation },
      ],
    });

    res.status(200).send({ message: "ok", users: users });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//Get experts by specialisation
router.get("/experts", async (req, res, next) => {
  try {
    const expertsCategories = await Specialisation.findAll({
      include: [{ model: Expert }],
    });

    res.status(200).send(expertsCategories);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//Get countries
router.get("/countries", async (req, res, next) => {
  try {
    const allCountries = await Country.findAll({ order: [["name", "ASC"]] });
    res.status(200).send(allCountries);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
