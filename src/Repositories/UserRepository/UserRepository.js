const knex = require("../../database/knex")

class UserRepository{
    async createUser({name, email, password}){

        const isAdmin = false
        const userId = await knex("users").insert({name, email, password, isAdmin})
        return{id: userId}
    }

    async listUsers(){
        const users = await knex("users")
        return users
    }

    async listUsersById({id}){
        const user = await knex("users").where({id})
        return user
    }
    async updateUser({id, name, email, password}){

        const user = await knex("users").where({id})

        user.name = name ?? user.name
        user.email = email ?? user.email
        user.password = password ?? user.password

        await knex("users").update({name: user.name, email: user.email, password: user.password})

        return user
    }
    async deleteUsers({id}){
        const user = await knex("users").where({id}).delete()
        return user
    }
}

module.exports = UserRepository