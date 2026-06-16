/* 
Older model method

let tasks = [];

module.exports = tasks; */

// Schema
// Model
const mongoose = require("mongoose");

// schema
const taskSchmea = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["not-started", "in-progress", "completed"],
        default: "not-started"
    }
});

// model -> it created a collection in database from backend
// input -> collection_name, collection reference schema
const Tasks = mongoose.model("tasks", taskSchmea);
module.exports = Tasks;