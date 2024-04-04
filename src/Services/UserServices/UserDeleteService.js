class UserDeleteService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({id}){
        const userDeleted = await this.userRepository.deleteUsers({id})
        return userDeleted
    }
}

module.exports = UserDeleteService