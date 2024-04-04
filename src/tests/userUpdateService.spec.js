const UserRepositoryInMemory = require("../Repositories/UserRepository/UserRepositoryInMemory")
const UserCreateService = require("../Services/UserServices/UserCreateService")
const UserUpdateService = require("../Services/UserServices/UserUpdateService")

describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null
    let userUpdateService = null

    it("user should be updated", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }

        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userUpdateService = new UserUpdateService(userRepository)


        const userCreated = await userCreateService.execute(user)

        userCreated.name = "User updated",
        userCreated.email = "updated@email.com"

        const updatedUser = await userUpdateService.execute(userCreated)

        expect(updatedUser.email).toBe("updated@email.com")
    })
})