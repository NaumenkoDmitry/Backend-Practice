const superpowersRouter = require("express").Router();

const superpowersController = require("../controllers/superpowersController");

superpowersRouter.post("/", superpowersController.createPowers);
/*superpowersRouter.get("/", superpowersController.getPowers);
superpowersRouter.delete("/:id", superpowersController.deletePowers); */

module.exports = superpowersRouter;
