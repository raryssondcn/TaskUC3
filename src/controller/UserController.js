const UserRepository = require("../Repositories/UserRepository/UserRepository")
const AdminUserService = require("../Services/UserServices/AdminUserService")
const UserCreateService = require("../Services/UserServices/UserCreateService")
const UserDeleteService = require("../Services/UserServices/UserDeleteService")
const UserListByIdService = require("../Services/UserServices/UserListById")
const UserListService = require("../Services/UserServices/UserListService")
const UserUpdateService = require("../Services/UserServices/UserUpdateService")
const knex = require("../database/knex")


const userRepository = new UserRepository()

const userCreateService = new UserCreateService(userRepository)
const userListService = new UserListService(userRepository)
const userListById = new UserListByIdService(userRepository)
const userUpdateService = new UserUpdateService(userRepository)
const userDeleteService = new UserDeleteService(userRepository)
const adminUserService = new AdminUserService(userRepository)

class UserController{
    async createUser(req, res){
        const {name, email, password} = req.body

        await userCreateService.execute({name, email, password})
        
        res.status(201).json("Cadastrado")
    }

    async listUsers(req, res){

        const users = await userListService.execute()
        res.status(200).json(users)
    }

    async listUsersById(req, res){
        const {id} = req.params
        const user = await userListById.execute({id})
        res.status(200).json(user)
    }

    async updateUser(req, res){
        const {id} = req.params
        const {name, email, password} = req.body
        
        await userUpdateService.execute({id, name, email, password})
        /* await knex("users").where({id}).update({name, email, password}) */

        res.status(201).json("Atualizado")
    }
    async deleteUsers(req, res){
        const {id} = req.params

        await userDeleteService.execute({id})
            
        res.status(201).json("Deletado")
    }
    async adminUser(req, res){
        const {id} = req.params

        await adminUserService.execute({id})
        res.status(201).json("Admin configurado")
    }

}

module.exports = UserController