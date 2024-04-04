class TaskListService{
    constructor(taskRepository){
        this.taskRepository = taskRepository
    }
    async execute(){
        const taskListed = await this.taskRepository.listTask()
        return taskListed
    }
}

module.exports = TaskListService