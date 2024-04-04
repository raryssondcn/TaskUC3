const {Router} = require ("express")
const UserController = require("../controller/UserController")
const checkUserExists = require("../middlewares/checkUserExist")

const userRoutes = Router()

const userController = new UserController

userRoutes.post("/users", userController.createUser)
userRoutes.get("/users", userController.listUsers)
userRoutes.get("/users/:id", checkUserExists, userController.listUsersById)
userRoutes.put("/users/:id", checkUserExists, userController.updateUser)
userRoutes.delete("/users/:id", checkUserExists, userController.deleteUsers)
userRoutes.patch("/users/:id/admin", checkUserExists, userController.adminUser)

module.exports = userRoutes