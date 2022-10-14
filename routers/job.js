const { Router, request } = require("express");
const auth = require("../auth/middleware");
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

    res.status(200).send({ jobs });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//Post new job
router.post("/", auth, async (req, res, next) => {
  try {
    const {
      specialisation_id,
      genre_id,
      remote,
      deadline,
      description,
      budget,
    } = req.body;
    const user_id = req.user.id;

    const job = {
      user_id,
      specialisation_id,
      genre_id,
      remote,
      deadline,
      description,
      budget,
    };

    const createJob = await Job.create(job);

    return res.status(201).send({ message: "Job created", createJob });
  } catch (error) {
    next(error);
  }
});

// Delete a job

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await Job.findByPk(id);

    if (!job) {
      return res.status(404).send("Job not found");
    }

    const jobUserId = parseInt(job.dataValues.user_id);

    if (req.user.id !== jobUserId) {
      return res.status(401).send({ message: "unauthorized access" });
    }

    await job.destroy();
    res.send({ message: "ok", id });
  } catch (error) {
    next(error);
  }
});

// if user_id (from job) === user.id (from the token)

// Get all specialisations
router.get("/specialisations", async (req, res, next) => {
  try {
    const allSpecialisations = await Specialisation.findAll({
      order: [["title", "ASC"]],
    });
    res.status(200).send(allSpecialisations);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//Get genres
router.get("/genres", async (req, res, next) => {
  try {
    const allGenres = await Genre.findAll({ order: [["title", "ASC"]] });
    res.status(200).send(allGenres);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
