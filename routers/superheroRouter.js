const superheroRouter = require("express").Router();

const superheroController = require("../controllers/superheroController");

superheroRouter.get("/", superheroController.getHero);
superheroRouter.post("/", superheroController.createHero);
superheroRouter.delete("/:id", superheroController.deleteHero);

module.exports = superheroRouter;
