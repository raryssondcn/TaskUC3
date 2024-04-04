const UserRepositoryInMemory = require("../Repositories/UserRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const TaskListService = require("../Services/TaskServices/TaskListService")
const UserCreateService = require("../Services/UserServices/UserCreateService")

describe("TaskCreateService", () => {
    let userRepository = null
    let userCreateService = null
    let taskRepository = null
    let taskCreateService = null
    let taskListService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskListService = new TaskListService(taskRepository)
    })

    it("task should be listed", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }

        const createdUser = await userCreateService.execute(user)

        const task1 = {
            title: "TarefaJest",
            description: "funcionalidades com a biblioteca jest",
            userId: createdUser.id
        }

        await taskCreateService.execute(task1)

        const task2 = {
            title: "TarefaJest2",
            description: "funcionalidades com a biblioteca jest2",
            userId: createdUser.id
        }
        
        await taskCreateService.execute(task2)

        const listTasks = await taskListService.execute()

        expect(listTasks).toEqual(expect.arrayContaining(listTasks))
    })
})