const express = require("express");
const router = express.Router();

const taskController = require("../controllers/tasks.controller");

router.get("/", taskController.allTasks);
router.post("/create", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;