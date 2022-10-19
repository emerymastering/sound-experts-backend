const { Router } = require("express");
const auth = require("../auth/middleware");
const Genre = require("../models").genre;
const Job = require("../models").job;
const Specialisation = require("../models").specialisation;
const Proposal = require("../models").job_application;
const User = require("../models").user;
const JobApplications = require("../models").job_application;
const Experts = require("../models").user_expert;

const router = new Router();

//Get all jobs
router.get("/", async (req, res, next) => {
  try {
    const jobs = await Job.findAll({
      order: [["createdAt", "ASC"]],
      include: [
        { model: Specialisation },
        { model: Genre },
        {
          model: JobApplications,
          include: {
            model: Experts,
            include: [{ model: User }, { model: Specialisation }],
          },
        },
        { model: User, attributes: ["first_name", "second_name", "image_URL"] },
      ],
    });

    res.status(200).send({ jobs });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//Get jobs by user id
router.get("/user", auth, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log("user", userId);
    const jobs = await Job.findAll({
      order: [["createdAt", "ASC"]],
      where: { user_id: userId },
      include: [
        { model: Specialisation },
        { model: Genre },
        {
          model: JobApplications,
          include: {
            model: Experts,
            include: [{ model: User }, { model: Specialisation }],
          },
        },

        {
          model: User,
          attributes: ["image_URL"],
          include: { model: Experts },
        },
      ],
    });

    res.status(200).send({ jobs });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//Get jobs by job id for myAccount
router.get("/by/:id", auth, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log("user", userId);
    const job = await Job.findByPk(req.params.id, {
      include: [
        { model: Specialisation },
        { model: Genre },
        { model: User, attributes: ["image_URL", "first_name", "second_name"] },
      ],
    });

    res.status(200).send({ job });
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

//Post new application
router.post("/:id/apply", auth, async (req, res, next) => {
  try {
    console.log("ar daeini");
    const { message, price, delivery_date } = req.body;
    const user_id = req.user.id;

    const job_id = req.params.id;

    const expertId = await Experts.findOne({ where: { user_id: user_id } });
    console.log("ext id", expertId.dataValues);

    const application = {
      user_id,
      job_id,
      user_expert_id: expertId.dataValues.id,
      message,
      price,
      delivery_date,
    };

    const createApplication = await JobApplications.create(application);

    console.log(createApplication);

    return res
      .status(201)
      .send({ message: "Application created", createApplication });
  } catch (error) {
    next(error);
  }
});

// Delete a job

router.delete("/by/:id", auth, async (req, res, next) => {
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

// Get all specialisations
router.get("/specialisations", async (req, res, next) => {
  try {
    console.log("what the fuck?");
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

// update proposal as accepted

router.patch("/proposal/:id", auth, async (req, res, next) => {
  try {
    const proposal = await Proposal.findByPk(req.params.id, {
      include: { model: Job, attributes: ["user_id"] },
    });
    const userId = req.user.id;
    if (proposal.job.user_id !== userId) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this proposal" });
    }

    await proposal.update({ accepted: true }); //!proposal.accepted

    return res.status(200).send({ proposal });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// get job proposals by job_id
// router.get("/proposals/:id", auth, async (req, res, next) => {
//   try {
//     // const userId = req.user.id;
//     // console.log("user", userId);
//     const proposals = await JobApplications.findAll(
//       { where: { job_id: req.params.id } },
//       {
//         include: [
//           { model: Specialisation },
//           { model: Genre },
//           { model: User, attributes: ["image_URL"] },
//           { model: Experts },
//         ],
//       }
//     );

//     res.status(200).send({ proposals });
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

module.exports = router;
