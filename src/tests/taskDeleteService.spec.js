const UserRepositoryInMemory = require("../Repositories/UserRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskDeleteService = require("../Services/TaskServices/DeleteServiceTask")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const TaskListService = require("../Services/TaskServices/TaskListService")
const UserCreateService = require("../Services/UserServices/UserCreateService")

describe("TaskDeleteService", () => {
    let userRepository = null
    let userCreateService = null
    let taskRepository = null
    let taskCreateService = null
    let taskDeleteService = null
    let taskListService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskDeleteService = new TaskDeleteService(taskRepository)
        taskListService = new TaskListService(taskRepository)
    })

    it("task should be deleted", async () => {
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

        await taskCreateService.execute(task)

        await taskDeleteService.execute(task)

        const tasks = await taskListService.execute(task)

        console.log(tasks)
        
        expect(tasks).not.toHaveProperty("title", "TarefaJest")
    })
})