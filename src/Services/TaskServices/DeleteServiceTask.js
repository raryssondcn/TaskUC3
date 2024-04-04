class TaskDeleteService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id}){
        const taskDeleted = await this.taskRepository.deleteTasks({id})
        return taskDeleted
    }
}

module.exports = TaskDeleteService