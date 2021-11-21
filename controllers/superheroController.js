const { Superhero } = require("../models");

module.exports.getHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = await Superhero.findAll({ ...body });
    res.send(hero);
  } catch (error) {
    next(error);
  }
};
module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const heroes = await Superhero.create(body);
    res.send(heroes);
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const heros = await Superhero.findByPk(id);
    await heros.destroy();
    res.send(heros);
  } catch (error) {
    next(error);
  }
};
