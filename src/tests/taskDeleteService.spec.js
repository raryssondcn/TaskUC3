const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskDeleteService = require("../Services/TaskServices/DeleteServiceTask")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const TaskListService = require("../Services/TaskServices/TaskListService")

describe("TaskCreateService", () => {
    let taskRepository = null
    let taskCreateService = null
    let taskDeleteService = null
    let taskListService = null

    it("task should be deleted", async () => {
        const task = {
            title: "TarefaJest",
            description: "funcionalidades com a biblioteca jest"
        }

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskDeleteService = new TaskDeleteService(taskRepository)
        taskListService = new TaskListService(taskRepository)

        await taskCreateService.execute(task)
        await taskDeleteService.execute(task)
        const tasks = await taskListService.execute(task)
        expect(tasks).toHaveLength(0)
    })
})