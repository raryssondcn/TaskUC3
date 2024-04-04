class UserUpdateService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({id, name, email, password}){
        const userUpdated = await this.userRepository.updateUser({id, name, email, password})
        return userUpdated
    }
}

module.exports = UserUpdateService