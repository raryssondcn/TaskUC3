const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const UpdatedTaskService = require("../Services/TaskServices/UpdateTaskService")

describe("TaskCreateService", () => {
    let taskRepository = null
    let taskCreateService = null
    let taskUpdateService = null

    it("task should be updated", async () => {
        const task = {
            title: "TarefaJest",
            description: "funcionalidades com a biblioteca jest"
        }

        taskRepository = new TaskRepositoryInMemory
        taskCreateService = new TaskCreateService(taskRepository)
        taskUpdateService = new UpdatedTaskService(taskRepository)

        const taskCreated = await taskCreateService.execute(task)

        taskCreated.title = "TarefaJest2",
        taskCreated.description = "Testando a biblioteca Jest"

        const updatedTask = await taskUpdateService.execute(taskCreated)
        
        expect(updatedTask.title).toBe("TarefaJest2")
    })
})