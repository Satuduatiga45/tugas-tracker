const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.get("/", controllers.getTugas);
router.post("/", controllers.postTugas);
router.delete("/:id", controllers.deleteTugas);
router.patch("/:id", controllers.editTugas);
router.patch("/pin/:id", controllers.toggleIsPinned);
router.patch("/done/:id", controllers.toggleIsCompleted);

module.exports = router;
