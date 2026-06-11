const courseModel = require("../models/course.model");

// CRUD

const createCourse = (req, res) => {
    const { title, description, domain, mentor } = req.body;

    // validate condition
    const newCourse = {
        id: Date.now().toString(),
        title,
        description,
        domain,
        mentor
    };
    courseModel.push(newCourse);
    res.status(201).json({ message: "Course created" });
};

const getallCourses = (req, res) => {
    if (courseModel.length === 0) {
        return res.status(200).json({ message: "No course added" });
    }
    res.status(200).json(courseModel);
}

const updateCourse = (req, res) => {
    const id = req.params.id;
    const {title, description, domain, mentor} = req.body;

    const searchCourse = courseModel.find(data => data.id === id);

    if(!searchCourse){
        return res.status(404).json({message: "Course Not Found"});
    }

    // update logic
    searchCourse.title = title || searchCourse.title;
    searchCourse.description = description || searchCourse.description;
    searchCourse.domain = domain || searchCourse.domain;
    searchCourse.mentor = mentor || searchCourse.mentor;

    res.status(200).json({message: "Course details updated"});

};

const deleteCourse = (req, res) => {
    const id = req.params.id;

    const course = courseModel.findIndex(data => data.id === id);

    if(course == -1){
        return res.status(404).json({message: "Course Not Found"});
    }
    courseModel.splice(course, 1);
    res.status(200).json({message: "Course Deleted"});
};

module.exports = {createCourse, getallCourses, updateCourse, deleteCourse};