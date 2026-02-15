const express = require("express");
const controllers = require("./controllers")

const router = express.Router()

router.get("/", controllers.getTugas)
router.post("/:id", controllers.postTugas)
router.delete("/:id", controllers.deleteTugas)
router.put("/:id", controllers.editTugas)
router.put("/pin/:id", controllers.toggleIsPinned)

module.exports = router
