const {Router} = require ("express")
const TaskController = require("../controller/TaskController")
const checkTaskExist = require("../middlewares/checkTaskExist")
const checkUserExist = require("../middlewares/checkUserExist")

const tasksRoutes = Router()

const taskController = new TaskController

tasksRoutes.post("/tasks/:user_id", taskController.createTask)
tasksRoutes.get("/tasks", taskController.listTask)
tasksRoutes.get("/tasks/:id", checkTaskExist, taskController.listTaskbyid)
tasksRoutes.put("/tasks/:id", checkTaskExist, taskController.updateTask)
tasksRoutes.delete("/tasks/:id", checkTaskExist, taskController.deleteTasks)
tasksRoutes.patch("/tasks/:id/status", checkTaskExist, taskController.updateTaskStatus)

module.exports = tasksRoutes