const Task = require('../models/task.model');

module.exports.createTask = (req, res) => {
    Task.create(req.body)
        .then(newTask => res.json({task: newTask}))
        .catch(err => res.json({ message: "Error: ", error: err}))
}

module.exports.deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id })
        .then( result => res.json({ result: result}))
        .catch(err => res.json({ message: "Error: ", error: err}))
}

module.exports.findAllTasks = (req, res) => {
    Task.find()
        .then(allTasks => res.json({ list: allTasks}))
        .catch(err => res.json({ message: "Error: ", error: err}))
}