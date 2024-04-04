const UserRepositoryInMemory = require("../Repositories/UserRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const UpdatedTaskService = require("../Services/TaskServices/UpdateTaskService")
const UserCreateService = require("../Services/UserServices/UserCreateService")

describe("taskUpdateService", () => {
    let userRepository = null
    let userCreateService = null
    let taskRepository = null
    let taskCreateService = null
    let taskUpdateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskUpdateService = new UpdatedTaskService(taskRepository)
    })

    it("task should be updated", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user)

        const task = {
            title: "TarefaJest",
            description: "funcionalidades com a biblioteca jest",
            userId: userCreated.id
        }

        const taskCreated = await taskCreateService.execute(task)

        console.log(taskCreated);

        taskCreated.title = "TarefaJest2",
        taskCreated.description = "Testando a biblioteca Jest"

        const updatedTask = await taskUpdateService.execute(taskCreated)
        
        console.log(updatedTask);

        expect(updatedTask).toHaveProperty("title", "TarefaJest2")
        expect(updatedTask.title).toBe("TarefaJest2")
    })
})