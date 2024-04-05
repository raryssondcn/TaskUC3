class TaskCreateService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({user_id, title, description, userId}){
        const taskCreated = await this.taskRepository.createTask({user_id, title, description, userId})
        return taskCreated
    }
}

module.exports = TaskCreateService