const { superpowers, Superhero } = require("../models");

module.exports.createPowers = async (req, res, next) => {
  try {
    const { body } = req;

    const powers = await superpowers.create(body);
    const supPower = await Superhero.findByPk(body.superheroId);
    await powers.addPower(supPower);
    res.send(newTask);
  } catch (err) {
    next(err);
  }
};
