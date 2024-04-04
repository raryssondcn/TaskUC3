class UserListByIdService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({id}){
        const userListed = await this.userRepository.listUsersById({id})
        return userListed
    }
}

module.exports = UserListByIdService