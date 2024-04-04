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

    async deleteTask({id}){
        const task = this.listTaskById({id})
        this.tasks.splice(task)
        return task
    }
}

module.exports = TaskRepositoryInMemory