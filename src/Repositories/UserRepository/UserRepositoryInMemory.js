class UserRepositoryInMemory{
    users = []
    async createUser({name, email, password}){
        const user = {
            id: Math.floor(Math.random() * 1000) + 1,
            name, email, password
        }
        this.users.push(user)
        return user
    }

    async listUsers(){
        return this.users
    }

    async listUsersById({id}){
        const user = this.users.find(user => user.id === id)
        return user
    }
    async updateUser({id, name, email, password}){
        const user = this.listUsersById({id})

        user.name = name ?? user.name
        user.email = email ?? user.email
        user.password = password ?? user.password

        return user
    }
    async deleteUsers({id}){
        const user = this.listUsersById({id})
        this.users.splice(user)
        return user
    }
}

module.exports = UserRepositoryInMemory