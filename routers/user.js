const { Router } = require("express");
const User = require("../models").user;
const Expert = require("../models").user_expert;
const Review = require("../models").review;
const Job = require("../models").job;
const Application = require("../models").job_application;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [["id", "ASC"]],
      attributes: { exclude: ["password"] },
      include: [
        { model: Job, include: Application },
        { model: Review },
        { model: Expert, include: Application },
      ],
    });

    res.status(200).send({ message: "ok", users: users });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
