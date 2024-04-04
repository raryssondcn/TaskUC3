const TaskRepository = require("../Repositories/taskRepository/TaskRepository")
const TaskDeleteService = require("../Services/TaskServices/DeleteServiceTask")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const TaskListById = require("../Services/TaskServices/TaskListById")
const TaskListService = require("../Services/TaskServices/TaskListService")
const UpdatedTaskService = require("../Services/TaskServices/UpdateTaskService")
const knex = require("../database/knex")

const taskRepository = new TaskRepository()

const taskCreatedService = new TaskCreateService(taskRepository)
const taskListService = new TaskListService(taskRepository)
const taskListById = new TaskListById(taskRepository)
const taskUpdateService = new UpdatedTaskService(taskRepository)
const taskDeleteService = new TaskDeleteService(taskRepository)

class TaskController{
    async createTask(req, res){
        
        const {title, description} = req.body
        
        await taskCreatedService.execute({title, description})

            res.status(201).json(task)
    }

    async listTask(req, res){
       const tasks = await taskListService.execute()
        res.status(201).json(tasks)
    }

    async listTaskbyid(req, res){
        const {id} = req.params
        const tasks = await taskListById.execute({id})
        res.status(201).json(tasks)
    }

    async updateTask(req, res){
        const {id} = req.params
        const {title, description} = req.body
        
        await taskUpdateService.execute({id, title, description})
       
        res.status(200).json("Registro atualizado")
    }

    async deleteTasks(req, res){
        const {id} = req.params
        await taskDeleteService.execute({id})
           
        res.status(201).json("Deletado")
    }
    async updateTaskStatus(req, res){
        const {id} = req.params

        await knex("tasks").where({id}).update({isCompleted: true})
        res.status(201).json("Tarefa concluida")
    }
}

module.exports = TaskController