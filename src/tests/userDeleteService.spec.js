const UserRepositoryInMemory = require("../Repositories/UserRepository/UserRepositoryInMemory")
const UserCreateService = require("../Services/UserServices/UserCreateService")
const UserDeleteService = require("../Services/UserServices/UserDeleteService")
const UserListService = require("../Services/UserServices/UserListService")


describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null
    let userListService = null
    let userDeleteService = null

    userRepository = new UserRepositoryInMemory()
    userCreateService = new UserCreateService(userRepository)
    userListService = new UserListService(userRepository)
    userDeleteService = new UserDeleteService(userRepository)

    it("user should be deleted", async () => {
        const user1 = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        const user2 = {
            name: "user test2",
            email: "user2@test.com",
            password: "123"
        }

       

        const firstUser = await userCreateService.execute(user1)
        const secondUser = await userCreateService.execute(user2)

        const list = await userListService.execute(firstUser, secondUser)

        await userDeleteService.execute(secondUser)

        expect(list).not.toHaveProperty("name", "user test2")

        console.log(list);
    })
})