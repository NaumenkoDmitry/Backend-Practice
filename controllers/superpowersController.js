const { superpowers, Superhero } = require("../models");

module.exports.createPowers = async (req, res, next) => {
  try {
    const { body } = req;

    const powers = await superpowers.create(body);

    res.send({ data: powers });
  } catch (err) {
    next(err);
  }
};
module.exports.deletePowers = async (req, res, next) => {};
