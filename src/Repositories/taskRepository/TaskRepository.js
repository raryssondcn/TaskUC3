const knex = require("../../database/knex")

class TaskRepository{
    async createTask({title, description}){

        const isCompleted = false
        const taskId = await knex("tasks").insert({title, description, isCompleted})
        return{id: taskId}
    }

    async listTask(){
        const tasks = await knex("tasks")
        return tasks
    }

    async listTasksById({id}){
        const task = await knex("tasks").where({id})
        return task
    }
    async updateTask({id, title, description}){

        const task = await knex("tasks").where({id})

        task.title = title ?? task.title
        task.description = description ?? task.description

        await knex("tasks").update({title: task.title, description: task.description})

        return task
    }
    async deleteTasks({id}){
        const task = await knex("tasks").where({id}).delete()
        return task
    }
}

module.exports = TaskRepository