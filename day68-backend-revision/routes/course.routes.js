const express = require("express");
const router = express.Router();

const courseController = require("../controllers/course.controller");

// http://localhost:8080/api/course/create
router.post("/create", courseController.createCourse);

// http://localhost:8080/api/course/
router.get("/", courseController.getallCourses);

// http://localhost:8080/api/course/134512345
router.put("/:id", courseController.updateCourse);

// http://localhost:8080/api/course/134512345
router.delete("/:id", courseController.deleteCourse);

module.exports = router;