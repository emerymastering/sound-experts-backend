const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Job = require("../models").job;
const UserExpert = require("../models").user_expert;
const JobApplication = require("../models").job_application;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

//login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [
        { model: Job },
        {
          model: UserExpert,
          include: {
            model: JobApplication,
            include: { model: Job, include: { model: User } },
          },
        },
      ],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//signup
router.post("/signup", async (req, res) => {
  const {
    email,
    password,
    first_name,
    second_name,
    artist_name,
    street_address,
    city,
    country_id,
    phone,
  } = req.body;
  if (
    !email ||
    !password ||
    !first_name ||
    !second_name ||
    !street_address ||
    !city ||
    !country_id
  ) {
    return res
      .status(400)
      .send(
        "Please provide an email, password, first and second names and full address"
      );
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      first_name,
      second_name,
      artist_name,
      street_address,
      city,
      country_id,
      phone,
      include: [
        { model: Job },
        {
          model: UserExpert,
          include: {
            model: JobApplication,
            include: { model: Job, include: { model: User } },
          },
        },
      ],
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, user: { ...newUser.dataValues, jobs: [] } });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  const user = await User.findByPk(req.user.id, {
    include: [
      { model: Job },
      {
        model: UserExpert,
        include: {
          model: JobApplication,
          include: { model: Job, include: { model: User } },
        },
      },
    ],
  });
  delete user.dataValues["password"];
  res.status(200).send(user);
});

module.exports = router;
