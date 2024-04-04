class UserListService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute(){
        const userListed = await this.userRepository.listUsers()
        return userListed
    }
}

module.exports = UserListService