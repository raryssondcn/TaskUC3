class TaskRepositoryInMemory{
    tasks = []
    async createTask({title, description, userId}){

        const task = {
            id: Math.floor(Math.random() * 1000) + 1,
            title, description, userId
        }
        this.tasks.push(task)
        return task
    }
    async listTask(){
        return this.tasks
    }

    async listTaskById({id}){
        const task = this.tasks.find(task => task.id === id)
        return task
    }

    async updateTask({id, title, description}){
        const task = this.listTaskById({id})

        task.title = title ?? task.title
        task.description = description ?? task.description

        return task
    }

    async deleteTasks({id}){
        const task = this.listTaskById({id})
        return this.tasks.splice(task, 1)
        
    }
}

module.exports = TaskRepositoryInMemory