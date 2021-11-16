const express = require("express");
const router = express.Router();

const superheroRouter = require("./superheroRouter");
const superpowersRouter = require("./superpowersRouter");

router.use("/superhero", superheroRouter);
router.use("/superpowers", superpowersRouter);

module.exports = router;
