const {Router} = require ("express")
const tasksRoutes = require("./tasks.routes")
const userRoutes = require("./users.routes")

const routes = Router()

routes.use("/", tasksRoutes)
routes.use("/", userRoutes)

module.exports = routes