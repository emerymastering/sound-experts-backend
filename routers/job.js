const { Router } = require("express");
const Genre = require("../models").genre;
const Job = require("../models").job;
const Specialisation = require("../models").specialisation;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const jobs = await Job.findAll({
      order: [["createdAt", "ASC"]],
      include: [
        { model: Specialisation },
        { model: Genre },
        { model: User, attributes: ["first_name", "second_name", "image_URL"] },
      ],
    });

    res.status(200).send({ message: "ok", jobs: jobs });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
