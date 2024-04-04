class TaskListById{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute({id}){
        const taskListed = await this.taskRepository.listTaskById({id})
        return taskListed
    }
}

module.exports = TaskListById