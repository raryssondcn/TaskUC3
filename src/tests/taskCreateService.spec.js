const UserRepositoryInMemory = require("../Repositories/UserRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../Repositories/taskRepository/TaskRepositoryInMemory")
const TaskCreateService = require("../Services/TaskServices/TaskCreateService")
const UserCreateService = require("../Services/UserServices/UserCreateService")

describe("TaskCreateService", () => {
    let taskRepository = null
    let userRepository = null
    let taskCreateService = null
    let userCreateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        

    })

    it("task should be created", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        
        const userCreated = await userCreateService.execute(user)
        console.log(userCreated);

        const task = {
            title: "TarefaJest",
            description: "funcionalidades com a biblioteca jest",
            userId: userCreated.id
        }
        

        const taskCreated = await taskCreateService.execute(task)
        console.log(taskCreated);

       
        expect(taskCreated).toHaveProperty("userId", userCreated.id)
        

        
    })
})