const TaskController = require('../controllers/task.controller')

// express http requests

module.exports = app => {
    app.get('/api/list/', TaskController.findAllTasks)
    app.post('/api/tasks/new', TaskController.createTask);
    app.delete('/api/task/:id', TaskController.deleteTask);
}