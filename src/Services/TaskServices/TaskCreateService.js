class TaskCreateService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({title, description, userId}){
        const taskCreated = await this.taskRepository.createTask({title, description, userId})
        return taskCreated
    }
}

module.exports = TaskCreateService