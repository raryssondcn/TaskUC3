class TaskCompletedService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id, isCompleted}){
        const taskCompleted = await this.taskRepository.updateTaskStatus({id, isCompleted})
        return taskCompleted       
    }
}

module.exports = TaskCompletedService