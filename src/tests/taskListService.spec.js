const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const TaskListService = require("../Services/TaskServices/TaskListService")

describe("TaskCreateService", () => {
    let taskRepository = null
    let taskCreateService = null
    let taskListService = null

    it("task should be listed", async () => {
        const task1 = {
            title: "TarefaJest",
            description: "funcionalidades com a biblioteca jest"
        }

        const task2 = {
            title: "TarefaJest2",
            description: "funcionalidades com a biblioteca jest2"
        }

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskListService = new TaskListService(taskRepository)

        await taskCreateService.execute(task1)
        await taskCreateService.execute(task2)
        
        const listTasks = await taskListService.execute()

        expect(listTasks).toEqual(expect.arrayContaining(listTasks))
    })
})